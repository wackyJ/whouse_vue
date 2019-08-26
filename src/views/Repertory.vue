<template>
  <div>
    <main-aside></main-aside>
    <main-header></main-header>
    <div class="repertory">
      <el-table
        :data="tableData"
        :style="{width: '100%',position:''}"
        :max-height="maxheight"
        min-height="500">
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
          width="120">
        </el-table-column>
        <el-table-column
          prop="spec"
          label="规格/颜色"
          width="300">
        </el-table-column>
        <el-table-column
          prop="os"
          label="操作系统"
          width="120">
        </el-table-column>
        <el-table-column
          prop="memory"
          label="内存容量"
          width="120">
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
          width="120">
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
        :page-count="pcount" @prev-click="changePage(-1)" @next-click="changePage(1)">
      </el-pagination>
      <h6> 
        <ul class="pagination">
          <li class="page-item" :class="{disabled:pno==0}"><a class="page-link bg-transparent" href="javascript:;" @click="changePage(-1)">上一页</a></li>
          <li v-for="i of pcount" :key="i" class="page-item" :class="{active:parseInt(pno)+1==i}"><a class="page-link" :class="parseInt(pno)+1==i?'border':'bg-transparent'" href="javascript:;" @click="load(i-1)">{{i}}</a></li>
          <li class="page-item" :class="{disabled:pno==pcount-1||pcount==0}"><a class="page-link bg-transparent" href="javascript:;" @click="changePage(1)">下一页</a></li>
        </ul>
      </h6>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      changePage(i){
      this.load(parseInt(this.pno)+i);
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
          console.log(result.data);
          this.tableData=result.data.data;
          this.pno=result.data.pno;
          this.pcount=result.data.pageCount;
          console.log(this.maxheight)
        });
      }
    },
    created(){
      this.maxheight=parseInt(window.screen.availHeight)/1.1;
      this.load();
    },
    data() {
      return {
        maxheight:0,
        tableData: [],
        pno:0,
        pcount:0
      }
    }
  }
</script>

<style scoped>
.repertory{
    width:95%;  
    height:100%;
    position:relative;
    left:4%;
    top:48px; 
    /* padding:28px 65px 30px 65px; */
    box-sizing: border-box; 
    /* border:1px #000 solid; */
    background-color:#eceff3;
    padding-bottom:100;
  }
  .pagination {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: 0.25rem;
    justify-content:flex-end;
  }
  .page-link {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    font-size: 20px;
    color: #007bff;
    background-color: #fff;
    border: 1px solid #dee2e6;
  }
  .page-link:hover {
    color: #0056b3;
    text-decoration: none;
    background-color: #e9ecef;
    border-color: #dee2e6;
  }
  .page-link:focus {
    z-index: 2;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  .page-link:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  .page-item:first-child .page-link {
    margin-left: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .page-item:last-child .page-link {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
  .page-item.active .page-link {
    z-index: 1;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }
  .page-item.disabled .page-link {
    color: #6c757d;
    pointer-events: none;
    cursor: auto;
    background-color: #fff;
    border-color: #dee2e6;
  }
</style>