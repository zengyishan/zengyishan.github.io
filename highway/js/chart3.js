// 基于准备好的dom，初始化echarts实例
var myChart3 = echarts.init(document.getElementById('chart3'));
// 配置
// Generate data
var category3 = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];
var barData3_1 = [14.62, 15.24, 16.76, 18.62, 18.93, 21.06, 23.04, 25.35, 27.7];
var barData3_2 = [1.28, 1.8, 2.9, 4.4, 4.86, 6.72, 8.93, 11.61, 14];
var lineData = [8.76, 11.81, 17.30, 23.63, 25.67, 31.91, 38.76, 45.8, 50.54]


// option
option3 = {
    backgroundColor: 'transparent',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['高铁年载客量占比', '高铁年载客量', '铁路年载客量'],
        textStyle: {
            color: '#ccc'
        }
    },
    xAxis: {
        data: category3,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: [{
        type: 'value',
        name: '载客量(亿人次)',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    }, {
        type: 'value',
        name: '占比',
        max: 100,
        min: 0,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLabel: {
            formatter: '{value}%'
        }
    }],
    series: [{
        name: '高铁年载客量',
        yAxisIndex: 0,
        type: 'bar',
        barWidth: 15,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: '#14c8d4'
                    }, {
                        offset: 1,
                        color: '#43eec6'
                    }]
                )
            }
        },
        data: barData3_2
    }, {
        name: '铁路年载客量',
        type: 'bar',
        yAxisIndex: 0,
        barGap: '-100%',
        barWidth: 15,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(20,200,212,0.5)'
                    }, {
                        offset: 0.2,
                        color: 'rgba(20,200,212,0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(20,200,212,0)'
                    }]
                )
            }
        },
        z: -12,
        data: barData3_1
    }, {
        name: '高铁年载客量占比',
        type: 'line',
        data: lineData,
        yAxisIndex: 1,
        z: -11
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart3.setOption(option3);
$(window).on('resize', function() {
    if (myChart3 != null && myChart3 != undefined) {
        myChart3.resize();
    }
});