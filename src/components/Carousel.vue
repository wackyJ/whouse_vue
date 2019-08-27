<template>
  <div class="carousel">
     <el-carousel :interval="5000">
    <el-carousel-item v-for="item in 4" :key="item">
      <img src="img/rc_01.png" alt="">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel'
}
</script>

<style scoped>
  .carousel{
    width:36%;
    background-color:#fff;
    height:300px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  
</style>