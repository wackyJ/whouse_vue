<template>
  <div>
    <main-aside></main-aside>
    <main-header></main-header>
    <div class="order-page">
      <el-tabs type="border-card">
        <el-tab-pane label="订单提交">
          <el-form ref="form" :model="sizeForm" label-width="100px" size="small " > 
            <el-form-item label="订单编号">
              <el-input v-model="sizeForm.onum"></el-input>
            </el-form-item>
            <el-form-item label="商品编号">
              <el-input v-model="sizeForm.pid"></el-input>
            </el-form-item>
            <el-form-item label="商品单价">
              <el-input v-model="sizeForm.sell_price"></el-input>
            </el-form-item>
            <el-form-item label="商品数量">
              <el-input v-model="sizeForm.ocount"></el-input>
            </el-form-item>
            <el-form-item label="商品总价">
              <el-input v-model="sizeForm.total"></el-input>
            </el-form-item>
            <el-form-item label="客户编号">
              <el-input v-model="sizeForm.cid"></el-input>
            </el-form-item>
            <el-form-item label="客户备注">
              <el-input v-model="sizeForm.remark"></el-input>
            </el-form-item>
            <el-form-item label="操作人员编号">
              <el-input v-model="sizeForm.uid"></el-input>
            </el-form-item>
            <el-form-item label="收货地址">
              <el-select v-model="sizeForm.create_date" placeholder="请选择省">
                <el-option label="省1" value="shanghai"></el-option>
                <el-option label="省2" value="beijing"></el-option>
              </el-select>
              <el-select v-model="sizeForm.create_date" placeholder="请选择市">
                <el-option label="市1" value="shanghai"></el-option>
                <el-option label="市2" value="beijing"></el-option>
              </el-select>
              <el-select v-model="sizeForm.create_date" placeholder="请选择县">
                <el-option label="县1" value="shanghai"></el-option>
                <el-option label="县2" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="创建时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.create_date" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="sizeForm.create_date" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
             <el-form-item label="发货时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.delivery_date" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="sizeForm.delivery_date" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="活动性质">
              <el-checkbox-group v-model="sizeForm.type">
                <el-checkbox-button label="美食/餐厅线上活动" name="type"></el-checkbox-button>
                <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
                <el-checkbox-button label="线下主题活动" name="type"></el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>
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
  export default {
    data() {
      return {
        sizeForm: {
          onum: '',
          pid: '',
          sell_price: 0,
          ocount: 0,
          total:'',
          cid: '',
          create_date: '',
          delivery_date: '',
          ostatus:'',
          uid:''
        }
      };
    },
    methods: {
      onSubmit() {
      //  console.log('submit!');
      }
    }
  }
</script>

<style scoped>
  .order-page{
    width:96%;
    height:100%;
    min-width:1300px;
    position:relative;
    left:4%;
    top:48px; 
    padding:28px 65px 30px 65px;
    box-sizing: border-box;
    background-color:#eceff3;
  } 
</style>