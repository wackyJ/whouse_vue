<template>
  <div>
    <!-- 侧边栏 子组件 -->
    <main-aside></main-aside>
    <!-- 右侧 header部分 子组件 -->
    <main-header></main-header>
    <!-- 右侧主体部分 -->
    <!-- 右侧主体--section部分 -->
    <div class="section">
      <!-- section--summary信息展示部分 -->
      <ul class="summary">
        <li>
          <span class="sum_sp1">
            <span></span>&nbsp;&nbsp;待付款
          </span>
          <span class="sum_sp2">18</span>
        </li>
        <li>
          <span class="sum_sp1">
            <span></span>&nbsp;&nbsp;待审核
          </span>
          <span class="sum_sp2">18</span>
        </li>
        <li>
          <span class="sum_sp1">
            <span></span>&nbsp;&nbsp;异常
          </span>
          <span class="sum_sp2">18</span>
        </li>
        <li>
          <span class="sum_sp1">
            <span></span>&nbsp;&nbsp;未发货
          </span>
          <span class="sum_sp2">18</span>
        </li>
        <li>
          <span class="sum_sp1">
            <span></span>&nbsp;&nbsp;今日发货
          </span>
          <span class="sum_sp2">18</span>
        </li>
        <li>
          <span class="sum_sp1">
            <span></span>&nbsp;&nbsp;发货失败
          </span>
          <span class="sum_sp2">18</span>
        </li>
        <li>
          <span class="sum_sp1">
            <span></span>&nbsp;&nbsp;普通退货
          </span>
          <span class="sum_sp2">18</span>
        </li>
        <li>
          <span class="sum_sp1">
            <span></span>&nbsp;&nbsp;已收货待确认
          </span>
          <span class="sum_sp2">18</span>
        </li>
      </ul>
      <!-- section--info信息展示部分 -->
      <div class="info">
        <!-- 子组件 轮播图 -->
        <Carousel></Carousel>
        <!-- 工具项 -->
        <ul class="tool">
          <li>
            <a href="javascript:;">
              <span class="iconfont">&#xe7a7;</span>订单
            </a>
          </li>
          <li>
            <router-link :to="'/repertory'">
              <span class="iconfont">&#xe7a7;</span>商品库存
            </router-link>
          </li>
          <li>
            <a href="javascript:;">
              <span class="iconfont">&#xe7a7;</span>采购入库
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="iconfont">&#xe7a7;</span>销售出库
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="iconfont">&#xe7a7;</span>新手入门
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="iconfont">&#xe7a7;</span>供应链
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="iconfont">&#xe7a7;</span>客户群
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="iconfont">&#xe7a7;</span>1688淘管家
            </a>
          </li>
        </ul>
        <!-- 子组件 系统提示信息 -->
        <system-msg></system-msg>
        <!-- 子组件 财务报表 -->
        <charts></charts>
        <!-- 子组件 日志 -->
        <log></log>
        <!-- 服务中心 -->
        <div class="service">服务中心</div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel'
import SystemMsg from '../components/SystemMsg'
import Charts from '../components/Charts'
import Log from '../components/Log'
export default {
  components:{
    Carousel,SystemMsg,Charts,Log
  }
}
</script>

<style scoped>
  /* 右侧主体--section部分 */
  .section{
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
  /* section--summary信息展示 */
  .summary{
    height:90px;
    color:#000;
    min-width:930px;
    background-color:#fff;
  }
  .summary li{
    float:left;
    width:12%;
    height:75px;
    text-align: center;
    padding-top:15px;
  }
  .summary .sum_sp1 span{
    display:inline-block;
    width:12px;
    height:12px;
    border-radius:50%;
    background-color:#f00;
  }
  .summary .sum_sp1{
    font-size:15px;
  }
  .summary .sum_sp2{
    display:block;
    font-size:32px;
  }
  /* section--info信息展示 */
  .info{
    margin-top:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
  }
  /* 工具项 */
  .tool{
    width:36%;
    height:300px;
    background-color:#fff;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
    padding:2% 0;
    box-sizing: border-box;
  }
  .tool li{
    width:21%;
    text-align:center;
  }
  .tool li a{
    display:block;
    color:#6a6a6a;
    margin-top:20%;
    font-size:14px;
  }
  .tool .iconfont{
    display:block;
    font-size:40px;
  }
  /* 服务中心 */
  .service{
    width:26%;
    height:420px;
    margin-top:15px;
    background-color:#fff;
  }
</style>