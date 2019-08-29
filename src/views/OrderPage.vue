<template>
  <div>
    <main-aside></main-aside>
    <main-header></main-header>
    <div class="order-page">
      <el-tabs type="border-card">
        <el-tab-pane label="订单提交">
          <el-form ref="form" :model="sizeForm" label-width="100px" size="small " > 
            <div class="merge">
              <el-form-item label="订单编号">
                <el-input v-model="sizeForm.onum"></el-input>
              </el-form-item>
              <el-form-item label="商品编号">
                <el-input v-model="sizeForm.pid"></el-input>
              </el-form-item>
            </div>
            <div class="merge">
              <el-form-item label="商品单价">
                <el-input v-model="sizeForm.sell_price"></el-input>
              </el-form-item>
              <el-form-item label="商品数量">
                <el-input v-model="sizeForm.ocount"></el-input>
              </el-form-item>
              <el-form-item label="商品总价">
                <el-input v-model="sizeForm.total" :disabled=true></el-input>
              </el-form-item>
            </div>
            <div class="merge">
              <el-form-item label="客户编号">
                <el-input v-model="sizeForm.cid"></el-input>
              </el-form-item>
              <el-form-item label="客户备注">
                <el-input v-model="sizeForm.remark"></el-input>
              </el-form-item>
              <el-form-item label="操作人员编号">
                <el-input v-model="sizeForm.uid"></el-input>
              </el-form-item>
            </div>
            <el-form-item label="收货地址">
              <div class="block merge">
                <el-cascader
                  placeholder="试试搜索：北京"
                  :options="options"
                  filterable
                  @change="getAdress"></el-cascader>
                  <el-input v-model="sizeForm.lastAdress" placeholder="详细地址" style="width:52%;"></el-input>
              </div>
            </el-form-item>
            <el-form-item label="创建时间">
              <el-col :span="8">
                <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.create_date" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="1">-</el-col>
              <el-col :span="8">
                <el-time-picker placeholder="选择时间" v-model="sizeForm.create_date" style="width: 100%;"></el-time-picker>  
              </el-col>
            </el-form-item>
             <el-form-item label="发货时间">
              <el-col :span="8">
                <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.delivery_date" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="1">-</el-col>
              <el-col :span="8">
                <el-time-picker placeholder="选择时间" v-model="sizeForm.delivery_date" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <!-- <el-form-item label="活动性质">
              <el-checkbox-group v-model="sizeForm.type">
                <el-checkbox-button label="美食/餐厅线上活动" name="type"></el-checkbox-button>
                <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
                <el-checkbox-button label="线下主题活动" name="type"></el-checkbox-button>
              </el-checkbox-group>
            </el-form-item> -->
            <el-form-item label="订单状态">
              <el-radio-group v-model="sizeForm.ostatus" size="mini">
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
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import citysJson from "../assets/citys.json"
  export default {
    data() {
      return {
        sizeForm: {
          onum: '',
          pid: '',
          sell_price: 0,
          ocount: 0,
          total:0,
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
      //  console.log('submit!');
      },
      getAdress(val){
        this.sizeForm.firstAdress=val;
      }
    },
    computed:{
      newTotal(){
        return Number(this.sizeForm.sell_price)*Number(this.sizeForm.ocount);
      }
    },
    watch:{
      newTotal(val){
        this.sizeForm.total=val;
      }
    }
  }
</script>

<style scoped>
  .order-page{
    width:98%;
    min-width:1300px;
    position:absolute;
    top:48px;
    padding:28px 65px 30px 65px;
    box-sizing: border-box;
    left: 2%;
  }
  .merge{
    display: flex;
  }
  /*input.el-input__inner{
    border:1px solid red;
  }
  .el-tabs{
    width: 1%;
  }
  .el-radio-group{
    width:50%;
  }*/
</style>