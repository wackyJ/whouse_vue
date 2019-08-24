<template>
  <div>
    <button onclick="sale('week','financeChart')">生成周销售额报表</button>
    <button onclick="sale('month','financeChart')">生成月销售额报表</button>
    <button onclick="sale('year','financeChart')">生成年销售额报表</button>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="financeChart" style="width: 600px;height:400px;">
        <h1>财务报表图</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Charts',
    methods:{
      sale(date,targetId){
        this.axios.get(`/finance/v1/${date}lySales`).then(result=>{
          let _text="";
          if(date=="month"){_text="月"}
          else if(date=="week"){_text="周"}
          else if(date=="year"){_text="年"}
          else{_text=""};
          let sales=result.map(v=>v["total"]);
          let productNames=result.map(v=>v[`${date}(delivery_date)`]+_text);
          // console.log(sales);
          // console.log(productNames);
          // 基于准备好的dom，初始化echarts实例
          var myChart = echarts.init(document.getElementById(`${targetId}`));
          // 指定图表的配置项和数据
          var option = {
            title: {
              text: `${_text}销报表`
            },
            tooltip: {},
            legend: {
              data:[`${_text}销售额`]
            },
            xAxis: {
              data: productNames
            },
            yAxis: {},
            series: [{
              name: `${_text}销售额`,
              type: 'bar',
              data: sales
            }]
          };
          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
        })
      }
    }
  }
</script>