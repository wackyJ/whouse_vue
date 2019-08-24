<template>
  <aside>
    <ul>
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
  </aside>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  aside{
    float:left;
    width:4%;
    height:950px;
    background-color:dodgerblue;
  }
  aside ul{
    text-align: center;
  }
  aside ul li{
    height:80px;
  }
  aside ul li:first-child{line-height: 80px;}
  aside a{
    color:#fff;
    font-size:14px;
  }
  aside .iconfont{
    font-size:30px;
  }
  aside a span:last-child{
    display: block;
  }
  aside ul li:last-child{
    margin-top:380px;
  }
</style>