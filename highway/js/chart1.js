// 中国高铁线路图[年份为纬度]
var myChart = echarts.init(document.getElementById('chart1'));
var Data2003 = [
    // 秦沈客运专线
    [{
        name: ''
    }, {
        name: '秦皇岛'
    }],
    [{
        name: '秦皇岛'
    }, {
        name: '沈阳'
    }]
];

var Data2008 = [
    // 合宁客运专线
    [{
        name: ''
    }, {
        name: '合肥'
    }],
    [{
        name: '合肥'
    }, {
        name: '南京'
    }],
    // 京津客运专线
    [{
        name: ''
    }, {
        name: '北京'
    }],
    [{
        name: '北京'
    }, {
        name: '天津'
    }],
    // 胶济客运专线
    [{
        name: ''
    }, {
        name: '青岛'
    }],
    [{
        name: '青岛'
    }, {
        name: '济南'
    }]
];

var Data2009 = [
    // 石太客运专线
    [{
        name: ''
    }, {
        name: '石家庄'
    }],
    [{
        name: '石家庄'
    }, {
        name: '太原'
    }],
    //合武快速专线
    [{
        name: ''
    }, {
        name: '合肥'
    }],
    [{
        name: '合肥'
    }, {
        name: '武汉'
    }],
    //达成铁路复线成遂段
    [{
        name: ''
    }, {
        name: '遂宁'
    }],
    [{
        name: '遂宁'
    }, {
        name: '成都'
    }],
    //甬台温铁路
    [{
        name: ''
    }, {
        name: '宁波'
    }],
    [{
        name: '宁波'
    }, {
        name: '温州'
    }],
    // 温福铁路
    [{
        name: ''
    }, {
        name: '温州'
    }],
    [{
        name: '温州'
    }, {
        name: '宁德'
    }],
    [{
        name: '宁德'
    }, {
        name: '福州'
    }],
    // 武广客运专线
    [{
        name: ''
    }, {
        name: '武汉'
    }],
    [{
        name: '武汉'
    }, {
        name: '咸宁'
    }],
    [{
        name: '咸宁'
    }, {
        name: '岳阳'
    }],
    [{
        name: '岳阳'
    }, {
        name: '长沙'
    }],
    [{
        name: '长沙'
    }, {
        name: '衡阳'
    }],
    [{
        name: '衡阳'
    }, {
        name: '郴州'
    }],
    [{
        name: '郴州'
    }, {
        name: '韶关'
    }],
    [{
        name: '韶关'
    }, {
        name: '广州'
    }]

];

var Data2010 = [
    // 福厦铁路
    [{
        name: ''
    }, {
        name: '福州'
    }],
    [{
        name: '福州'
    }, {
        name: '厦门'
    }],
    // 成灌城际铁路
    [{
        name: ''
    }, {
        name: '成都'
    }],
    [{
        name: '成都'
    }, {
        name: '都江堰'
    }],
    //沪宁城际高速铁路
    [{
        name: ''
    }, {
        name: '上海'
    }],
    [{
        name: '上海'
    }, {
        name: '南京'
    }],
    //昌九城际铁路
    [{
        name: ''
    }, {
        name: '南昌'
    }],
    [{
        name: '南昌'
    }, {
        name: '九江'
    }],
    //沪昆高铁沪杭段
    [{
        name: ''
    }, {
        name: '杭州'
    }],
    [{
        name: '杭州'
    }, {
        name: '上海'
    }],
    //长吉城际铁路
    [{
        name: ''
    }, {
        name: '长春'
    }],
    [{
        name: '长春'
    }, {
        name: '吉林'
    }],
    // 海南东环铁路
    [{
        name: ''
    }, {
        name: '海口'
    }],
    [{
        name: '海口'
    }, {
        name: '三亚'
    }],
];

var Data2011 = [
    // 京沪高铁
    [{
        name: ''
    }, {
        name: '北京'
    }],
    [{
        name: '北京'
    }, {
        name: '天津'
    }],
    [{
        name: '天津'
    }, {
        name: '济南'
    }],
    [{
        name: '济南'
    }, {
        name: '徐州'
    }],
    [{
        name: '徐州'
    }, {
        name: '南京'
    }],
    [{
        name: '南京'
    }, {
        name: '上海'
    }],
    // 广深港高铁广深段
    [{
        name: ''
    }, {
        name: '广州'
    }],
    [{
        name: '广州'
    }, {
        name: '深圳'
    }],
];

var Data2012 = [
    //龙厦铁路 
    [{
        name: ''
    }, {
        name: '龙岩'
    }],
    [{
        name: '龙岩'
    }, {
        name: '厦门'
    }],
    //汉宜铁路
    [{
        name: ''
    }, {
        name: '武汉'
    }],
    [{
        name: '武汉'
    }, {
        name: '宜昌'
    }],
    //合蚌客运专线
    [{
        name: ''
    }, {
        name: '合肥'
    }],
    [{
        name: '合肥'
    }, {
        name: '蚌埠'
    }],
    //石武高铁郑武段
    [{
        name: ''
    }, {
        name: '郑州'
    }],
    [{
        name: '郑州'
    }, {
        name: '信阳'
    }],
    [{
        name: '信阳'
    }, {
        name: '武汉'
    }],
    //哈大客运专线
    [{
        name: ''
    }, {
        name: '哈尔滨'
    }],
    [{
        name: '哈尔滨'
    }, {
        name: '长春'
    }],
    [{
        name: '长春'
    }, {
        name: '四平'
    }],
    [{
        name: '四平'
    }, {
        name: '沈阳'
    }],
    [{
        name: '沈阳'
    }, {
        name: '营口'
    }],
    [{
        name: '营口'
    }, {
        name: '大连'
    }],
    //石武高铁石郑段
    [{
        name: ''
    }, {
        name: '石家庄'
    }],
    [{
        name: '石家庄'
    }, {
        name: '邯郸'
    }],
    [{
        name: '邯郸'
    }, {
        name: '新乡'
    }],
    [{
        name: '新乡'
    }, {
        name: '郑州'
    }],
    //京石客运专线
    [{
        name: ''
    }, {
        name: '北京'
    }],
    [{
        name: '北京'
    }, {
        name: '石家庄'
    }],
    //遂渝铁路二线
    [{
        name: ''
    }, {
        name: '遂宁'
    }],
    [{
        name: '遂宁'
    }, {
        name: '重庆'
    }],
    //广珠城际铁路 
    [{
        name: ''
    }, {
        name: '广州'
    }],
    [{
        name: '广州'
    }, {
        name: '珠海'
    }],
]

var Data2013 = [
    // 杭甬客运专线
    [{
        name: ''
    }, {
        name: '杭州'
    }],
    [{
        name: '杭州'
    }, {
        name: '宁波'
    }],
    // 宁杭客运专线
    [{
        name: ''
    }, {
        name: '南京'
    }],
    [{
        name: '南京'
    }, {
        name: '湖州'
    }],
    [{
        name: '湖州'
    }, {
        name: '杭州'
    }],
    // 盘营客运专线
    [{
        name: ''
    }, {
        name: '盘锦'
    }],
    [{
        name: '盘锦'
    }, {
        name: '营口'
    }],
    // 昌福铁路
    [{
        name: ''
    }, {
        name: '南昌'
    }],
    [{
        name: '南昌'
    }, {
        name: '福州'
    }],
    // 津秦客运专线
    [{
        name: ''
    }, {
        name: '天津'
    }],
    [{
        name: '天津'
    }, {
        name: '秦皇岛'
    }],
    // 厦深铁路
    [{
        name: ''
    }, {
        name: '厦门'
    }],
    [{
        name: '厦门'
    }, {
        name: '潮州'
    }],
    [{
        name: '潮州'
    }, {
        name: '深圳'
    }],
    // 渝利铁路
    [{
        name: ''
    }, {
        name: '重庆'
    }],
    [{
        name: '重庆'
    }, {
        name: '利川'
    }],
    // 武咸城际铁路
    [{
        name: ''
    }, {
        name: '武汉'
    }],
    [{
        name: '武汉'
    }, {
        name: '咸宁'
    }],
    // 茂湛快速铁路
    [{
        name: ''
    }, {
        name: '茂名'
    }],
    [{
        name: '茂名'
    }, {
        name: '湛江'
    }],

    // 西宝高铁
    [{
        name: ''
    }, {
        name: '西安'
    }],
    [{
        name: '西安'
    }, {
        name: '宝鸡'
    }],
    // 衡柳铁路
    [{
        name: ''
    }, {
        name: '衡阳'
    }],
    [{
        name: '衡阳'
    }, {
        name: '桂林'
    }],
    [{
        name: '桂林'
    }, {
        name: '柳州'
    }],
    // 柳南城际铁路
    [{
        name: ''
    }, {
        name: '柳州'
    }],
    [{
        name: '柳州'
    }, {
        name: '南宁'
    }],
    // 广西沿海城际铁路钦北段
    [{
        name: ''
    }, {
        name: '钦州'
    }],
    [{
        name: '钦州'
    }, {
        name: '北海'
    }],
    // 广西沿海城际铁路钦防段
    [{
        name: ''
    }, {
        name: '钦州'
    }],
    [{
        name: '钦州'
    }, {
        name: '防海港'
    }],
    // 广西城际铁路南钦段
    [{
        name: ''
    }, {
        name: '南宁'
    }],
    [{
        name: '南宁'
    }, {
        name: '钦州'
    }],

]

var Data2014 = [
    // 武冈城际铁路
    [{
        name: ''
    }, {
        name: '武汉'
    }],
    [{
        name: '武汉'
    }, {
        name: '黄冈'
    }],
    // 武石城际铁路
    [{
        name: ''
    }, {
        name: '武汉'
    }],
    [{
        name: '武汉'
    }, {
        name: '黄石'
    }],
    // 宜万铁路宜昌至利川段
    [{
        name: ''
    }, {
        name: '宜昌'
    }],
    [{
        name: '宜昌'
    }, {
        name: '利川'
    }],
    // 大西客运专线太原南到西安北段
    [{
        name: ''
    }, {
        name: '太原'
    }],
    [{
        name: '太原'
    }, {
        name: '西安'
    }],
    // 沪昆高铁杭长段
    [{
        name: ''
    }, {
        name: '杭州'
    }],
    [{
        name: '杭州'
    }, {
        name: '金华'
    }],
    [{
        name: '金华'
    }, {
        name: '南昌'
    }],
    [{
        name: '南昌'
    }, {
        name: '长沙'
    }],
    // 沪昆高铁长沙至新晃段
    [{
        name: ''
    }, {
        name: '长沙'
    }],
    [{
        name: '长沙'
    }, {
        name: '怀化'
    }],
    [{
        name: '怀化'
    }, {
        name: '新晃'
    }],
    // 成绵乐城际铁路成都至江油段
    [{
        name: ''
    }, {
        name: '成都'
    }],
    [{
        name: '成都'
    }, {
        name: '绵阳'
    }],
    // 成绵乐城际铁路成都至乐山段
    [{
        name: ''
    }, {
        name: '成都'
    }],
    [{
        name: '成都'
    }, {
        name: '乐山'
    }],
    // 兰新高铁
    [{
        name: ''
    }, {
        name: '兰州'
    }],
    [{
        name: '兰州'
    }, {
        name: '嘉峪关'
    }],
    [{
        name: '嘉峪关'
    }, {
        name: '乌鲁木齐'
    }],
    // 贵广高铁
    [{
        name: ''
    }, {
        name: '贵阳'
    }],
    [{
        name: '贵阳'
    }, {
        name: '桂林'
    }],
    [{
        name: '桂林'
    }, {
        name: '广州'
    }],
    // 南广高铁
    [{
        name: ''
    }, {
        name: '南宁'
    }],
    [{
        name: '南宁'
    }, {
        name: '广州'
    }],
]

var Data2015 = [
        // 兰渝铁路重庆北至渭沱段
        [{
            name: ''
        }, {
            name: '重庆'
        }],
        [{
            name: '重庆'
        }, {
            name: '广元'
        }],
        // 沪昆高铁新晃西至贵阳北段
        [{
            name: ''
        }, {
            name: '新晃'
        }],
        [{
            name: '新晃'
        }, {
            name: '贵阳'
        }],
        // 郑焦城际铁路
        [{
            name: ''
        }, {
            name: '郑州'
        }],
        [{
            name: '郑州'
        }, {
            name: '焦作'
        }],
        // 合福高铁
        [{
            name: ''
        }, {
            name: '合肥'
        }],
        [{
            name: '合肥'
        }, {
            name: '黄山'
        }],
        [{
            name: '黄山'
        }, {
            name: '福州'
        }],
        // 哈齐高铁
        [{
            name: ''
        }, {
            name: '哈尔滨'
        }],
        [{
            name: '哈尔滨'
        }, {
            name: '齐齐哈尔'
        }],
        // 沈丹高铁
        [{
            name: ''
        }, {
            name: '沈阳'
        }],
        [{
            name: '沈阳'
        }, {
            name: '丹东'
        }],
        // 吉图珲高铁
        [{
            name: ''
        }, {
            name: '吉林'
        }],
        [{
            name: '吉林'
        }, {
            name: '珲春'
        }],
        // 京津城际铁路延伸段
        [{
            name: ''
        }, {
            name: '天津'
        }],
        [{
            name: '天津'
        }, {
            name: '保定'
        }],
        // 宁安城际铁路
        [{
            name: ''
        }, {
            name: '南京'
        }],
        [{
            name: '南京'
        }, {
            name: '铜陵'
        }],
        [{
            name: '铜陵'
        }, {
            name: '安庆'
        }],
        // 南昆高铁南宁至百色段
        [{
            name: ''
        }, {
            name: '南宁'
        }],
        [{
            name: '南宁'
        }, {
            name: '百色'
        }],
        // 丹东至大连快速铁路
        [{
            name: ''
        }, {
            name: '丹东'
        }],
        [{
            name: '丹东'
        }, {
            name: '大连'
        }],
        // 成渝高铁
        [{
            name: ''
        }, {
            name: '成都'
        }],
        [{
            name: '成都'
        }, {
            name: '重庆'
        }],
        // 兰渝铁路广元至重庆段
        [{
            name: ''
        }, {
            name: '广元'
        }],
        [{
            name: '广元'
        }, {
            name: '重庆'
        }],
        // 赣龙铁路复线
        [{
            name: ''
        }, {
            name: '赣州'
        }],
        [{
            name: '赣州'
        }, {
            name: '龙岩'
        }],
        // 新金丽温铁路
        [{
            name: ''
        }, {
            name: '金华'
        }],
        [{
            name: '金华'
        }, {
            name: '温州'
        }],
        // 津保铁路
        [{
            name: ''
        }, {
            name: '天津'
        }],
        [{
            name: '天津'
        }, {
            name: '保定'
        }],
        // 牡绥铁路牡丹江至穆棱段
        [{
            name: ''
        }, {
            name: '牡丹江'
        }],
        [{
            name: '牡丹江'
        }, {
            name: '穆棱'
        }],
        // 海南西环铁路
        [{
            name: ''
        }, {
            name: '海口'
        }],
        [{
            name: '海口'
        }, {
            name: '棋子湾'
        }],
        [{
            name: '棋子湾'
        }, {
            name: '三亚'
        }],
    ]
    //var carPath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var Data2016 = [
    // 娄底至邵阳铁路扩能改造
    [{
        name: ''
    }, {
        name: '娄底'
    }],
    [{
        name: '娄底'
    }, {
        name: '邵阳'
    }],
    //莞惠城际铁路常平东至小金口段
    [{
        name: ''
    }, {
        name: '东莞'
    }],
    [{
        name: '东莞'
    }, {
        name: '惠州'
    }],
    // 广佛肇城际铁路
    [{
        name: ''
    }, {
        name: '广州'
    }],
    [{
        name: '广州'
    }, {
        name: '肇庆'
    }],
    // 郑徐高铁
    [{
        name: ''
    }, {
        name: '郑州'
    }],
    [{
        name: '郑州'
    }, {
        name: '徐州'
    }],
    // 青荣城际铁路
    [{
        name: ''
    }, {
        name: '青岛'
    }],
    [{
        name: '青岛'
    }, {
        name: '烟台'
    }],
    [{
        name: '烟台'
    }, {
        name: '荣成'
    }],
    // 渝万城际铁路
    [{
        name: ''
    }, {
        name: '重庆'
    }],
    [{
        name: '重庆'
    }, {
        name: '万州'
    }],
    // 武孝城际铁路
    [{
        name: ''
    }, {
        name: '汉口'
    }],
    [{
        name: '汉口'
    }, {
        name: '孝感'
    }],
    // 长株潭城际铁路
    [{
        name: ''
    }, {
        name: '长沙'
    }],
    [{
        name: '长沙'
    }, {
        name: '株洲'
    }],
    [{
        name: '株洲'
    }, {
        name: '湘潭'
    }],
    // 昆玉城际铁路
    [{
        name: ''
    }, {
        name: '昆明'
    }],
    [{
        name: '昆明'
    }, {
        name: '玉溪'
    }],
    // 南昆高铁
    [{
        name: ''
    }, {
        name: '昆明'
    }],
    [{
        name: '昆明'
    }, {
        name: '百色'
    }],
    //沪昆高铁

    [{
        name: ''
    }, {
        name: '昆明'
    }],
    [{
        name: '昆明'
    }, {
        name: '贵阳'
    }],
]


var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

var color = ['#008ED8', '#E27C00', '#FFAB4C', '#DE2395', '#9AE2BF', '#C8B4E0', '#FFCE00', '#004986', '#207145', '#46bee9']
    //var color = ['#a6c84c', '#ffa022', '#46bee9', '#ffa022', '#46bee9', '#ffa022', '#46bee9', '#ffa022', '#46bee9'];

var series = [];

var data = [
    ['2003年', Data2003],
    ['2008年', Data2008],
    ['2009年', Data2009],
    ['2010年', Data2010],
    ['2011年', Data2011],
    ['2012年', Data2012],
    ['2013年', Data2013],
    ['2014年', Data2014],
    ['2015年', Data2015],
    ['2016年', Data2016]
];
data.forEach(function(item, i) {
    console.log(i);
    series.push({
        name: item[0],
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: 'red',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    }, {
        name: item[0],
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 6,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            // symbol: carPath,
            symbolSize: 4
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    }, {
        name: item[0],
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'left',
                formatter: '{b}',
                margin: '0 40px 0 0',
                textStyle: {
                    fontSize: '12'
                }
            }
        },
        symbolSize: function(val) {
            return 4;
        },
        itemStyle: {
            normal: {
                color: color[i]
            }
        },
        data: item[1].map(function(dataItem) {
            for (var i = 0; i < dataItem.length; i++) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name],
                    itemStyle: {
                        normal: {
                            textStyle: {
                                fontSize: '18px',
                            }
                        }
                    },
                    textStyle: {
                        fontSize: '18px'
                    }
                };
            }

        })
    });
});

option = {
    backgroundColor: 'transparent',
    title: {
        text: '中国高铁线路图',
        subtext: '数据来源:12306 高铁网',
        left: 'center',
        textStyle: {
            color: '#333'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'horizontal',
        top: 'bottom',
        left: 'center',
        data: ['2003年', '2008年', '2009年', '2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年'],
        textStyle: {
            color: '#666'
        },
        selectedMode: 'single'
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: series
};
myChart.setOption(option);
// 响应式
$(window).on('resize', function() {
    if (myChart != null && myChart != undefined) {
        myChart.resize();
    }
});