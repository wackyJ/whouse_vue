<template>
  <div>
    <main-aside></main-aside>
    <main-header></main-header>
    <div class="order-page">
      <el-tabs type="border-card">
        <el-tab-pane label="订单提交">
          <order-submission
          :orderForm="orderForm"
          :orderDetail="orderDetail"
          :options="options"></order-submission>
        </el-tab-pane>
        <el-tab-pane label="订单查询">
          <order-search
          :search_options="search_options"></order-search>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import citysJson from "../assets/citys.json"
  import OrderSubmission from "../components/OrderSubmission"
  import OrderSearch from "../components/OrderSearch"
  export default {
    components:{
      OrderSubmission,OrderSearch
    },
    data() {
      return {
        // 订单提交标签页数据
        orderForm: {
          oid:null,
          onum: '',
          cid: '',
          remark:null,
          create_date: '',
          delivery_date: '',
          ostatus:'',
          uid:'',
          firstAdress:'',
          lastAdress:'',
        },
        orderDetail:[{
          did:null,
          pid:null,
          sell_price: 0,
          pcount: 0,
          total:0
        }],
        options:citysJson,
        //订单查询标签页数据
        search_options: [{
            value: '选项1',
            label: 'AppleMacBook Air'
          }, {
            value: '选项2',
            label: '小米'
          }, {
            value: '选项3',
            label: 'ThinkPad'
          }, {
            value: '选项4',
            label: '华硕'
          }, {
            value: '选项5',
            label: '联想'
          }, {
            value: '选项6',
            label: '戴尔'
          }, {
            value: '选项7',
            label: '神舟'
          }],
      };
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
    width: 70%;
    margin: 2% auto;
  }
</style>