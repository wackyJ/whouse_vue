<template>
  <div>
    <main-aside></main-aside>
    <main-header></main-header>
    <div class="section">
      <h2>设置</h2>
      <el-tabs type="border-card">
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .section{
    width:96%;
    height:100%;
    min-width:1300px;
    position:relative;
    left:4%;
    top:48px; 
    /* padding:28px 65px 30px 65px; */
    box-sizing: border-box;
    background-color:#eceff3;
  }
</style>