/*
 * @Author: your name
 * @Date: 2022-05-02 15:09:59
 * @LastEditTime: 2022-05-02 16:21:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Uncle-Cao的git本地库\计算机设计大赛\js\partThree.js
 */
$(document).ready(function () {
    
    $(".main>a").click(function () {
        var ulNode = $(this).next("ul");
        //if(ulNode.css("display")=="none"){
        //    ulNode.css("display","block");
        //}else{
        //    ulNode.css("display","none");
        //}
        //ulNode.show();
        //ulNode.hide();
        //ulNode.toggle("normal");//数字，slow，normal(500)，fast
        //ulNode.slideDown();
        //ulNode.slideUp();
        ulNode.slideToggle();
        changeImg($(this));
    });
    $(".hmain").hover(function () {
        $(this).children("ul").slideDown();
        changeImg($(this).children("a"));
    }, function () {
        $(this).children("ul").slideUp();
        changeImg($(this).children("a"));
    });
    function changeImg(mainNode) {
        if (mainNode) {
            if (mainNode.css("background-image").indexOf("ak3.png") >= 0) {
                mainNode.css("background-image", "url('res/img/ajz.png')");
            } else {
                mainNode.css("background-image", "url('res/img/ak3.png')");
            }
        }
    }



    let myChart = echarts.init(document.querySelector("#charts-viewer"));
    console.log(myChart)
    let curIndex = 0; //记录当前展示的画布索引，默认为0不展示
    let option; //echarts的图片配置 


    function CET_operationStatistics() {
        /** 
         * 中欧班列开行情况统计模块柱形图
         */
        var hours = ['2016', '2017', '2018', '2019', '2020'];
        var days = ['总计', '去程', '回程'];
        var data = [
            [0, 0, 1702],
            [0, 1, 1130],
            [0, 2, 572],
            [1, 0, 3673],
            [1, 1, 2399],
            [1, 2, 1274],
            [2, 0, 6363],
            [2, 1, 3696],
            [2, 2, 2667],
            [3, 0, 8225],
            [3, 1, 4525],
            [3, 2, 3700],
            [4, 0, 12406],
        ];
        var option = {
            title: {
                text: '',
                textStyle: {
                    fontSize: 18,
                    fontWeight: 600,
                    fontFamily: 'siyuanheiti_Thin',
                },
                subtext: '',
                subtextStyle: {
                    fontSize: 16,
                },
            },
            tooltip: {
                show: false,
            },
            visualMap: {
                show: false,
                max: 20,
                inRange: {
                    color: ['#FF4500', '#FF6347', '#CD5C5C', '#B22222', '#CD5C5C', '#F08080', '#FA8072'],
                },
            },
            xAxis3D: {
                name: '',
                type: 'category',
                data: hours,
            },
            yAxis3D: {
                name: '',
                type: 'category',
                data: days,
            },
            zAxis3D: {
                name: '',
                type: 'value',
            },
            grid3D: {
                boxWidth: 200,
                boxDepth: 120,
                axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: '#ccc',
                        width: 1,
                    },
                },
                axisLabel: {
                    color: '#687C5D',
                    fontSize: '12',
                },
                light: {
                    main: {
                        intensity: 1.2,
                        shadow: true,
                    },
                    ambient: {
                        intensity: 0.7,
                        shadow: true,
                    },
                },
                viewControl: {
                    alpha: 15,
                    beta: 40,
                    autoRotate: true,
                    zoomSensitivity: 0,
                    autoRotateAfterStill: 5,
                    distance: 250,
                },
            },
            series: [{
                type: 'bar3D',
                name: '数量',
                data: data.map(function (item) {
                    return {
                        value: [item[0], item[1], item[2]],
                    };
                }),
                shading: 'lambert',
                label: {
                    show: true,
                    distance: 1,
                    textStyle: {
                        color: '#32CD32',
                        fontSize: 18,
                        borderWidth: 0,
                        borderColor: 'none',
                        backgroundColor: 'rgba(255,255,255,0)',
                        fontFamily: 'impact, Simhei',
                    },
                },
                itemStyle: {
                    opacity: 1,
                },
            }, ],
        };
        return option
    }

    function CET_distributionStatistics() {
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'none'
                },
                formatter: function (params) {
                    return params[0].name + ': ' + params[0].value;
                }
            },
            xAxis: {
                data: ['德国', '俄罗斯', '白俄罗斯', '匈牙利', '越南', '哈萨克斯坦', '比利时', '其他', ],
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    color: '#e54035'
                }
            },
            yAxis: {
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            color: ['#e54035'],
            series: [{
                name: 'hill',
                type: 'pictorialBar',
                barCategoryGap: '-130%',
                symbolClip: true,
                // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                itemStyle: {
                    opacity: 0.5
                },
                label: {
                    show: true,
                    position: 'top',
                    offset: [0, 0],
                    color: 'red',
                    formatter: '{c}%',
                    fontSize: 18
                },
                emphasis: {
                    itemStyle: {
                        opacity: 1
                    }
                },
                data: [15.22, 23.91, 6.52, 5.43, 5.43, 4.35, 4.35, 34.78],
                z: 10
            }]
        };
        return option;
    }

    function ForeignTrade_growthLine() {
        /**
         * 展示中国外贸增长率和中国与一带一路国家贸易增长率的折线图
         */
        var data1 = [6.7, 11.40, 12.50, -1, 1.70, 29.90];
        var data2 = [0.21, 8.79, 18.85, 8.79, 14.00, 19.8];
        var json = {
            chart0: {
                xcategory: ['2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
                low: data1,
                lowLine: [],
            }
        };
        var json2 = {
            chart0: {
                xcategory: ['2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
                low: data2,
                lowLine: [],
            }
        };
        var datacoords = [{
            coords: []
        }]
        var datacoords2 = [{
            coords: []
        }]
        for (var i = 0; i < json.chart0.xcategory.length; i++) {
            datacoords[0].coords.push(
                [json.chart0.xcategory[i], data1[i]]
            )
        }
        for (var i = 0; i < json.chart0.xcategory.length; i++) {
            datacoords2[0].coords.push(
                [json2.chart0.xcategory[i], data2[i]]
            )
        }

        var option = {
            backgroundColor: '#03060F',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#15ecf4'
                    }
                },
                backgroundColor: 'rgba(0,0,0,.8)',
                extraCssText: 'box-shadow: 4px 4px 10px rgba(21, 250, 255,.6);',
                formatter: function (params) {
                    var result = params[0].name + '<br>';
                    params.forEach(function (item) {
                        result += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + item.color + '"></span>';
                        // 判断设置增长还是降低
                        if (parseFloat(item.data) >= 0) {
                            result += item.seriesName + ": " + '<span class="growth">增长' + item.data + "%</span><br>"
                        } else if (parseFloat(item.data) < 0) {
                            result += item.seriesName + ": " + '<span class="reduce">降低' + item.data + "%</span><br>"
                        }
                    });
                    return result;
                }
            },
            legend: {
                data: ['中国外贸增长率', '中国与一带一路国家贸易增长率'],
                textStyle: {
                    fontSize: 12,
                    color: 'rgb(0,253,255,0.6),#ffcb00'
                },
                top: '5%',
                right: '5%'
            },
            grid: {
                bottom: 50,
                left: 70,
                right: 50,
            },
            xAxis: {
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#fff',
                    },

                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true
                },
                data: ['2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
            },
            yAxis: {
                max: 30,
                splitNumber: 6,
                interval: 5,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#4b4d64'
                    }
                },
                axisLabel: {
                    formatter: '{value} %',
                    textStyle: { //改变刻度字体样式
                        color: '#ffffff'
                    }
                },
            },
            series: [{
                    name: '中国与一带一路国家贸易增长率',
                    type: 'line',
                    // smooth: true,
                    symbol: 'none',
                    symbolSize: 10,
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(255, 204,1, .9)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(6, 8, 41,.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ffcb00'
                        }
                    },
                    data: data1
                },
                {
                    name: '中国与一带一路国家贸易增长率',
                    type: 'lines',
                    coordinateSystem: 'cartesian2d',
                    zlevel: 1,
                    polyline: true,
                    smooth: true,
                    symbol: 'circle',
                    effect: {
                        show: true,
                        trailLength: 0.4,
                        symbol: "circle",
                        period: 8, //光点滑动速度
                        symbolSize: 8,
                    },
                    lineStyle: {
                        normal: {
                            color: '#ffcb00',
                            width: 0,
                            opacity: 0,
                            curveness: 0,
                        }
                    },
                    data: datacoords
                },
                {
                    name: '中国外贸增长率',
                    type: 'line',
                    // smooth: true,
                    symbol: 'none',
                    symbolSize: 10,
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(21, 250, 255,.9)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(6, 8, 41,.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#15faff'
                        }
                    },
                    data: data2
                },
                {
                    name: '中国外贸增长率',
                    type: 'lines',
                    coordinateSystem: 'cartesian2d',
                    zlevel: 1,
                    smooth: true,
                    polyline: true,
                    symbol: 'circle',
                    effect: {
                        show: true,
                        trailLength: 0.4,
                        symbol: "circle",
                        period: 8, //光点滑动速度
                        symbolSize: 8,
                    },
                    lineStyle: {
                        normal: {
                            color: '#15faff',
                            width: 0,
                            opacity: 0,
                            curveness: 0,
                        }
                    },
                    data: datacoords2
                },
            ]
        };
        return option;
    }


    function MulDevelopment_accurateDocking() {
        //set data 测试数据非真实
        const source = [
            '中国', //0
            '经济走廊', //1
            '欧亚\n经济联盟', //2
            '光明之路', //3
            '中间走廊', //4
            '全球海洋支点', //5
            '琥珀之路', //6
            '两廊一圈', //7
            '2063年议程', //8
            '发展之路', //9
            '2030愿景', //10
            '容克计划', //11
            '向东开发', //12
            '泰国东部', //13
            '俄罗斯', //14
            '哈萨克斯坦', //15
            '土耳其', //16
            '印尼', //17
            '波兰', //18
            '越南', //19
            '非盟', //20
            '蒙古国', //21
            '沙特', //22
            '匈牙利', //23
            '欧盟', //24
        ]
        let listdata = [];

        source.map((v, k) => {
            if (k > 0 && k <= 12) {
                listdata.push({
                    name: v,
                    category: 1,
                    symbolSize: 80
                });
            } else if (k > 12) {
                listdata.push({
                    value: v,
                    category: 2,
                    symbolSize: 60
                });
            } else {
                listdata.push({
                    name: v,
                    category: 0,
                    symbolSize: 100,
                    draggable: true
                })
            }
        });
        option = {
            backgroundColor: '#0a1247',
            title: {
                text: '多国发展战略精准对接',
                x: 0,
                y: 'top',
                textStyle: {
                    fontSize: 16,
                    fontFamily: 'Microsoft YaHei',
                    color: '#fff' // 主标题文字颜色
                }
            },
            tooltip: {
                show: false
            },
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [{
                type: 'graph',
                layout: 'force', // circular | force | none
                circular: {
                    rotateLabel: true
                },
                force: {
                    repulsion: 300, //斥力,值越大则斥力越大
                    gravity: 0, //重力
                    edgeLength: [0, 0],
                    layoutAnimation: true, //默认动态为true
                },
                symbol: 'circle', // 节点标记类型
                symbolSize: 70,
                focusNodeAdjacency: true, // 鼠标经过节点是否突出显示
                edgeSymbol: ['circle', 'none'],
                edgeSymbolSize: [0, 0],
                edgeLabel: {
                    show: false
                },
                roam: true, // 是否开启鼠标平移
                draggable: true, // 节点是否可拖拽
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        textStyle: {
                            fontSize: 14,
                            color: '#54f7ff'
                        },
                    }
                },
                lineStyle: {
                    normal: {
                        opacity: .7,
                        color: '#54f7ff',
                        width: 2,
                        curveness: 0
                    }
                },
                itemStyle: {
                    opacity: .7,
                    normal: {
                        color: {
                            type: 'radial',
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#0c1746'
                            }, {
                                offset: 1,
                                color: '#54f7ff'
                            }]
                        },
                        borderColor: '#54f7ff',
                        borderWidth: 1
                    }
                },
                categories: [{ // 节点分类
                    name: 'root',
                    label: {
                        formatter: '{b}',
                        fontSize: 20,
                        color: '#ffec19'
                    },
                    itemStyle: {
                        color: {
                            type: 'radial',
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#0c1746'
                            }, {
                                offset: 1,
                                color: '#ffec19'
                            }]
                        },
                        borderColor: '#ffec19',
                        borderWidth: 1
                    }
                }, {
                    name: 'child',
                    label: {
                        formatter: '{b}',
                        fontSize: 16,
                        color: '#54f7ff'
                    },
                    itemStyle: {
                        color: {
                            type: 'radial',
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#0c1746'
                            }, {
                                offset: 1,
                                color: '#54f7ff'
                            }]
                        },
                        borderColor: '#54f7ff',
                        borderWidth: 1
                    }
                }, {
                    name: 'grandson',
                    label: {
                        formatter: '{c}',
                        fontSize: 12,
                        color: '#69a1ff'
                    },
                    itemStyle: {
                        color: {
                            type: 'radial',
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: '#0c1746'
                            }, {
                                offset: 1,
                                color: '#69a1ff'
                            }]
                        },
                        borderColor: '#69a1ff',
                        borderWidth: 1
                    }
                }],
                data: listdata, // 数据
                links: [{ // 节点间关系数据 - 数字表示源节点的索引
                    source: 0,
                    target: 1
                }, {
                    source: 0,
                    target: 2
                }, {
                    source: 0,
                    target: 3
                }, {
                    source: 0,
                    target: 4
                }, {
                    source: 0,
                    target: 5
                }, {
                    source: 0,
                    target: 6

                }, {
                    source: 0,
                    target: 7
                }, {
                    source: 0,
                    target: 8

                }, {
                    source: 0,
                    target: 9
                }, {
                    source: 0,
                    target: 10
                }, {
                    source: 0,
                    target: 11
                }, {
                    source: 0,
                    target: 12
                }, {
                    source: 1,
                    target: 13,
                    lineStyle: {
                        normal: {
                            color: '#69a1ff'
                        }
                    }
                }, {
                    source: 2,
                    target: 14,
                    lineStyle: {
                        normal: {
                            color: '#69a1ff'
                        }
                    }
                }, {
                    source: 3,
                    target: 15,
                    lineStyle: {
                        normal: {
                            color: '#69a1ff'
                        }
                    }
                }, {
                    source: 4,
                    target: 16,
                    lineStyle: {
                        normal: {
                            color: '#69a1ff'
                        }
                    }
                }, {
                    source: 5,
                    target: 17,
                    lineStyle: {
                        normal: {
                            color: '#69a1ff'
                        }
                    }
                }, {
                    source: 6,
                    target: 18,
                    lineStyle: {
                        normal: {
                            color: '#69a1ff'
                        }
                    }
                }, {
                    source: 7,
                    target: 19,
                    lineStyle: {
                        normal: {
                            color: '#69a1ff'
                        }
                    }
                }, {
                    source: 8,
                    target: 20,
                    lineStyle: {
                        normal: {
                            color: '#69a1ff'
                        }
                    }
                }, {
                    source: 9,
                    target: 21,
                    lineStyle: {
                        normal: {
                            color: '#69a1ff'
                        }
                    }
                }, {
                    source: 10,
                    target: 22,
                    lineStyle: {
                        normal: {
                            color: '#69a1ff'
                        }
                    }
                }, {
                    source: 11,
                    target: 23,
                    lineStyle: {
                        normal: {
                            color: '#69a1ff'
                        }
                    }
                }, {
                    source: 12,
                    target: 24,
                    lineStyle: {
                        normal: {
                            color: '#69a1ff'
                        }
                    }
                }]
            }]
        };

        return option;
    }

    function BeltRoad_circleFriends() {
        /**
         * index=5
         */
        var globalSeriesData = []; //用来存放被收起的某节点的子节点
        var seriesData = [{
            "name": "马耳他",
            "x": 220,
            "y": 1,
            "symbolSize": 20,
            "category": "斐济",
            "value": 16,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "name": "斐济",
            "x": 0,
            "y": 0,
            "symbolSize": 18,
            "category": "南非",
            "value": 1,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "x": 0,
            "y": 0,
            "name": "科威特",
            "symbolSize": 12,
            "category": "乌拉圭",
            "value": 1,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "name": "阿尔及利亚",
            "x": 0,
            "y": 0,
            "symbolSize": 18,
            "category": "马耳他",
            "value": 5,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "x": 0,
            "y": 0,
            "name": "乌拉圭",
            "symbolSize": 12,
            "category": "哈萨克斯坦",
            "value": 1,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "x": 0,
            "y": 0,
            "name": "哈萨克斯坦",
            "symbolSize": 8,
            "category": "奥地利",
            "value": 1,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "x": 0,
            "y": 0,
            "name": "几内亚",
            "symbolSize": 12,
            "category": "乌拉圭",
            "value": 1,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "x": 0,
            "y": 0,
            "name": "匈牙利",
            "symbolSize": 8,
            "category": "哈萨克斯坦",
            "value": 1,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "name": "塞内加尔",
            "x": 0,
            "y": 0,
            "symbolSize": 18,
            "category": "几内亚",
            "value": 3,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "x": 0,
            "y": 0,
            "name": "葡萄牙",
            "symbolSize": 12,
            "category": "塞内加尔",
            "value": 2,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "x": 0,
            "y": 0,
            "name": "南非",
            "symbolSize": 8,
            "category": "奥地利",
            "value": 2,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "name": "奥地利",
            "x": 0,
            "y": 0,
            "symbolSize": 18,
            "category": "1110011",
            "value": 1,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "x": 0,
            "y": 0,
            "name": "圭亚那",
            "symbolSize": 12,
            "category": "智利",
            "value": 1,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "name": "智利",
            "x": 0,
            "y": 0,
            "symbolSize": 18,
            "category": "多米尼克",
            "value": 1,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "name": "希腊",
            "x": 220,
            "y": 1,
            "symbolSize": 20,
            "category": "阿联酋",
            "value": 16,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "name": "阿联酋",
            "x": 0,
            "y": 0,
            "symbolSize": 18,
            "category": "玻利维亚",
            "value": 1,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "x": 0,
            "y": 0,
            "name": "玻利维亚",
            "symbolSize": 12,
            "category": "埃塞尔比亚",
            "value": 1,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "name": "安提瓜和巴布达",
            "x": 0,
            "y": 0,
            "symbolSize": 18,
            "category": "埃塞尔比亚",
            "value": 5,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "x": 0,
            "y": 0,
            "name": "新西兰",
            "symbolSize": 12,
            "category": "奥地利",
            "value": 1,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "x": 0,
            "y": 0,
            "name": "库克群岛",
            "symbolSize": 8,
            "category": "新西兰",
            "value": 1,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "x": 0,
            "y": 0,
            "name": "埃塞尔比亚",
            "symbolSize": 12,
            "category": "奥地利",
            "value": 1,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "x": 0,
            "y": 0,
            "name": "哥斯达尼加",
            "symbolSize": 8,
            "category": "埃塞尔比亚",
            "value": 1,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "name": "纽埃",
            "x": 0,
            "y": 0,
            "symbolSize": 18,
            "category": "哥斯达尼加",
            "value": 3,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "x": 0,
            "y": 0,
            "name": "巴布亚新几内亚",
            "symbolSize": 12,
            "category": "纽埃",
            "value": 2,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "x": 0,
            "y": 0,
            "name": "多米尼克",
            "symbolSize": 8,
            "category": "巴布亚新几内亚",
            "value": 2,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "name": "索马里",
            "x": 0,
            "y": 0,
            "symbolSize": 18,
            "category": "多米尼克",
            "value": 1,
            "symbol": "circle",
            "draggable": "true"
        }, {
            "x": 0,
            "y": 0,
            "name": "莫桑比克",
            "symbolSize": 12,
            "category": "索马里",
            "value": 1,
            "symbol": "circle",
            "draggable": "true"
        }, ];

        var seriesLinks = [{

            "source": "阿尔及利亚",
            "target": "马耳他"
        }, {
            "source": "马耳他",
            "target": "斐济"
        }, {
            "source": "斐济",
            "target": "南非"
        }, {
            "source": "斐济",
            "target": "哈萨克斯坦"
        }, {
            "source": "南非",
            "target": "乌拉圭"
        }, {
            "source": "南非",
            "target": "哈萨克斯坦"
        }, {
            "source": "南非",
            "target": "奥地利"
        }, {
            "source": "奥地利",
            "target": "哈萨克斯坦"
        }, {
            "source": "奥地利",
            "target": "玻利维亚"
        }, {
            "source": "奥地利",
            "target": "新西兰"
        }, {
            "source": "奥地利",
            "target": "埃塞尔比亚"
        }, {
            "source": "埃塞尔比亚",
            "target": "玻利维亚"
        }, {
            "source": "埃塞尔比亚",
            "target": "哥斯达尼加"
        }, {
            "source": "埃塞尔比亚",
            "target": "安提瓜和巴布达"
        }, {
            "source": "新西兰",
            "target": "库克群岛"
        }, {
            "source": "哥斯达尼加",
            "target": "纽埃"
        }, {

            "source": "纽埃",
            "target": "巴布亚新几内亚"
        }, {
            "source": "巴布亚新几内亚",
            "target": "多米尼克"
        }, {
            "source": "多米尼克",
            "target": "索马里"
        }, {
            "source": "多米尼克",
            "target": "智利"
        }, {
            "source": "索马里",
            "target": "莫桑比克"
        }, {
            "source": "阿联酋",
            "target": "希腊"
        }, {
            "source": "阿联酋",
            "target": "安提瓜和巴布达"
        }, {
            "source": "阿联酋",
            "target": "玻利维亚"
        }, {
            "source": "智利",
            "target": "圭亚那"
        }, {
            "source": "哈萨克斯坦",
            "target": "乌拉圭"
        }, {
            "source": "哈萨克斯坦",
            "target": "玻利维亚"
        }, {
            "source": "乌拉圭",
            "target": "科威特"
        }, {
            "source": "乌拉圭",
            "target": "匈牙利"
        }, {
            "source": "乌拉圭",
            "target": "几内亚"
        }, {
            "source": "几内亚",
            "target": "塞内加尔"
        }, {
            "source": "塞内加尔",
            "target": "葡萄牙"
        }, {
            "source": "哈萨克斯坦",
            "target": "匈牙利"
        }];
        var seriesCategories = [{
            "name": "阿尔及利亚"
        }, {
            "name": "马耳他"
        }, {
            "name": "斐济"
        }, {
            "name": "科威特"
        }, {
            "name": "乌拉圭"
        }, {
            "name": "几内亚"
        }, {
            "name": "哈萨克斯坦"
        }, {
            "name": "匈牙利"
        }, {
            "name": "塞内加尔"
        }, {
            "name": "葡萄牙"
        }, {
            "name": "南非"
        }, {
            "name": "圭亚那"
        }, {
            "name": "智利"
        }, {
            "name": "希腊"
        }, {
            "name": "奥地利"
        }, {
            "name": "安提瓜和巴布达"
        }, {
            "name": "玻利维亚"
        }, {
            "name": "阿联酋"
        }, {
            "name": "新西兰"
        }, {
            "name": "库克群岛"
        }, {
            "name": "埃塞尔比亚"
        }, {
            "name": "哥斯达尼加"
        }, {
            "name": "纽埃"
        }, {
            "name": "巴布亚新几内亚"
        }, {
            "name": "多米尼克"
        }, {
            "name": "索马里"
        }, {
            "name": "莫桑比克"
        }];

        var option = {
            title: {
                text: 'title',
                bottom: "bottom",
                left: "center",
                textStyle: {
                    color: '#ccc'
                }
            },
            // tooltip: {
            //     formatter: '{b}'
            // },
            toolbox: {
                show: true,
                feature: {
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                },
                right: 15
            },
            //backgroundColor: '#000000',
            animationDuration: 1000,
            animationEasingUpdate: 'quinticInOut',
            series: [{
                //name: '', //用于tooltip的显示
                type: 'graph',
                layout: 'force',
                force: {
                    initLayout: 'circular',
                    repulsion: 50,
                    gravity: 0.1,
                    edgeLength: 0.01,
                    layoutAnimation: true,
                },
                data: seriesData,
                links: seriesLinks,
                categories: seriesCategories,
                roam: true,
                label: {
                    normal: {
                        show: true,
                        position: 'top', //inside
                        formatter: '{b}',
                        fontSize: 16,
                        fontStyle: '100',
                    }
                },
                height: 3,
                lineStyle: {
                    normal: {
                        width: 3,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'white' // 0% 处的颜色red
                            }, {
                                offset: 1,
                                color: 'green' // 100% 处的颜色blue
                            }]
                        },
                        curveness: 0,
                        type: "solid"
                    }
                }
            }]
        };
        return option;
    }

    myChart.on('click', function (params) {
        if (curIndex != 5) {
            return;
        }
        if (params.dataType === "node") {
            var deletedFlag = false; // 标记点击的此节点是否存在子节点,若不存在则说明可能在上次的操作中已经删除,这时就需要尝试把之前删除的节点重新添加进去
            for (var i = seriesData.length - 1; i >= 0; i--) {
                if (seriesData[i].category == params.name) {
                    if (seriesData[i].category != seriesData[i].name) { //排除删除根元素的可能
                        deletedFlag = true;
                        for (var ii = seriesData.length - 1; ii >= 0; ii--) { //删除第一级节点的子节点
                            if (seriesData[ii].category == seriesData[i].name) {
                                for (var iii = seriesData.length - 1; iii >= 0; iii--) { //删除第二级节点的子节点
                                    if (seriesData[iii].category == seriesData[ii].name) {
                                        globalSeriesData.push(seriesData[iii]);
                                        seriesData.splice(iii, 1);
                                    }
                                }
                                globalSeriesData.push(seriesData[ii]);
                                seriesData.splice(ii, 1);
                            }
                        }
                        globalSeriesData.push(seriesData[i]);
                        seriesData.splice(i, 1); //删除该元素的第一级子节点,最多需删除三级
                    }
                }
            }
            if (!deletedFlag) { //这种情况下需要恢复该节点的子节点
                var nodeChildren = []; //存放本次恢复的数据,然后将它们从globalSeriesData中删除
                for (var n = globalSeriesData.length - 1; n >= 0; n--) {
                    if (params.name == globalSeriesData[n].category) { //显示该节点第一级子节点
                        seriesData.push(globalSeriesData[n]);
                        nodeChildren.push(globalSeriesData[n]);
                        for (var nn = globalSeriesData.length - 1; nn >= 0; nn--) {
                            if (globalSeriesData[n].name == globalSeriesData[nn].category) { //显示该节点第二级子节点
                                seriesData.push(globalSeriesData[nn]);
                                nodeChildren.push(globalSeriesData[nn]);
                                for (var nnn = globalSeriesData.length - 1; nnn >= 0; nnn--) {
                                    if (globalSeriesData[nn].name == globalSeriesData[nnn].category) { //显示该节点第三级子节点
                                        seriesData.push(globalSeriesData[nnn]);
                                        nodeChildren.push(globalSeriesData[nnn]);
                                    }
                                }
                            }
                        }
                    }
                }
                if (nodeChildren.length > 0) {
                    for (var s = 0; s < nodeChildren.length; s++) {
                        for (var n = globalSeriesData.length - 1; n >= 0; n--) {
                            if (nodeChildren[s].name == globalSeriesData[n].name) {
                                globalSeriesData.splice(n, 1);
                            }
                        }
                    }
                }
            }


            myChart.setOption(option);
        }
    });
    $(".navs").bind('click', function (e) {
        curIndex= parseInt($(this).attr("data-index"))
        console.log(option);
        switch (curIndex) {
            case 0:
                break;
            case 1:
                option=BeltRoad_circleFriends();
                break;
            case 2:
                option=MulDevelopment_accurateDocking();
                break;
            case 3:
                option=CET_operationStatistics();
                break;
            case 4:
                option=CET_distributionStatistics();
                break;
            case 5:
                option=ForeignTrade_growthLine();
                break;
            default:
                break;
        }
        console.log(option);

        myChart.setOption(option,true);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
        
    })





  








});