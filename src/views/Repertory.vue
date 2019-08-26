<template>
  <div>
    <main-aside></main-aside>
    <div class="repertory">
      <main-header></main-header>
      <h2>欢迎来到库存页面</h2>
      <ul v-for="(product,index) of products" :key="index">
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
    </div>
    <!-- <h6 class="mb-3 p-2 text-muted small"> -->
        <nav aria-label="Page navigation example">
          <ul class="pagination mb-0 justify-content-end">
            <li class="page-item" :class="{disabled:pno==0}"><a class="page-link bg-transparent" href="javascript:;" @click="changePage(-1)">上一页</a></li>
            <li v-for="i of pcount" :key="i" class="page-item" :class="{active:parseInt(pno)+1==i}"><a class="page-link" :class="parseInt(pno)+1==i?'border':'bg-transparent'" href="javascript:;" @click="load(i-1)">{{i}}</a></li>
            <li class="page-item" :class="{disabled:pno==pcount-1||pcount==0}"><a class="page-link bg-transparent" href="javascript:;" @click="changePage(1)">下一页</a></li>
          </ul>
        </nav>
      <!-- </h6> -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      products:[]
    }
  },
  methods:{
    load(){
      this.axios.get("/product/v1/repertory").then(result=>{
        console.log(result.data);
        this.products=result.data.data;

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
    width:96%;
    /* float: left; */
  }
  .repertory ul{
    padding:0 2%;
    display: flex;
    font-size: 20px;
    justify-content: space-between;

  }
  li:first-child,li:nth-child(2),li:nth-child(8),li:nth-child(16),li:last-child{
    width: 50px;
  }
  li:nth-child(4),li:nth-child(15){
    width: 100px;
  }
  .repertory li{
    border:1px solid black;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 200px;
  }
</style>>