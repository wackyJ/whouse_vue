<template>
  <ul class="aside">
    <li>
      <a href="javascript:;">
        <span class="iconfont">&#xe796;</span>
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <span class="iconfont">&#xe78b;</span>订单
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <span class="iconfont">&#xe79d;</span>商品
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <span class="iconfont">&#xe78b;</span>采购
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <span class="iconfont">&#xe7b6;</span>库存
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <span class="iconfont">&#xe78b;</span>供应
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <span class="iconfont">&#xe7b8;</span>设置
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .aside{
    width:4%;
    height:100%;
    position:fixed;
    background-color:dodgerblue;
  }
  .aside li{
    height:80px;
  }
  .aside li:first-child{line-height: 80px;}
  .aside li a{
    color:#fff;
    font-size:14px;
  }
  .aside .iconfont{
    font-size:30px;
  }
  .aside a span:last-child{
    display: block;
  }
  .aside li:last-child{
    margin-top:380px;
  }
</style>