<template>
  <div>
    <!-- <input type="text" v-model="ShipperCode"> 
    -->
    运输公司：
    <el-autocomplete
      class="inline-input"
      v-model="shipper"
      :fetch-suggestions="querySearch"
      placeholder="请输入运输公司"
      @select="handleSelect"
    ></el-autocomplete><br><br>
    订单编号：
    <el-input
      placeholder="请输入快递单号"
      v-model="LogisticCode"
      clearable>
    </el-input><br><br>
    <el-button @click="tracking">查询</el-button>
    <el-timeline>
      <el-timeline-item
        v-for="(good, index) in goodsinfo"
        :key="index"
        :color="index==goodsinfo.length-1?'#fe7328':''"
        :timestamp="good.AcceptTime">
        {{good.AcceptStation}}
      </el-timeline-item>
    </el-timeline>
    <path-map :data="data"></path-map>
  </div>
</template>

<script>
import expressCode from '@/assets/expressCode.json'
import PathMap from './PathMap.vue'
export default {
  components:{
    PathMap
  },
  data(){
    return{
      restaurants: [],
      shipper: '',
      goodsinfo:'',
      ShipperCode:'',
      LogisticCode:'',
      data:''
    }
  },
  methods:{
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return expressCode;
    },
    handleSelect(item){
      this.ShipperCode = item.shipNum;
    },
    tracking(){
      this.axios.get("/logistics/v1/immediateQuery",{
        params:{
          ShipperCode:this.ShipperCode,
          LogisticCode:this.LogisticCode
        }
      }).then(result=>{
        this.data = result.data;
        this.goodsinfo=result.data.data.Traces;
      })
    }
  },
  mounted(){
    this.restaurants = this.loadAll();
  }
}
</script>

<style scoped>
  .el-timeline {
    margin-top:20px;
    border:1px #000 solid;
    width:800px;
  }
  .el-autocomplete {
    width:300px;
  }
  .el-input--suffix{
    width:300px;
  }
  .el-timeline {
    text-align: left;
  }
</style>