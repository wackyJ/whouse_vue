<template>
  <div>
    <main-aside></main-aside>
    <main-header></main-header>
    <div class="section" :style="{height:cHeight}">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
            <el-table-column
              label="员工编号" prop="uid">
            </el-table-column>
            <el-table-column
              label="员工姓名" prop="uname">
            </el-table-column>
            <el-table-column
              label="邮箱" prop="email">
            </el-table-column>
            <el-table-column
              label="联系方式" prop="uphone">
            </el-table-column>
            <el-table-column
              label="性别" prop="gender">
            </el-table-column>
            <el-table-column
              label="权限" prop="token_id">
            </el-table-column>
            <el-table-column align="right">
              <template slot="header" :slot-scope="scope">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
              </template>
              <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination background layout="prev, pager, next" 
            :page-count="pcount"
            @current-change="changePage">
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pno:0,
      pcount:0,
      cHeight:0,
      activeName: 'first',
      tableData: [],
      search: ''
    }
  },
  methods: {
    load(){

    },
    // handleClick(tab, event) {
    //   // console.log(tab, event);
    // },
    // handleEdit(index, row) {
    //   // console.log(index, row);
    // },
    // handleDelete(index, row) {
    //   // console.log(index, row);
    // }
  },
  created() {
    this.cHeight=(document.body.clientHeight-48)+"px";
    this.load();
  }
}
</script>

<style scoped>
  .section{
    width:96%;
    min-width:1300px;
    min-height:910px;
    position:relative;
    left:4%;
    top:48px; 
    padding:28px 60px 30px 60px;
    box-sizing: border-box;
    background-color: #fff;
  }
  .el-pagination {
    position:fixed;
    width:96%;
    bottom:10px;
    /* background-color:#eceff3; */
  }
</style>