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
        timestamp: '04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more'
      }, {
        content: '支持自定义颜色',
        timestamp: '04-03 20:46',
        color: '#0bbd87'
      }, {
        content: '支持自定义尺寸',
        timestamp: '04-03 20:46',
        size: 'large'
      }]
    };
  },
  methods:{
    load(){
      let newActive = {content:"",timestamp:""};
      this.activities.push(newActive);
      this.axios.get("/setting/v1")
    }
  },
  created(){
    this.load();
  }
}
</script>

<style scoped>
  .msg{
    width:26%;
    height:310px;
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