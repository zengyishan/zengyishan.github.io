var chart5 = echarts.init(document.getElementById('chart5'));
var data = [{
    name: '澳门',
    value: 21206.557380000002
}, {
    name: '香港',
    value: 6602.1524829999998
}, {
    name: '上海',
    value: 3630.4938099999999
}, {
    name: '北京',
    value: 1195.074523
}, {
    name: '天津',
    value: 1083.2523490000001
}, {
    name: '江苏',
    value: 766.23256829999991
}, {
    name: '台湾',
    value: 643.39166670000009
}, {
    name: '山东',
    value: 609.65763150000009
}, {
    name: '广东',
    value: 580.10640710000007
}, {
    name: '河南',
    value: 563.01537129999997
}, {
    name: '浙江',
    value: 522.62692889999994
}, {
    name: '安徽',
    value: 426.75027080000007
}, {
    name: '河北',
    value: 378.18001049999998
}, {
    name: '重庆',
    value: 350.07487860000003
}, {
    name: '湖南',
    value: 310.07898819999997
}, {
    name: '湖北',
    value: 307.89532010000005
}, {
    name: '福建',
    value: 297.53399999999999
}, {
    name: '辽宁',
    value: 295.58326349999999
}, {
    name: '江西',
    value: 267.03100660000001
}, {
    name: '海南',
    value: 245.27685690000001
}, {
    name: '陕西',
    value: 223.64737119999998
}, {
    name: '贵州',
    value: 197.42311359999999
}, {
    name: '广西',
    value: 194.45132659999999
}, {
    name: '四川',
    value: 164.7913934
}, {
    name: '吉林',
    value: 146.5437407
}, {
    name: '云南',
    value: 116.66558119999999
}, {
    name: '宁夏',
    value: 94.899849400000008
}, {
    name: '黑龙江',
    value: 81.689176970000005
}, {
    name: '甘肃',
    value: 56.279853879999997
}, {
    name: '山西',
    value: 22.79011487
}, {
    name: '内蒙古',
    value: 20.88446407
}, {
    name: '新疆',
    value: 13.101912009999999
}, {
    name: '青海',
    value: 7.8040527050000001
}, {
    name: '西藏',
    value: 2.460792
}];
option = {
    title: {
        text: '全国人口密度分部图',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    visualMap: {
        min: 0,
        max: 700,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true
    },
    series: [{
        name: '人口密度',
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
            normal: {
                show: true,
                fontSize: '5px'

            },
            emphasis: {
                show: false
            }
        },
        data: data
    }, ]
};
chart5.setOption(option);