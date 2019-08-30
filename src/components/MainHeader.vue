<template>
  <header>
    <ul>
      <li>whouse主页</li>
    </ul>
    <div>
      <span>whouse仓库管理系统</span>
      <el-select v-model="value">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </header>
</template>
<script>
export default {
  data(){
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  }
}
</script>
<style scoped>
  header{
    width:96%;
    height:45px;
    min-width:1200px;
    position:fixed;
    left:4%;
    z-index:99;
    background-color:#f3f3f3;
    border-bottom:3px #e3e3e3 solid;
    display:flex;
    justify-content: space-between;
  }
  header ul {
    height:46px;
  }
  header ul li {
    height:100%;
    padding:10px 10px 0 10px;
    background-color:#fff;
    box-sizing: border-box;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);
    border-bottom:2px #0095ff solid;
  }
</style>