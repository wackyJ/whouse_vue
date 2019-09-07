<template>
  <fieldset @input="inputInfo" @change="unitPrice" class="purchaseTable">
    <legend>采购单</legend>
    <el-form ref="form" :model="orderForm" label-width="100px" size="small " :hide-required-asterisk=true > 
      <div class="merge">
        <el-form-item label="采购单编号" :required=true>
          <el-input v-model="orderForm.onum" :required=true></el-input>
        </el-form-item>
      </div>
      <div class="merge">
        <el-form-item label="商品编号"> 
          <el-input data-i="0" data-prop="pid" v-model="orderDetail[0]['pid']"></el-input>
        </el-form-item> 
        <el-form-item label="商品单价">
          <el-input placeholder="0" data-i="0" data-prop="sell_price" :disabled=true></el-input>
        </el-form-item>
        <el-form-item label="商品数量">
          <el-input data-i="0" data-prop="pcount" v-model="orderDetail[0]['pcount']"></el-input>
        </el-form-item>
        <el-form-item label="商品总价">
          <el-input placeholder="0" data-i="0" data-prop="total" :disabled=true></el-input>
        </el-form-item>
        <i title="单击按钮增加商品" class="el-icon-circle-plus-outline"
        @click="addorderDetail"></i>
      </div>  
      <div class="merge" id="clientInfo">
        <el-form-item label="供应商编号">
          <el-input v-model="orderForm.cid"></el-input>
        </el-form-item>
        <el-form-item label="供应商备注">
          <el-input v-model="orderForm.remark"></el-input>
        </el-form-item>
        <el-form-item label="操作人员编号">
          <el-input v-model="orderForm.uid"></el-input>
        </el-form-item>
      </div>
      <el-form-item label="填单时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="orderForm.create_date" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="orderForm.create_date" style="width: 100%;"></el-time-picker>  
        </el-col>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </fieldset>
</template>

<script>
export default {
  props:["orderForm","orderDetail"],
  data(){
    return{
      i:0
    }
  },
  methods: {
    // 封装一个函数，用来清空对应商品信息输入框的值,并清除对应数组对象中的值
    clearInput(index,propname,){
      this.orderDetail[index][propname]=0;
      document.querySelector(`[data-i='${index}'][data-prop=${propname}]`).value="";
    },
    // 封装一个函数,用来计算对应行的商品总价，并存入对应数组对象中
    calcTotal(index){
      // 计算总价并存入数组中
      this.orderDetail[index]['total']=this.orderDetail[index]['sell_price']*this.orderDetail[index]['pcount'];
      // 根据数组中的值改名显示的商品总价
      document.querySelector(`[data-i='${index}'][data-prop='total']`).value=this.orderDetail[index]['total'];
    },
    unitPrice(e){
      if(e.target.dataset.prop=="pid"){
        let i=e.target.dataset.i;
        let pid=this.orderDetail[i]['pid'];
        this.axios.get("order/v1/unitPrice",{params:{pid}}).then(result=>{
          if(result.data.code==200){
            this.orderDetail[i]['sell_price']=result.data.data[0].sell_price;
            // 根据输入的商品id修改显示的商品单价
            document.querySelector(`[data-i='${i}'][data-prop='sell_price']`).value=this.orderDetail[i]['sell_price'];
            this.calcTotal(i);
          }else{
            this.$message({type: 'info',message: '商品ID不存在'});
            this.clearInput(i,'pid');
            this.clearInput(i,'sell_price');
            this.clearInput(i,'pcount');
            this.clearInput(i,'total');
          }
        })
      }
    },
    inputInfo(e){
      if(e.target.dataset.i){ 
        let i = e.target.dataset.i;
        let propname = e.target.dataset.prop;
        this.orderDetail[i][propname]=e.target.value;
        this.calcTotal(i);
      }
    },
    addorderDetail(e){
      this.i++;
      let i=this.i;
      this.orderDetail.push({did:null,pid: 0,sell_price: 0,pcount: 0,total:0});
      var parent=e.target.parentNode.parentNode;
      var newElem=document.createElement("DIV");
      newElem.innerHTML=`
        <div style="display:flex;">
          <div  class="el-form-item is-no-asterisk el-form-item--small ">
            <label class="el-form-item__label" style="width: 100px;">商品编号</label>
            <div class="el-form-item__content" style="margin-left: 100px;">
              <div  class="el-input el-input--small ">
                <input data-i="${i}" data-prop="pid" type="text" autocomplete="off" class="el-input__inner">
              </div>
            </div>
          </div>
          <div  class="el-form-item is-no-asterisk el-form-item--small ">
            <label class="el-form-item__label" style="width: 100px;">商品单价</label>
            <div class="el-form-item__content" style="margin-left: 100px;">
              <div  class="el-input el-input--small is-disabled">
                <input placeholder="0" data-i="${i}" data-prop="sell_price" type="text" autocomplete="off" class="el-input__inner" disabled="disabled">
              </div>
            </div>
          </div>
          <div  class="el-form-item is-no-asterisk el-form-item--small ">
            <label class="el-form-item__label" style="width: 100px;">商品数量</label>
            <div class="el-form-item__content" style="margin-left: 100px;">
              <div  class="el-input el-input--small ">
                <input placeholder="0" data-i="${i}" data-prop="pcount" type="text" autocomplete="off" class="el-input__inner">
              </div>
            </div>
          </div>
          <div  class="el-form-item is-no-asterisk el-form-item--small ">
            <label class="el-form-item__label" style="width: 100px;">商品总价</label>
            <div class="el-form-item__content" style="margin-left: 100px;">
              <div  class="el-input el-input--small  is-disabled">
                <input placeholder="0" data-i="${i}" data-prop="total" type="text" disabled="disabled" autocomplete="off" class="el-input__inner">
              </div>
            </div>
          </div>
        </div>
      `; 
      parent.insertBefore( newElem, document.getElementById("clientInfo") );
    },
    onSubmit() {
      this.axios.post("/order/v1/OrderSubmission",{
        params:{
          orderForm:this.orderForm,
          orderDetail:this.orderDetail
        }}).then(result=>{
            if(result.data.code == -1){
              this.$message({
                type: 'info',
                message: '请先登录'
              });
              this.$router.push("/login");
            }else if(result.data.code==200){
              this.$message({
                type: 'success',
                message: '采购单提交成功!'
              });
              this.orderForm={};
              this.orderDetail=[{did:null,pid: 0,sell_price: 0,pcount: 0,total:0}];
            }else{
              this.$message({
                type: 'info',
                message: '错误，采购单提交失败!'
              });
            }
        })
    },
    getAdress(val){
      this.orderForm.firstAdress=val;
    }
  },
  computed:{
    newTotal(){
      return Number(this.orderDetail[0].sell_price)*Number(this.orderDetail[0].pcount);
    }
  },
  watch:{
    newTotal(val){
      this.orderDetail[0].total=val;
    }
  }
}
</script>

<style  scoped>
  .purchaseTable{
    border:1px solid #ccc;
    padding:18px 18px 0 18px;
    width: 70%;
    margin: 10% auto;
  }
  .merge div.el-form-item{
    padding-right:0;
    margin-bottom:0;
  }
  .merge,.el-radio-group{
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    justify-content: space-between;
  }
  .el-radio{
    margin:0;
  }

</style>
