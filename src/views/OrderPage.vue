<template>
  <div>
    <main-aside></main-aside>
    <main-header></main-header>
    <div class="order-page">
      <el-tabs type="border-card">
        <el-tab-pane label="订单提交">
          <el-form ref="form" :model="orderForm" label-width="100px" size="small " :hide-required-asterisk=true> 
            <div class="merge">
              <el-form-item label="订单编号" :required=true>
                <el-input v-model="orderForm.onum" :required=true></el-input>
              </el-form-item>
            </div>
            <div class="merge">
              <el-form-item label="商品编号"> 
                <el-input v-model="orderForm.orderProdcut[0].pid"></el-input>
              </el-form-item>
              <!--<el-form-item label="商品单价">
                <el-input v-model="orderForm.orderProduct[0].sellprice"></el-input>
              </el-form-item>
              <el-form-item label="商品数量">
                <el-input v-model="orderForm.orderProduct[i].ocount"></el-input>
              </el-form-item>
              <el-form-item label="商品总价">
                <el-input v-model="orderForm.orderProduct[i].total" :disabled=true></el-input>
              </el-form-item>-->
              <i title="单击按钮增加商品" class="el-icon-circle-plus-outline"
              ></i>
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
                <el-cascader
                  placeholder="试试搜索：北京"
                  :options="options"
                  filterable
                  @change="getAdress"></el-cascader>
                  <el-input v-model="orderForm.lastAdress" placeholder="详细地址" style="width:100%;"></el-input>
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
        </el-tab-pane>
        <el-tab-pane label="订单查询">订单查询</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">{{orderForm.orderProdcut[0].pid}}</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import citysJson from "../assets/citys.json"
  export default {
    data() {
      return {
        i:0,
        orderForm: {
          onum: '',
          orderProdcut:[{
            pid: 22222,
            sellprice: 0,
            ocount: 0,
            total:0
          }],
          cid: '',
          create_date: '',
          delivery_date: '',
          ostatus:'',
          uid:'',
          firstAdress:'',
          lastAdress:''
        },
        options:citysJson
      };
    },
    methods: {
      onSubmit() {
        this.axios.post("/order/v1/createOrder",{
          params:{
            orderForm:this.orderForm
          }})
      },
      getAdress(val){
        this.orderForm.firstAdress=val;
      }
    /*computed:{
      newTotal(){
        return Number(this.orderForm.orderProdcut[i].sell_price)*Number(this.orderForm.ocount);
      }
    },
    watch:{
      newTotal(val){
        this.orderForm.total=val;
      }*/
    }
  }
</script>

<style scoped>
  .order-page{
    width:98%;
    min-width:1300px;
    position:absolute;
    top:48px;
    padding-left:2%;
    box-sizing: border-box;
    left: 2%;
  }
  .el-tabs{
    box-shadow: none;
    border:none;
  }
  .el-tab-pane{
    /* border:1px solid black; */
    width: 70%;
    margin: 2% auto;
  }
  .merge>div.el-form-item{
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