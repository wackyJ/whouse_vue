<template>
  <div>
    <el-table 
      highlight-current-row
      :data="tableData.filter(data => !search || data.uname.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        label="客户编号" prop="cid">
      </el-table-column>
      <el-table-column
        label="客户昵称" prop="cname">
        <template slot-scope="scope">
          <span v-if="scope.row.isSet">
            <el-input size="mini" placeholder="请输入内容" v-model="scope.row.cname">
            </el-input>
          </span>
          <span v-else>{{scope.row.cname}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="地址" prop="caddress">
        <template slot-scope="scope">
          <span v-if="scope.row.isSet">
            <el-input size="mini" placeholder="请输入内容" v-model="scope.row.caddress">
            </el-input>
          </span>
          <span v-else>{{scope.row.caddress}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="收件人" prop="contacts">
        <template slot-scope="scope">
          <span v-if="scope.row.isSet">
            <el-input size="mini" placeholder="请输入内容" v-model="scope.row.contacts">
            </el-input>
          </span>
          <span v-else>{{scope.row.contacts}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="联系电话" prop="cphone">
        <template slot-scope="scope">
          <span v-if="scope.row.isSet">
            <el-input size="mini" placeholder="请输入内容" v-model="scope.row.cphone">
            </el-input>
          </span>
          <span v-else>{{scope.row.cphone}}</span>
        </template>
      </el-table-column>  
      <el-table-column
        label="客户等级" prop="cgrade">
        <template slot-scope="scope">
          <span v-if="scope.row.isSet">
            <el-input size="mini" placeholder="请输入内容" v-model="scope.row.cgrade">
            </el-input>
          </span>
          <span v-else>{{scope.row.cgrade}}</span>
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template slot="header">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row,true)"
            >{{scope.row.isSet?'保存':"编辑"}}</el-button>
          <el-button
            size="mini"
            v-if="!scope.row.isSet"
            @click="handleDelete(scope.$index, scope.row)"
            type="danger"
            >删除</el-button>
          <el-button
            size="mini"
            v-else
            @click="handleEdit(scope.$index, scope.row,false)"
            type="danger"
            >取消</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-button @click="handleAdd">添加客户信息</el-button>
    </el-row>
    <el-pagination background layout="prev, pager, next" 
      :page-count="pcount"
      @current-change="changePage">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pno:0,
      pcount:0,
      tableData: [],
      sel: {},
      newSel: {},
      search: ""
    }
  },
  methods: {
    load(i){
      this.axios.get("/setting/v1/clientList",{params:{pno:i}}).then(result=>{
        if(result.data.code == -1){
          this.$message({
            type:"info",
            message:"请先登录"
          });
          this.$router.push("/login");
        }
        result.data.data=result.data.data.map(obj=>{
          obj.isSet=false;
          return obj;
        })
        this.tableData = result.data.data;
        this.pno = result.data.pno;
        this.pcount=result.data.pageCount;
      })
    },
    changePage(i){
      this.load(i-1);
    },
    handleAdd() {
      for (let i of this.tableData) {
        if (i.isSet) {
          this.$alert('请先保存当前编辑项', '提示', {
            confirmButtonText: '确定',
            callback: () => {
              this.$message({
                type: 'info',
                message:'记得先保存当前编辑项'
              });
            }
          });
          return false;
        }
      }
      let client = { "cid": null, "cname": "", "contacts": "", "cphone": "", "cgrade": "", "isSet": true};
      this.tableData.push(client);
    },
    handleEdit(index,row,cg) {
      //点击编辑按钮 首先判断是否已经保存所有操作
      for (let i of this.tableData) {
        if (i.isSet && i.cid != row.cid) {
          this.$alert('请先保存当前编辑项', '提示', {
            confirmButtonText: '确定',
            callback: () => {
              this.$message({
                type: 'info',
                message:'记得先保存当前编辑项'
              });
            }
          });
          return false;
        }
      }
      //判断是否是取消操作
      if (!cg) {
        if (!row.cid){
          this.tableData.splice(index, 1);
        }
        return row.isSet = !row.isSet;
      }
      //提交数据
      //如果isSet为true->此时为保存按钮
      if (row.isSet) {
        this.newSel = Object.assign({},row);
        delete this.newSel.isSet;
        // 点击保存，首先判断新值和旧值是否相等，即用户是否做出修改。
        // 如果没有做出修改，提示用户，并将isSet置为false,此时是编辑按钮，输入框不可见
        if(this.isEqual(this.newSel,this.sel)){
          this.$message('没有任何修改操作');
          row.isSet = false;
          return;
        }else{
          // 如果用户做出修改，向后台提交修改后的数据
          this.axios.post("/setting/v1/upClient",{
            params:{newSel:this.newSel}
          }).then(result=>{
            if(result.data.code == 200){
              this.$message({
                type:"success",
                message:"修改成功!"
              });
            }else if(result.data.code == 201){
              this.$message.error("修改失败!");
            }else if(result.data.code == 202){
              this.tableData[this.tableData.length-1].cid = result.data.newId;
              this.$message({
                type:"success",
                message:"添加成功!"
              });
            }else{
              this.$message.error("修改失败!");
            }
          })
          // 最后将isSet置为false，此时是编辑按钮，输入框不可见
          row.isSet = false;
        }
      }else{
        // 如果isSet为false，此时是编辑按钮
        // 首先获取当前行的旧值，并删除旧值中的isSet属性
        this.sel = Object.assign({},row);
        delete this.sel.isSet;
        // 将isSet置为true，此时是保存按钮
        row.isSet = true;
      }
    },
    isEqual(a,b) {  
      //取对象a和b的属性名
      var aProps = Object.getOwnPropertyNames(a);
      var bProps = Object.getOwnPropertyNames(b);
      //判断属性名的length是否一致
      if (aProps.length != bProps.length) {
          return false;
      }
      //循环取出属性名，再判断属性值是否一致
      for (var i = 0; i < aProps.length-1; i++) {
        var propName = aProps[i];
        if (a[propName] != b[propName]) {
            return false;
        }
      }
      return true;
    },
    handleDelete(index,row) {
      this.$confirm(`此操作将永久删除该文件, 请谨慎操作, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(()=>{
        this.axios.get("/setting/v1/delClient",{params:{cid:row.cid}})
      .then(result => {
        if(result.data.code == 200){
          this.tableData.splice(index,1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }else{
          this.$message.error('删除失败!');
        }
        })
      }).catch(() => {
        this.$message('已取消删除');
      });
    }
  },
  created() {
    this.load();
  }
}
</script>
<style scoped>
  .el-pagination {
    position:fixed;
    width:96%;
    bottom:10px;
    /* background-color:#eceff3; */
  }
</style>