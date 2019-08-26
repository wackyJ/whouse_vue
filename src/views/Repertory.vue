<template>
  <div>
    <main-aside></main-aside>
    <main-header></main-header>
    <div class="repertory">
      <h2>欢迎来到库存页面</h2>
      <ul class="tab" v-for="(product,index) of products" :key="index">
        <li>{{product.pid}}</li>
        <li>{{product.family_id}}</li>
        <li :title="product.title">{{product.title}}</li>
        <li :title="product.price">{{product.price}}</li>
        <!-- <li :title="product.promise">{{product.promise}}</li> -->
        <li :title="product.spec">{{product.spec}}</li>
        <li :title="product.lname">{{product.lname}}</li>
        <li :title="product.os">{{product.os}}</li>
        <li :title="product.memory">{{product.memory}}</li>
        <li :title="product.resolution">{{product.resolution}}</li>
        <li :title="product.video_card">{{product.video_card}}</li>
        <li :title="product.cpu">{{product.cpu}}</li>
        <li :title="product.category">{{product.category}}</li>
        <li :title="product.disk">{{product.disk}}</li>
        <li :title="new Date(product.shelf_time).toLocaleString()">{{new Date(product.shelf_time).toLocaleString()}}</li>
        <li>{{product.sold_count}}</li>
        <li>{{product.is_onsale}}</li>
        <li>{{product.pv_id}}</li>
      </ul>
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
  data(){
    return{
      pno:0,
      pcount:0,
      products:[]
    }
  },
  methods:{
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
        this.products=result.data.data;
        this.pno=result.data.pno;
        this.pcount=result.data.pageCount;
      });
    }
  },
  created(){
    this.load();
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
    border:1px #000 solid;
    background-color:#eceff3;
  }
  .repertory ul{
    padding:0 2%;
    display: flex;
    font-size: 20px;
  }
  .tab{
    justify-content: space-between;
  }
 .tab li:first-child,.tab li:nth-child(2),.tab li:nth-child(8),.tab li:nth-child(16),.tab li:last-child{
    width: 50px;
  }
  .tab>li:nth-child(4),.tab>li:nth-child(15){
    width: 100px;
  }
  .repertory .tab>li{
    border:1px solid black;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 200px;
  }
   .repertory .tab li+li{
    border-left:none;
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