<template>
  <div class="msg">
    <h4>系统提示</h4>
    <el-timeline class="tLine">
      <el-timeline-item class="item"
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp">
        {{activity.content}}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
  export default {
    name: "SystemMsg",
    data() {
      return {
        activities: [{
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }, {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }]
      };
    }
  };
</script>

<style scoped>
  .msg{
    width:26%;
    height:300px;
    padding:1%;
    box-sizing: border-box;
    background-color:#fff;
    text-align: left;
  }
  .msg h4 {
    font-size:18px;
  }
  .msg .tLine{
    margin-left:5%;
    margin-top:3%;
  }
</style>