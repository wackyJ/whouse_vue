<template>
  <header>
    <!-- <el-tabs type="border-card">
      <el-tab-pane label="whouse欢迎你">
        whouse欢迎你
      </el-tab-pane>
      <el-tab-pane label="消息中心"></el-tab-pane>
      <el-tab-pane label="角色管理"></el-tab-pane>
    </el-tabs> -->
    <ul>
      <li>whouse欢迎你</li>
    </ul>
    <router-link :to="''">
      whouse仓库管理系统
    </router-link>
  </header>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  header{
    width:96%;
    height:45px;
    min-width: 1300px;
    position:fixed;
    left:4%;
    z-index:1;
    background-color:#f3f3f3;
    border-bottom:3px #e3e3e3 solid;
  }
  header ul {
    position:absolute;
    left:0px;
    height:100%;
  }
  header ul li {
    padding:10px 10px 0 10px;
    height:100%;
    background-color:#fff;
    box-sizing: border-box;
    border-bottom:2px #0095ff solid;
  }
  header a {
    position:absolute;
    right:5px;
    top:10px;
  }
</style>