<template>
  <ul class="aside">
    <li>
      <a href="javascript:;">
        <img src="img/logo_pic.png">
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
        <span class="iconfont">&#xe7b6;</span>库存
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
    min-width:60px;
    position:fixed;
    background-color:dodgerblue;
    z-index:2;
  }
  .aside li{
    width:100%;
    height:80px;
  }
  .aside li a img {
    width:60%;
    height:45px; 
    margin-top:15px;
  }
  .aside li a{
    color:#fff;
    font-size:14px;
    display:block;
  }
  .aside .iconfont{
    font-size:30px;
    display: block;
  }
  .aside li:last-child{
    position:absolute;
    bottom:5px;
  }
</style>