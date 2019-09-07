
    
    <!-- <div class="male1"> 
      <el-breadcrumb separator="|" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }">销售发货</el-breadcrumb-item>
        <el-breadcrumb-item>采购进货</el-breadcrumb-item>
        <el-breadcrumb-item>售后处理</el-breadcrumb-item>
      </el-breadcrumb>
     
    </div>
      <div class="male2">
      <el-breadcrumb separator=">" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }">订单审核</el-breadcrumb-item>
        <el-breadcrumb-item>配快递</el-breadcrumb-item>
        <el-breadcrumb-item>拣货</el-breadcrumb-item>
        <el-breadcrumb-item>验货</el-breadcrumb-item>
        <el-breadcrumb-item>称重</el-breadcrumb-item>
        <el-breadcrumb-item>发货</el-breadcrumb-item>
      </el-breadcrumb>
      </div>

<script>
  import citysJson from "../assets/citys.json"
  import OrderSubmission from "../components/OrderSubmission"
  import OrderSearch from "../components/OrderSearch"

export default {
  
}
</script>

<style>
  /* 顶部面包屑 */
  .male1{
    position: absolute;
    top: 100px;
    left: 600px;
  }
  .el-breadcrumb.bread{
    font-size: 20px;
    line-height: 1;
}
  /* 第二行面包屑 */
  .male2{
    position: absolute;
    top: 200px;
    left: 525px;
    border: 1px solid #ccc;
    padding: 10px;
    background: #ccc;
    
  }
</style> -->
<template>
  <div  class="ind">
    <!-- 侧边栏 子组件 -->
    <main-aside></main-aside>
    <!-- 右侧 header部分 子组件 -->
    <main-header></main-header>
    <!-- 右侧主体部分 -->
    <div class="main">
    <!-- 外层导航 -->
    <el-tabs type="border-card"> 
      <el-tab-pane label="销售发货">
        <br>
        <!-- 内层导航 -->
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="订单审核" name="first">订单审核</el-tab-pane>
          <el-tab-pane label="配快递" name="second">配快递</el-tab-pane>
          <el-tab-pane label="拣货" name="third">拣货</el-tab-pane>
          <el-tab-pane label="验货" name="fourth">验货</el-tab-pane>
          <el-tab-pane label="称重" name="fifth">称重</el-tab-pane>
          <el-tab-pane label="发货" name="sixth">发货</el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <br>
      <el-tab-pane label="采购进货">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
         <el-tab-pane label="采购计划" name="first">采购计划</el-tab-pane>
           <el-tab-pane label="采购单审核" name="second">采购单审核</el-tab-pane>
           <el-tab-pane label="进货入库" name="third">进货入库</el-tab-pane>
           <el-tab-pane label="进仓上架" name="fourth">进仓上架</el-tab-pane>
          </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="售后处理">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="申请售后" name="first">申请售后</el-tab-pane>
          <el-tab-pane label="生成售后单" name="second">生成售后单</el-tab-pane>
          <el-tab-pane label="审核" name="third">审核</el-tab-pane>
          <el-tab-pane label="退货入库" name="fourth">退货入库</el-tab-pane>
          <el-tab-pane label="消退上架" name="fifth">消退上架</el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
    </div>
  </div>  
</template>   
<script>
  export default {
    data() {
      return {
        activeName2: 'first'
      };
    },
    methods: {
      // handleClick(tab, event) {
      //   console.log(tab, event);
      // }
    }
  };
</script>
<style scoped>
  .ind{
    position: relative;
  }
  .main{
    position: absolute;
    width: 1000px;
    height: 500px;
    left:  250px;
    top: 100px; 
    right: 200px;
    
  }
  .el-tab-pane{
    height: 500px;
  }
</style>
