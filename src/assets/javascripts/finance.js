function  sale(){
    $.ajax({    
        url:"http://127.0.0.1:3000/finance/v1/monthlySales",
        type:"get",
        // dataType:"json",
        success:function(result){
            var sales=result.map(v=>v["total"]);
            var productNames=result.map(v=>`${v["MONTH(delivery_date)"]}月`);
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('financeChart'));
            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: '月销报表'
                },
                tooltip: {},
                legend: {
                    data:['月销售额']
                },
                xAxis: {
                    data: productNames
                },
                yAxis: {},
                series: [{
                    name: '月销售额',
                    type: 'bar',
                    data: sales
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    });
}