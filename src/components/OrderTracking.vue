<template>
  <div>
    商户ID：<input type="text" v-model="ShipperCode"><br>
    订单ID：<input type="text" v-model="LogisticCode"><br>
    <button @click="tracking">search</button>
    <div>{{goodsinfo}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      goodsinfo:'',
      ShipperCode:'',
      LogisticCode:''
    }
  },
  methods:{
    tracking(){
      this.axios.get("/logistics/v1/immediateQuery",{
        params:{
          ShipperCode:this.ShipperCode,
          LogisticCode:this.LogisticCode
        }
      }).then(result=>{
        this.goodsinfo=result.data;
      })
    }
  }
}
</script>