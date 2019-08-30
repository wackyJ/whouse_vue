<template>
  <div class="log">
    <h4>任务列表</h4>
    <el-timeline class="tLine">
      <el-timeline-item timestamp="2018/4/12" placement="top" :hide-timestamp=true>
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>MissZither 提交于 2019/8/12 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top" :hide-timestamp=true>
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>MissZither 提交于 2019/8/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top" :hide-timestamp=true>
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>MissZither 提交于 2019/8/2 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
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
    box-sizing: border-box;
    text-align: left;
    padding:1% 4% 1% 1%;
  }
  .log h4{
    font-size:18px;
  } 
  .log .tLine{
    margin-top:3%;
  }
</style>