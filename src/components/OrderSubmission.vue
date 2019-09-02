<template>
    <el-form ref="form" :model="orderForm" label-width="100px" size="small " :hide-required-asterisk=true> 
      <div class="merge">
        <el-form-item label="订单编号" :required=true>
          <el-input v-model="orderForm.onum" :required=true></el-input>
        </el-form-item>
      </div>
      <div class="merge">
        <el-form-item label="商品编号"> 
          <el-input v-model="orderDetail[i].pid"></el-input>
        </el-form-item> 
        <el-form-item label="商品单价">
          <el-input v-model="orderDetail[i].sell_price"></el-input>
        </el-form-item>
        <el-form-item label="商品数量">
          <el-input v-model="orderDetail[i].ocount"></el-input>
        </el-form-item>
        <el-form-item label="商品总价">
          <el-input v-model="orderDetail[i].total" :disabled=true></el-input>
        </el-form-item>
        <i title="单击按钮增加商品" class="el-icon-circle-plus-outline"
        @click="addorderDetail"></i>
      </div>  
      <div class="merge">
        <el-form-item label="客户编号">
          <el-input v-model="orderForm.cid"></el-input>
        </el-form-item>
        <el-form-item label="客户备注">
          <el-input v-model="orderForm.remark"></el-input>
        </el-form-item>
        <el-form-item label="操作人员编号">
          <el-input v-model="orderForm.uid"></el-input>
        </el-form-item>
      </div>
      <el-form-item label="收货地址">
        <div class="block merge">
          <el-cascader style="width:50%;"
            placeholder="试试搜索：北京"
            :options="options"
            filterable
            @change="getAdress"></el-cascader>
            <el-input v-model="orderForm.lastAdress" placeholder="详细地址"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="orderForm.create_date" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="orderForm.create_date" style="width: 100%;"></el-time-picker>  
        </el-col>
      </el-form-item>
        <el-form-item label="发货时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="orderForm.delivery_date" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="orderForm.delivery_date" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <!-- <el-form-item label="活动性质">
        <el-checkbox-group v-model="orderForm.type">
          <el-checkbox-button label="美食/餐厅线上活动" name="type"></el-checkbox-button>
          <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
          <el-checkbox-button label="线下主题活动" name="type"></el-checkbox-button>
        </el-checkbox-group>
      </el-form-item> -->
      <el-form-item label="订单状态">
        <el-radio-group v-model="orderForm.ostatus" size="mini">
          <el-radio border label="待付款"></el-radio>
          <el-radio border label="待审核"></el-radio>
          <el-radio border label="异常"></el-radio>
          <el-radio border label="未发货"></el-radio>
          <el-radio border label="今日发货"></el-radio>
          <el-radio border label="发货失败"></el-radio>
          <el-radio border label="普通退货"></el-radio>
          <el-radio border label="已收货待确认"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
export default {
    props:["orderForm","orderDetail","options"],
    data(){
        return{
            i:0
        }
    },
    methods: {
      addorderDetail(e){
        this.i++;
        var parent=e.target.parentNode.parentNode;
        var newElem=document.createElement("DIV");
        newElem.innerHTML=`
          <div style="display:flex;">
            <div  class="el-form-item is-no-asterisk el-form-item--small ">
              <label class="el-form-item__label" style="width: 100px;">商品编号</label>
              <div class="el-form-item__content" style="margin-left: 100px;">
                <div  class="el-input el-input--small ">
                  <input type="text" autocomplete="off" class="el-input__inner">
                </div>
              </div>
            </div>
            <div  class="el-form-item is-no-asterisk el-form-item--small ">
              <label class="el-form-item__label" style="width: 100px;">商品单价</label>
              <div class="el-form-item__content" style="margin-left: 100px;">
                <div  class="el-input el-input--small ">
                  <input type="text" autocomplete="off" class="el-input__inner">
                </div>
              </div>
            </div>
            <div  class="el-form-item is-no-asterisk el-form-item--small ">
              <label class="el-form-item__label" style="width: 100px;">商品数量</label>
              <div class="el-form-item__content" style="margin-left: 100px;">
                <div  class="el-input el-input--small ">
                  <input type="text" autocomplete="off" class="el-input__inner">
                </div>
              </div>
            </div>
            <div  class="el-form-item is-no-asterisk el-form-item--small ">
              <label class="el-form-item__label" style="width: 100px;">商品总价</label>
              <div class="el-form-item__content" style="margin-left: 100px;">
                <div  class="el-input el-input--small  is-disabled">
                  <input type="text" disabled="disabled" autocomplete="off" class="el-input__inner">
                </div>
              </div>
            </div>
          </div>
        `; 
        parent.insertBefore( newElem, e.target.parentNode.nextSibling );
        this.orderForm.orderDetail.push({});
      },
      onSubmit() {
        this.axios.post("/order/v1/createOrder",{
          params:{
            orderForm:this.orderForm,
            orderDetail:this.orderDetail
          }}).then(result=>{
              console.log(result);
          })
      },
      getAdress(val){
        this.orderForm.firstAdress=val;
      }
    }
    /*computed:{
      newTotal(){
        return Number(this.orderForm.orderDetail[i].sell_price)*Number(this.orderForm.ocount);
      }
    },
    watch:{
      newTotal(val){
        this.orderForm.total=val;
    }*/
}
</script>

<style  scoped>
  .merge div.el-form-item{
    /* border:1px solid red; */
    padding-right:0;
    margin-bottom:0;
  }
  .merge,.el-radio-group{
    /* border: 2px solid black; */
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    justify-content: space-between;
  }
  .el-radio{
    margin:0;
  }
</style>
