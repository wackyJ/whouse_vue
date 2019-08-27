<template>
  <div class="log">
    <h1>待办事项日志</h1>
    <input type="text"><button>+</button>
    <ul>
      <li>未发货订单即使处理</li>
      <li>1.未发货订单即使处理</li>
      <li>1.未发货订单即使处理</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Log'
}
</script>

<style scoped>
  .log{
    width:36%;
    height:420px;
    margin-top:15px;
    background-color:#fff;
  }
</style>