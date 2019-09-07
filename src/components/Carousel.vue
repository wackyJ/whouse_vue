<template>
  <div class="carousel">
    <el-carousel :interval="5000">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="img/rc_01.png">
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
    height:310px;
  }
  .el-carousel,.el-carousel__container {
    width:100%;
    height:310px;
  }
  .el-carousel__item img {
    width:100%;
    height:100%;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>