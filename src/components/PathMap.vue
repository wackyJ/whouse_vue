<template>
  <div>
    <div id="container"></div>
    <!-- <div id="panel"></div> -->
  </div>
</template>

<script>
import remoteLoad from '@/utils/remoteLoad.js'
export default {
  data(){
    return{
      path:[{lnglat:[116.303843, 39.983412]},{lnglat:[116.321354, 39.896436]},{lnglat:[116.407012, 39.992093]}]
    }
  },
  methods:{
    initMap(){
      var map =new AMap.Map("container", {});
      var truckOptions = {
        map: map,
        policy:0,
        size:1,
        city:'beijing',
        // panel:'panel'
      };
      var driving =new AMap.TruckDriving(truckOptions);
      driving.search(this.path);
      // driving.search(this.path, function(status,result) {
      //     // result即是对应的货车导航信息，相关数据结构文档请参考 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
      //     if (status === 'complete') {
      //       log.success('绘制货车路线完成')
      //     } else {
      //       log.error('获取货车规划数据失败：' + result)
      //     }
      // });
    }
    },
    async created () {
    // 已载入高德地图API，则直接初始化地图
    if (window.AMap && window.AMapUI) {
      this.initMap()
    // 未载入高德地图API，则先载入API再初始化
    } else {
      await remoteLoad(`http://webapi.amap.com/maps?v=1.4.15&key=f229fb64473e50d4f71332140e7b7217&plugin=AMap.TruckDriving`)
      await remoteLoad('https://a.amap.com/jsapi_demos/static/demo-center/js/demoutils.js')
      this.initMap()
    }
  }
}
</script>

<style  scoped>
#container {
  width: 100%;
  /* height: 100%; */
  height: 1000px;
}
/* #panel {
    position: fixed;
    background-color: white;
    max-height: 90%;
    overflow-y: auto;
    top: 10px;
    right: 10px;
    width: 280px;
}
#panel .amap-lib-driving {
    border-radius: 4px;
    overflow: hidden;
} */
</style>