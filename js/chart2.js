// 基于准备好的dom，初始化echarts实例
var myChart2 = echarts.init(document.getElementById('chart2'));
// 配置
// Generate data
var category = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];
// 高铁占比
var lineData = [1.25, 2.67, 5.49, 7.53, 9.18, 10.68, 14.16, 15.70, 17.74];
// 铁路运营里程
var barData = [8, 8.6, 9.1, 9.3, 9.8, 10.3, 11.3, 12.1, 12.4];
// 高铁运营里程
var barData2 = [0.1, 0.23, 0.5, 0.7, 0.9, 1.1, 1.6, 1.9, 2.2];



// option
option2 = {
    backgroundColor: 'transparent',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['高铁运营里程占比', '高铁运营里程', '铁路运营里程'],
        textStyle: {
            color: '#ccc'
        }
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: [{
        type: 'value',
        name: '运营里程(万公里)',
        position: 'left',
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
        name: '高铁运营里程占比',
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
        name: '高铁运营里程占比',
        type: 'line',
        data: lineData,
        yAxisIndex: 1,
        z: -15
    }, {
        name: '高铁运营里程',
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
        data: barData2,
        yAxisIndex: 0
    }, {
        name: '铁路运营里程',
        type: 'bar',
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
        data: barData,
        yAxisIndex: 0
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart2.setOption(option2);
$(window).on('resize', function() {
    if (myChart2 != null && myChart2 != undefined) {
        myChart2.resize();
    }
});