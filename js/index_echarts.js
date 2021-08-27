(function(){
    var myChart = echarts.init(document.getElementById('indexSkill'));

    var skillArr = [
        { id: 1, name: "vue全家桶", value: 100},
        { id: 2, name: "jquery", value: 100},
        { id: 3, name: "html5", value: 100},
        { id: 4, name: "微信小程序", value: 100},
        { id: 5, name: "支付宝小程序", value: 100},
        { id: 6, name: "js+html+css", value: 100},
    ]

    var option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            itemStyle: {
              barBorderRadius: [20, 20, 0, 0],
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#ffa46d' // 0% 处的颜色
                }, {
                  offset: 1, color: '#ffcf6f' // 100% 处的颜色
                }]
              }
            },
            type: 'bar'
        }]
    };

    myChart.setOption(option);
})()