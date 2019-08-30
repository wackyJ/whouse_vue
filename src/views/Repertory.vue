<template>
  <div>
    <main-aside></main-aside>
    <main-header></main-header>
    <div class="repertory">
      <el-table
        :data="tableData"
        min-height="500"
        :max-height="maxHeight"
        @cell-dblclick="edit"
        :border=true
        :cell-style="{'padding-left':0,'text-align':'center'}"
        :header-cell-style="{'text-align':'center'}"
        :highlight-current-row=true>
        <el-table-column
          fixed
          prop="pid"
          label="商品ID"
          width="70">
        </el-table-column>
        <el-table-column
          prop="family_id"
          label="系列ID"
          width="70">
        </el-table-column>
        <el-table-column
          prop="pname"
          label="商品名称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格"
          width="100">
        </el-table-column>
        <el-table-column
          prop="spec"
          label="规格/颜色"
          width="300">
        </el-table-column>
        <el-table-column
          prop="os"
          label="操作系统"
          width="100">
        </el-table-column>
        <el-table-column
          prop="memory"
          label="内存容量"
          width="100">
        </el-table-column>
        <el-table-column
          prop="resolution"
          label="分辨率"
          width="120">
        </el-table-column>
        <el-table-column
          prop="video_card"
          label="显卡型号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="cpu"
          label="处理器"
          width="120">
        </el-table-column>
        <el-table-column
          prop="video_memory"
          label="显存容量"
          width="120">
        </el-table-column>
        <el-table-column
          prop="category"
          label="所属分类"
          width="120">
        </el-table-column>
        <el-table-column
          prop="disk"
          label="硬盘容量及类型"
          width="140">
        </el-table-column>
        <el-table-column
          prop="shelf_time"
          label="上架时间"
          width="120">
        </el-table-column>
        <el-table-column
          prop="sold_count"
          label="已售出的数量"
          width="120">
        </el-table-column>
        <el-table-column
          prop="repertory_count"
          label="库存数量"
          width="120">
        </el-table-column>
        <el-table-column
          prop="is_onsale"
          label="是否促销中"
          width="100">
        </el-table-column>
        <el-table-column
          prop="pv_id"
          label="供应商ID"
          width="100">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-count="pcount"
        @current-change="changePage">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      edit(row,column,cell,event){
        var element=event.target;
        if(element.nodeName=="DIV"){
          let newobj = document.createElement('input');//创建一个input元素
          let oldhtml=element.innerHTML;//获得元素之前的内容
          newobj.type = 'text';//为newobj元素添加类型
          newobj.value=oldhtml;
          newobj.style.cssText=`
            width:${element.parentNode.offsetWidth-30}px;
            height:41px;
          `;
          element.innerHTML='';//设置元素内容为空
          element.appendChild(newobj);//添加子元素
          newobj.focus();//获得焦点
          //设置newobj失去焦点的事件
          newobj.onblur = function(){
            //下面应该判断是否做了修改并使用ajax代码请求服务端将id与修改后的数据提交
            // alert(element.id);
            //当触发时判断newobj的值是否为空，为空则不修改，并返回oldhtml
            element.innerHTML = this.value ? this.value : oldhtml;
          }
        }
      },
      deleteRow(index, rows) {
        // console.log(index);
        // console.log(rows);
        // console.log(rows[index].price);
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.post("/product/v1/delRecord",{
            params:{
              pid:rows[index].pid
            }
          }).then(result=>{
            if(result.data.code==200){
              rows.splice(index, 1);
              console.log(result.data);
              this.$message({
              type: 'success',
              message: '删除成功!'
          });
            }else{
              this.$message({
                type: 'info',
                message: '删除失败'
              });  
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      changePage(i){
        this.load(i-1);
      },
      load(i){
        this.axios.get(
          "/product/v1/repertory",
          {
            params:{
              pno:i
            }
          }
        ).then(result=>{
          this.tableData=result.data.data;
          this.pno=result.data.pno;
          this.pcount=result.data.pageCount;
        });
      }
    },
    created(){
      this.maxheight=parseInt(window.screen.availHeight)/1.1;
      this.load();
      this.maxHeight=(document.body.clientHeight)-80;
    },
    data() {
      return {
        maxHeight:0,
        tableData:[],
        pno:0,
        pcount:0
      }
    }
  }
</script>

<style scoped>
  .repertory{
    width:96%;  
    position:relative;
    left:4%;
    top:48px;
    background-color:#eceff3;
  }
</style>