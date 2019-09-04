<template>
  <div>
    <main-aside></main-aside>
    <main-header></main-header>
    <div class="section" :style="{height:cHeight}">
      <el-tabs v-model="activeName">
        <el-tab-pane label="用户管理" name="first">
          <el-table 
            :data="tableData.filter(data => !search || data.uname.toLowerCase().includes(search.toLowerCase()))"
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
              <template slot-scope="scope" slot="header">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
              </template>
              <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button>
              <el-button
                size="mini"
                @click="handleDelete(scope.$index, scope.row)"
                type="danger"
                >删除</el-button>
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
    load(i){
      this.axios.get("/setting/v1/userList",{params:{pno:i}}).then(result=>{
        if(result.data.code == -1){
          this.$message({
            type:"info",
            message:"请先登录"
          });
          this.$router.push("/login");
        }
        // if(result.data.data.gender==1){
        //   result.data.data.gender="男";
        // }else{
        //   result.data.data.gender="女";
        // }
        this.tableData = result.data.data;
        this.pno = result.data.pno;
        this.pcount=result.data.pageCount;
      })
    },
    changePage(i){
      this.load(i-1);
    },
    handleEdit(index, row) {
      
    },
    handleDelete(index,row) {
      this.$confirm(`此操作将永久删除该文件, 请谨慎操作, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(()=>{
        this.axios.get("/setting/v1/deluser",{params:{uid:row.uid}})
      .then(result => {
        if(result.data.code == 200){
          this.tableData.splice(index,1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }else{
          this.$message({
            type: 'info',
            message: '删除失败!'
          });
        }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
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