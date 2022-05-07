//中欧班列开行情况统计模块（柱形图）、
$(document).ready(function () {
  (function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.bar2 .chart'));
    //2.指定配置项和数据
    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          saveAsImage: {
            show: true
          }
        }
      },
      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true
      },
      legend: {
        data: ['总计', '去程', '回程'],
        left: "20%",
        // 修饰图例文字的颜色
        textStyle: {
          color: "FFFFFF"
        }
      },
      xAxis: {
        type: 'category',
        data: ['2016', '2017', '2018', '2019', '2020'],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 15000,
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
            // width: 1,
            // type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      },
      series: [{
          name: '总计',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value + ' ml';
            }
          },
          data: [1702, 3673, 6363, 8225, 12406]
        },
        {
          name: '去程',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value + ' ml';
            }
          },
          data: [1130, 2399, 3696, 4525, 0]
        },
        {
          name: '回程',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value + ' ml';
            }
          },
          data: [572, 1274, 2667, 3700]
        },
        {
          type: 'line',
          tooltip: {
            valueFormatter: function (value) {
              return value + ' ml';
            }
          },
          data: [1702, 3673, 6363, 8225, 12406]
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  })();

  //海上丝路贸易统计图（折线图）
  (function () {
    myChart = echarts.init(document.querySelector('.line1 .chart'));
    var option = {
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        top: '0',
        data: ['进口贸易指数', '出口贸易指数', '进出口贸易指数'],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: "0%",
        top: "10px",
        right: "2%",
        bottom: "4%",
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['2014.3', '2014.6', '2014.9', '2014.12',
          '2015.3', '2015.6', '2015.9', '2015.12',
          '2016.3', '2016.6', '2016.9', '2016.12',
          '2017.3', '2017.6', '2017.9', '2017.12',
          '2018.3', '2018.6', '2018.9', '2018.12',
          '2019.3', '2019.6', '2019.9', '2019.12',
          '2020.3', '2020.6', '2020.9', '2020.12',
          '2021.3', '2021.6', '2021.9', '2021.12',
        ],
        axisLabe: {
          textStyle: {
            color: "white",
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        }
      }],
      yAxis: [{
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }],
      series: [{
          name: '进口贸易指数',
          type: 'line',
          smooth: true,
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [{
                    offset: 0,
                    color: "rgba(0, 216, 135, 0.4)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0, 216, 135, 0.1)"
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            }
          },
          emphasis: {
            focus: 'series'
          },
          // 设置拐点 小圆点
          symbol: "circle",
          // 拐点大小
          symbolSize: 5,
          // 设置拐点颜色以及边框
          itemStyle: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          },
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false,
          data: [
            114.32, 109.28, 128.69, 125.31, 100, 101.86, 102.55, 115.43, 91.86, 92.62, 100.91, 119.58, 110.46, 108.34, 120.36, 125.37, 126.79, 123.28, 137.67, 115.8, 117.15, 114.21, 125.94, 134.67, 116.61, 117.95, 143.07, 143.78, 160.42, 162.22, 168.63, 173.61
          ]
        },
        {
          name: '出口贸易指数',
          type: 'line',
          smooth: true,
          lineStyle: {
            color: "#0184d5",
            width: "2",
          },
          //填充区域（填充颜色）
          areaStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [{
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          },
          emphasis: {
            focus: 'series'
          },
          // 设置拐点
          symbol: "circle",
          // 拐点大小
          symbolSize: 8,
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false,
          // 设置拐点颜色以及边框
          itemStyle: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          },
          data: [
            117.87, 129.49, 148.08, 157.69, 100, 131.41, 142.08, 154.7, 107.53, 122.44, 127.18, 144.97, 124.27, 135.03, 137.24, 160.53, 120.57, 149.49, 156.28, 153.18, 137.74, 147.56, 151.23, 164.76, 128.37, 148.07, 166.23, 195.46, 167.18, 195.11, 211.97, 236.07

          ]
        },
        {
          name: '进出口贸易指数',
          type: 'line',
          smooth: true,
          lineStyle: {
            color: "#F6F60B",
            width: "2",
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [{
                    offset: 0,
                    color: "rgba(246, 246, 246, 0.4)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(246, 246, 246, 0.1)"
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            }
          },
          emphasis: {
            focus: 'series'
          },
          // 设置拐点
          symbol: "circle",
          // 拐点大小
          symbolSize: 8,
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false,
          // 设置拐点颜色以及边框
          itemStyle: {
            color: "#F6F60B",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          },
          data: [
            116.11, 119.47, 138.47, 141.64, 100, 116.77, 122.49, 135.24, 99.77, 107.66, 114.16, 132.39, 117.43, 121.8, 128.87, 143.11, 123.65, 136.5, 147.06, 134.66, 127.54, 131.03, 138.69, 149.85, 122.54, 133.14, 154.75, 169.85, 163.83, 178.81, 190.49, 205.12

          ]
        },
      ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    })
  })();

  //数据自增效果

  (function () {
    let partaner = 141,
      partanerCounter = 0;
    let duration = 8,
      durationCounter = 0;
    let partanerCountTimmer = setInterval(function () {
      if (partanerCounter <= partaner) {
        partanerCounter += 1;
        $("#stratage-partner").html(partanerCounter);
      }
      if (partanerCounter == partaner) {
        clearInterval(partanerCountTimmer);
      }
    }, 6)

    let durationCountTimmer = setInterval(function () {
      if (durationCounter <= duration) {
        durationCounter += 1;
        $("#duration").html(durationCounter);
      }
      if (durationCounter == duration) {
        clearInterval(durationCountTimmer);
      }
    }, 185)
  })();


  //中国对其它沿线国家投资情况（横向条形图）
  (function () {
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6", "#F6F60B"];
    myChart = echarts.init(document.querySelector('.bar1 .chart'));
    var dataMap = {};

    function dataFormatter(obj) {
      var pList = [
        '亚洲', '非洲', '欧洲', '拉丁美洲', '北美洲', '大洋洲'
      ];
      var temp;
      for (var year = 2013; year <= 2020; year++) {
        var max = 0;
        var sum = 0;
        temp = obj[year];
        for (var i = 0, l = temp.length; i < l; i++) {
          max = Math.max(max, temp[i]);
          sum += temp[i];
          obj[year][i] = {
            name: pList[i],
            value: temp[i]
          };
        }
        obj[year + 'max'] = Math.floor(max / 100) * 100;
        obj[year + 'sum'] = sum;
      }
      return obj;
    }
    dataMap.dataGDP = dataFormatter({
      2020: [
        11234365, 422560, 1269565, 1665651, 634312, 144573
      ],
      2019: [
        11084094, 270442, 1051992, 639407, 436713, 208108
      ],
      2018: [
        10550488, 538911, 658839, 1460847, 872383, 222263
      ],
      2017: [
        11003986, 410500, 1846319, 1407659, 649827, 510539
      ],
      2016: [
        13026769, 239873, 1069323, 2722705, 2035096, 521177
      ],
      2015: [
        10837087, 297792, 711843, 1261036, 1071848, 387109

      ],
      2014: [
        8498803, 320192, 1083791, 1054739, 920766, 433695

      ],
      2013: [
        7560426, 337064, 594853, 1435895, 490101, 366032
      ],
    });
    var option = {
      baseOption: {
        timeline: {
          axisType: 'category',
          // realtime: false,
          // loop: false,
          autoPlay: true,
          // currentIndex: 2,
          playInterval: 1000,
          data: [
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
            '2019',
            '2020',
          ],
          label: {
            formatter: '{2013,2014,2015,2016,2017,2018,2019,2020}'
          },
          top: "90%",
          left: "5%",
          right: "5%"
        },
        calculable: true,
        grid: {
          left: "2%",
          top: "10%",
          right: "0%",
          bottom: "3%",
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
        },
        yAxis: [{
          type: 'category',
          axisLabel: {
            interval: 0
          },
          data: ['亚洲', '非洲', '欧洲', '拉丁美洲', '北美洲', '大洋洲'],
          // 不显示y轴的线
          axisLine: {
            show: false
          },
          // 不显示刻度
          axisTick: {
            show: false
          },
          // 把刻度标签里面的文字颜色设置为白色
          axisLabel: {
            color: "#fff"
          }
        }],
        xAxis: [{
          type: 'value',
          show: false,
          name: '投资流量（亿元）',
          axisLabel: {
            color: "#fff"
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }],
        series: [{
          name: "投资流量",
          type: "bar",
          itemStyle: {
            barBorderRadius: 20,
          },
          // 柱子之间的距离
          barCategoryGap: 50,
          //柱子的宽度
          barWidth: 10,
          // 显示柱子内的文字
          label: {
            show: true,
            position: "right"
          },
        }]
      },
      options: [{
          title: {
            text: '2013年中国对各洲的直接投资情况',
            textStyle: {
              fontSize: "20px ",
              color: "#fff"
            },
            subtextStyle: {
              align: "center"
            }
          },
          series: [{
            data: dataMap.dataGDP['2013'],
            // 修改第一组柱子的圆角
            itemStyle: {
              // 此时的color 可以修改柱子的颜色
              color: function (params) {
                // params 传进来的是柱子对象
                // console.log(params);
                // dataIndex 是当前柱子的索引号
                return myColor[params.dataIndex];
              }
            }
          }]
        },
        {
          title: {
            text: '2014年中国对各洲的直接投资情况',
            textStyle: {
              fontSize: "20px ",
              color: "#fff"
            },
            subtextStyle: {
              align: "center"
            }
          },
          series: [{
              data: dataMap.dataGDP['2014'],
              itemStyle: {
                // 此时的color 可以修改柱子的颜色
                color: function (params) {
                  // params 传进来的是柱子对象
                  // console.log(params);
                  // dataIndex 是当前柱子的索引号
                  return myColor[params.dataIndex];
                }
              },
            }

          ]
        },
        {
          title: {
            text: '2015年中国对各洲的直接投资情况',
            textStyle: {
              fontSize: "20px ",
              color: "#fff"
            },
            subtextStyle: {
              align: "center"
            }
          },
          series: [{
            data: dataMap.dataGDP['2015'],
            // 修改第一组柱子的圆角
            itemStyle: {
              // 此时的color 可以修改柱子的颜色
              color: function (params) {
                // params 传进来的是柱子对象
                // console.log(params);
                // dataIndex 是当前柱子的索引号
                return myColor[params.dataIndex];
              }
            }
          }]
        },
        {
          title: {
            text: '2016年中国对各洲的直接投资情况',
            textStyle: {
              fontSize: "20px ",
              color: "#fff"
            },
            subtextStyle: {
              align: "center"
            }
          },
          series: [{
            data: dataMap.dataGDP['2016'],
            // 修改第一组柱子的圆角
            itemStyle: {
              // 此时的color 可以修改柱子的颜色
              color: function (params) {
                // params 传进来的是柱子对象
                // console.log(params);
                // dataIndex 是当前柱子的索引号
                return myColor[params.dataIndex];
              }
            }
          }]
        },
        {
          title: {
            text: '2017年中国对各洲的直接投资情况',
            textStyle: {
              fontSize: "20px ",
              color: "#fff"
            },
            subtextStyle: {
              align: "center"
            }
          },
          series: [{
            data: dataMap.dataGDP['2017'],
            // 修改第一组柱子的圆角
            itemStyle: {
              // 此时的color 可以修改柱子的颜色
              color: function (params) {
                // params 传进来的是柱子对象
                // console.log(params);
                // dataIndex 是当前柱子的索引号
                return myColor[params.dataIndex];
              }
            }
          }]
        },
        {
          title: {
            text: '2018年中国对各洲的直接投资情况',
            textStyle: {
              fontSize: "20px ",
              color: "#fff"
            },
            subtextStyle: {
              align: "center"
            }
          },
          series: [{
            data: dataMap.dataGDP['2018'],
            // 修改第一组柱子的圆角
            itemStyle: {
              // 此时的color 可以修改柱子的颜色
              color: function (params) {
                // params 传进来的是柱子对象
                // console.log(params);
                // dataIndex 是当前柱子的索引号
                return myColor[params.dataIndex];
              }
            }
          }]
        },
        {
          title: {
            text: '2019年中国对各洲的直接投资情况',
            textStyle: {
              fontSize: "20px ",
              color: "#fff"
            },
            subtextStyle: {
              align: "center"
            }
          },
          series: [{
            data: dataMap.dataGDP['2019'],
            // 修改第一组柱子的圆角
            itemStyle: {
              // 此时的color 可以修改柱子的颜色
              color: function (params) {
                // params 传进来的是柱子对象
                // console.log(params);
                // dataIndex 是当前柱子的索引号
                return myColor[params.dataIndex];
              }
            }
          }]
        },
        {
          title: {
            text: '2020年中国对各洲的直接投资情况',
            textStyle: {
              fontSize: "20px ",
              color: "#fff"
            },
            subtextStyle: {
              align: "center"
            }
          },
          series: [{
            data: dataMap.dataGDP['2013'],
            // 修改第一组柱子的圆角
            itemStyle: {
              // 此时的color 可以修改柱子的颜色
              color: function (params) {
                // params 传进来的是柱子对象
                // console.log(params);
                // dataIndex 是当前柱子的索引号
                return myColor[params.dataIndex];
              }
            }
          }]
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    })
  })();

  //文件占比饼图

  var chartDom = document.querySelector(".pie1");
  /**/
  var datas = [ //存储各个大洲的国家类型占比

    [ //非洲的国家占比
      {
        value: 51,
        name: '发展中国家'
      },
      {
        value: 0,
        name: '发达国家'
      }
    ],
    [ //亚洲的国家占比
      {
        value: 36,
        name: '发展中国家'
      },
      {
        value: 2,
        name: '发达国家'
      }
    ],
    [ //欧洲的国家占比
      {
        value: 18,
        name: '发展中国家'
      },
      {
        value: 9,
        name: '发达国家'
      }
    ],
    [ //大洋洲的国家占比
      {
        value: 10,
        name: '发展中国家'
      },
      {
        value: 1,
        name: '发达国家'
      }
    ],
    [ //南美洲的国家占比
      {
        value: 9,
        name: '发展中国家'
      },
      {
        value: 0,
        name: '发达国家'
      }
    ],
    [ //北美洲的国家占比
      {
        value: 12,
        name: '发展中国家'
      },
      {
        value: 0,
        name: '发达国家'
      }
    ]
  ]
  console.log(chartDom);
  var docPie = echarts.init(chartDom);
  var option_4;

  option_4 = {
    //设置图例的颜色


    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)',

    },
    legend: {
      data: [
        '发展中国家',
        '发达国家',
        '非洲',
        '亚洲',
        '欧洲',
        '大洋洲',
        '南美洲',
        '北美洲',
      ],
      textStyle: {
        color: "#fff4fd",
      }
    },
    series: [{
        name: "",
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '20%'],
        center: ['50%', "55%"],
        label: {
          position: 'inner',
          fontSize: 14
        },
        labelLine: {
          show: false
        },
        data: datas[1] //内部小圆和初始的外圆选择亚洲
      },
      {
        name: "",
        type: 'pie',
        radius: ['30%', '50%'],
        center: ['50%', "55%"],
        labelLine: {
          length: 25
        },
        label: {
          formatter: '{b|{b}} {c}\n{hr|}\n{per|{d}%}  ',
          backgroundColor: '#F6F8FC',
          borderColor: '#8C8D8E',
          borderWidth: 1,
          borderRadius: 4,
          rich: {
            hr: {
              borderColor: '#8C8D8E',
              width: '100%',
              borderWidth: 1,
              height: 0
            },
            b: {
              align: 'center',
              color: '#4C5058',
              fontSize: 14,
              fontWeight: 'bold',
              lineHeight: 20
            },
            per: {
              color: '#fff',
              backgroundColor: '#4C5058',
              padding: [3, 4],
              borderRadius: 4
            }
          }
        },
        data: [{
            value: 51,
            name: '非洲'
          },
          {
            value: 38,
            name: '亚洲',
            selected: true
          },
          {
            value: 27,
            name: '欧洲'
          },
          {
            value: 11,
            name: '大洋洲'
          },
          {
            value: 9,
            name: '南美洲'
          },
          {
            value: 12,
            name: '北美洲'
          },
        ]
      }
    ]
  };

  docPie.setOption(option_4);
  docPie.on('click', function (params) {
    console.log(params);
    if (params.seriesIndex == 1) {
      for (var i = 0; i < option_4.series[1].data.length; i++) {
        option_4.series[1].data[i].selected = false;
      }
      var selected = params.data;
      selected.selected = true;
      console.log(params.dataIndex);
      option_4.series[1].data[params.dataIndex] = selected;
      option_4.series[0].data = datas[params.dataIndex];
      console.log(option_4);
      docPie.clear();
      docPie.setOption(option_4);
    }
  })
  window.addEventListener("resize", function () {
    docPie.resize();
  });


  /**
   * 中间地图部分的代码
   */
  (function () {
    worldMap = echarts.init(document.querySelector('.map .chart'));

    var geoCoordMap = {
      阿富汗: [67.709953, 33.93911],
      安哥拉: [17.873887, -11.202692],
      阿尔巴尼亚: [20.168331, 41.153332],
      阿联酋: [53.847818, 23.424076],
      阿根廷: [-63.61667199999999, -38.416097],
      亚美尼亚: [45.038189, 40.069099],
      法属南半球和南极领地: [69.348557, -49.280366],
      澳大利亚: [133.775136, -25.274398],
      奥地利: [14.550072, 47.516231],
      阿塞拜疆: [47.576927, 40.143105],
      布隆迪: [29.918886, -3.373056],
      比利时: [4.469936, 50.503887],
      贝宁: [2.315834, 9.30769],
      布基纳法索: [-1.561593, 12.238333],
      孟加拉国: [90.356331, 23.684994],
      保加利亚: [25.48583, 42.733883],
      巴哈马: [-77.39627999999999, 25.03428],
      波斯尼亚和黑塞哥维那: [17.679076, 43.915886],
      白俄罗斯: [27.953389, 53.709807],
      伯利兹: [-88.49765, 17.189877],
      百慕大: [-64.7505, 32.3078],
      玻利维亚: [-63.58865299999999, -16.290154],
      巴西: [-51.92528, -14.235004],
      文莱: [114.727669, 4.535277],
      不丹: [90.433601, 27.514162],
      博茨瓦纳: [24.684866, -22.328474],
      中非共和国: [20.939444, 6.611110999999999],
      加拿大: [-106.346771, 56.130366],
      瑞士: [8.227511999999999, 46.818188],
      智利: [-71.542969, -35.675147],
      中国: [104.195397, 35.86166],
      象牙海岸: [-5.547079999999999, 7.539988999999999],
      喀麦隆: [12.354722, 7.369721999999999],
      刚果民主共和国: [21.758664, -4.038333],
      刚果共和国: [15.827659, -0.228021],
      哥伦比亚: [-74.297333, 4.570868],
      哥斯达黎加: [-83.753428, 9.748916999999999],
      古巴: [-77.781167, 21.521757],
      北塞浦路斯: [33.429859, 35.126413],
      塞浦路斯: [33.429859, 35.126413],
      捷克共和国: [15.472962, 49.81749199999999],
      德国: [10.451526, 51.165691],
      吉布提: [42.590275, 11.825138],
      丹麦: [9.501785, 56.26392],
      多明尼加共和国: [-70.162651, 18.735693],
      阿尔及利亚: [1.659626, 28.033886],
      厄瓜多尔: [-78.18340599999999, -1.831239],
      埃及: [30.802498, 26.820553],
      厄立特里亚: [39.782334, 15.179384],
      西班牙: [-3.74922, 40.46366700000001],
      爱沙尼亚: [25.013607, 58.595272],
      埃塞俄比亚: [40.489673, 9.145000000000001],
      芬兰: [25.748151, 61.92410999999999],
      斐: [178.065032, -17.713371],
      福克兰群岛: [-59.523613, -51.796253],
      法国: [2.213749, 46.227638],
      加蓬: [11.609444, -0.803689],
      英国: [-3.435973, 55.378051],
      格鲁吉亚: [-82.9000751, 32.1656221],
      加纳: [-1.023194, 7.946527],
      几内亚: [-9.696645, 9.945587],
      冈比亚: [-15.310139, 13.443182],
      几内亚比绍: [-15.180413, 11.803749],
      赤道几内亚: [10.267895, 1.650801],
      希腊: [21.824312, 39.074208],
      格陵兰: [-42.604303, 71.706936],
      危地马拉: [-90.23075899999999, 15.783471],
      法属圭亚那: [-53.125782, 3.933889],
      圭亚那: [-58.93018, 4.860416],
      洪都拉斯: [-86.241905, 15.199999],
      克罗地亚: [15.2, 45.1],
      海地: [-72.285215, 18.971187],
      匈牙利: [19.503304, 47.162494],
      印尼: [113.921327, -0.789275],
      印度: [78.96288, 20.593684],
      爱尔兰: [-8.24389, 53.41291],
      伊朗: [53.688046, 32.427908],
      伊拉克: [43.679291, 33.223191],
      冰岛: [-19.020835, 64.963051],
      以色列: [34.851612, 31.046051],
      意大利: [12.56738, 41.87194],
      牙买加: [-77.297508, 18.109581],
      约旦: [36.238414, 30.585164],
      日本: [138.252924, 36.204824],
      哈萨克斯坦: [66.923684, 48.019573],
      肯尼亚: [37.906193, -0.023559],
      吉尔吉斯斯坦: [74.766098, 41.20438],
      柬埔寨: [104.990963, 12.565679],
      韩国: [127.766922, 35.907757],
      科索沃: [20.902977, 42.6026359],
      科威特: [47.481766, 29.31166],
      老挝: [102.495496, 19.85627],
      黎巴嫩: [35.862285, 33.854721],
      利比里亚: [-9.429499000000002, 6.428055],
      利比亚: [17.228331, 26.3351],
      斯里兰卡: [80.77179699999999, 7.873053999999999],
      莱索托: [28.233608, -29.609988],
      立陶宛: [23.881275, 55.169438],
      卢森堡: [6.129582999999999, 49.815273],
      拉脱维亚: [24.603189, 56.879635],
      摩洛哥: [-7.092619999999999, 31.791702],
      摩尔多瓦: [28.369885, 47.411631],
      马达加斯加: [46.869107, -18.766947],
      墨西哥: [-102.552784, 23.634501],
      马其顿: [21.745275, 41.608635],
      马里: [-3.996166, 17.570692],
      缅甸: [95.956223, 21.913965],
      黑山: [19.37439, 42.708678],
      蒙古: [103.846656, 46.862496],
      莫桑比克: [35.529562, -18.665695],
      毛里塔尼亚: [-10.940835, 21.00789],
      马拉维: [34.301525, -13.254308],
      马来西亚: [101.975766, 4.210484],
      纳米比亚: [18.49041, -22.95764],
      新喀里多尼亚: [165.618042, -20.904305],
      尼日尔: [8.081666, 17.607789],
      尼日利亚: [8.675277, 9.081999],
      尼加拉瓜: [-85.207229, 12.865416],
      荷兰: [5.291265999999999, 52.132633],
      挪威: [8.468945999999999, 60.47202399999999],
      尼泊尔: [84.12400799999999, 28.394857],
      新西兰: [174.885971, -40.900557],
      阿曼: [55.923255, 21.512583],
      巴基斯坦: [69.34511599999999, 30.375321],
      巴拿马: [-80.782127, 8.537981],
      秘鲁: [-75.015152, -9.189967],
      菲律宾: [121.774017, 12.879721],
      巴布亚新几内亚: [143.95555, -6.314992999999999],
      波兰: [19.145136, 51.919438],
      波多黎各: [-66.590149, 18.220833],
      北朝鲜: [127.510093, 40.339852],
      葡萄牙: [-8.224454, 39.39987199999999],
      巴拉圭: [-58.443832, -23.442503],
      卡塔尔: [51.183884, 25.354826],
      罗马尼亚: [24.96676, 45.943161],
      俄罗斯: [105.318756, 61.52401],
      卢旺达: [29.873888, -1.940278],
      西撒哈拉: [-12.885834, 24.215527],
      沙特阿拉伯: [45.079162, 23.885942],
      苏丹: [30.217636, 12.862807],
      南苏丹: [31.3069788, 6.876991899999999],
      塞内加尔: [-14.452362, 14.497401],
      所罗门群岛: [160.156194, -9.64571],
      塞拉利昂: [-11.779889, 8.460555],
      萨尔瓦多: [-88.89653, 13.794185],
      索马里兰: [46.8252838, 9.411743399999999],
      索马里: [46.199616, 5.152149],
      塞尔维亚共和国: [21.005859, 44.016521],
      苏里南: [-56.027783, 3.919305],
      斯洛伐克: [19.699024, 48.669026],
      斯洛文尼亚: [14.995463, 46.151241],
      瑞典: [18.643501, 60.12816100000001],
      斯威士兰: [31.465866, -26.522503],
      叙利亚: [38.996815, 34.80207499999999],
      乍得: [18.732207, 15.454166],
      多哥: [0.824782, 8.619543],
      泰国: [100.992541, 15.870032],
      塔吉克斯坦: [71.276093, 38.861034],
      土库曼斯坦: [59.556278, 38.969719],
      东帝汶: [125.727539, -8.874217],
      特里尼达和多巴哥: [-61.222503, 10.691803],
      突尼斯: [9.537499, 33.886917],
      土耳其: [35.243322, 38.963745],
      坦桑尼亚联合共和国: [34.888822, -6.369028],
      乌干达: [32.290275, 1.373333],
      乌克兰: [31.16558, 48.379433],
      乌拉圭: [-55.765835, -32.522779],
      美国: [-95.712891, 37.09024],
      乌兹别克斯坦: [64.585262, 41.377491],
      委内瑞拉: [-66.58973, 6.42375],
      越南: [108.277199, 14.058324],
      瓦努阿图: [166.959158, -15.376706],
      西岸: [35.3027226, 31.9465703],
      也门: [48.516388, 15.552727],
      南非: [22.937506, -30.559482],
      赞比亚: [27.849332, -13.133897],
      津巴布韦: [29.154857, -19.015438],
    };
    var data_tmp = [{
        name: '俄罗斯',
      },
      {
        name: '中国',
      },
      {
        name: '蒙古',
      },
      {
        name: '澳大利亚',
      },
      {
        name: '哈萨克斯坦',
      },
      {
        name: '乌兹别克斯坦',
      },
      {
        name: '土耳其',
      },
      {
        name: '白俄罗斯'
      }, {
        name: '斯里兰卡'
      },
      {
        name: '马来西亚'
      },
      {
        name: '也门'
      },
      {
        name: '印度尼西亚'
      },

    ];
    var convertData = function (data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];

        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
          });
        }
      }

      return res;
    };
    var option_worldMap = {
      title: {
        text: '',
        subtext: '',
        left: 'center',
        top: '20px',
      },
      geo: {
        map: 'world',
        zoom: 1,
        show: true,
        roam: true,
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        itemStyle: {
          normal: {
            areaColor: '#21729a', //地图颜色
            borderColor: '#68ebf0', //地图边缘线的颜色
            borderWidth: 0,
            borderJoin: 'round',
            shadowColor: '#00B3AE', //外发光颜色
            shadowOffsetX: -3,
            shadowOffsetY: 5,
            shadowBlur: 2, //图形阴影的模糊大小
          },
          emphasis: {
            areaColor: '#2f9eff', //悬浮区背景
          },
        },
        select: {
          itemStyle: {
            areaColor: '#2f9eff', //悬浮区背景
          },
        }
      },
      series: [{
          type: 'map',
          geoIndex: 0,
        },
        {
          //涟漪波
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 4,
          symbolSize: [10, 5],
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
            period: 10,
            scale: 5,
            number: 3,
          },
          itemStyle: {
            normal: {
              color: '#F9F871',
            },
          },
          data: convertData(data_tmp),
        },

      ],
    };




    worldMap.setOption(option_worldMap);
    window.addEventListener("resize", function () {
      worldMap.resize();
    })


    /*从数据中获取数据*/
    //一下这个小段写的是从后端获取数据的地方，此处是想通过国家名称来检索对应的GDP和投资

    //数据处理函数：
    function dataProcessGDP(GDP_resouse) {
      let GDP_years = []; //定义GDP数据
      let GDP_datas = []; //定义年份数据段
      console.log(GDP_resouse); //传入的是json数组字符串(去掉注释可以看看哦)
      var GDP_resouse = eval("(" + GDP_resouse + ")"); //变成数组
      for (let i = 0; i < GDP_resouse.length; i++) {
        GDP_years.unshift(GDP_resouse[i].year);
        GDP_datas.unshift((GDP_resouse[i].GDP / 100000000).toFixed(2));
      }
      let GDP_option = {
        color: ["#9C67AF", "#F9F871"],
        title: {
          text: country + "国内生产总值统计条形图",
          textStyle: {
            color: "#FFEBCD"
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['GDP(国内生产总值/亿美元)']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'value',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#E5F0FF', //更改坐标轴文字颜色
            }
          }
        }],
        yAxis: [{
          type: 'category',
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#E5F0FF', //更改坐标轴文字颜色
            }
          },
          data: GDP_years
        }],
        series: [{
          name: '国内生产总值(亿美元)',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: GDP_datas
        }, ]
      };
      //console.log(GDP_option);
      return GDP_option;
    }

    function dataProcessBTA(BTA_resouse) {
      console.log("BTA_resouse\n" + BTA_resouse);
      let xAxis = [];
      let BTA_years = ["product"]; //年份
      let BTA_sum = []; //进出口总额
      let BTA_imports = ["进口额(亿美元)"]; //进口额
      let BTA_exports = ["出口额(亿美元)"]; //出口额
      console.log("BTA_resouse\n" + eval("(" + BTA_resouse + ")"));查看源
      var BTA_resouse = eval("(" + BTA_resouse + ")"); //变成数组
      for (let i = 0; i < BTA_resouse.length; i++) {
        xAxis.push(BTA_resouse[i].year);
        BTA_years.push(BTA_resouse[i].year);
        BTA_sum.push((BTA_resouse[i].sum_import_export / 10000).toFixed(2));
        BTA_imports.push((BTA_resouse[i].imports / 10000).toFixed(2));
        BTA_exports.push((BTA_resouse[i].exports / 10000).toFixed(2));
      }
      const defaultSum = BTA_sum[BTA_sum.length - 1]; //初始总值
      const defaultYear = BTA_years[BTA_years.length - 1]; //初始年份
      let BTA_option = {
        color: ["#00D1AC", "#F9F871", "#9C67AF", "#D6A419", "#A7D4FF"],
        title: [{
          id: "title",
          text: country + defaultYear + "年与中国双边贸易额",
          textStyle: {
            color: "#FFEBCD"
          }
        }, {
          id: 'pieSum',
          text: '进出口贸易额\n(亿美元)\n' + defaultSum,
          left: 'center',
          top: '20%',
          textStyle: {
            color: "#FFEBCD"
          }
        }],
        legend: {
          orient: "vertical",
          top: "5%",
          left: "right",
          data: ["进口额(亿美元)", "出口额(亿美元)"]
        },
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        dataset: {
          source: []
        },
        xAxis: {
          data: null,
          type: "category",
          axisLabel: {
            show: true,
            textStyle: {
              color: '#E5F0FF', //更改坐标轴文字颜色
            }
          },
        },
        yAxis: {
          gridIndex: 0,
          type: "value",
          axisLabel: {
            show: true,
            textStyle: {
              color: '#E5F0FF', //更改坐标轴文字颜色
            }
          }
        },
        grid: {
          top: '55%'
        },
        series: [{
            type: 'line',
            smooth: true,
            symbolSize: 10,
            seriesLayoutBy: 'row',
            emphasis: {
              focus: 'series'
            }
          },
          {
            type: 'line',
            smooth: true,
            symbolSize: 10,
            seriesLayoutBy: 'row',
            emphasis: {
              focus: 'series'
            }
          },
          {
            name: '进出口总额(亿美元)',
            type: 'line',
            symbolSize: 10,
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: {
              focus: 'series'
            },
            data: null
          },
          {
            type: 'pie',
            id: 'pie',
            radius: ['25%', '40%'],
            center: ['50%', '25%'],
            emphasis: {
              focus: 'self'
            },
            label: {
              formatter: '{b}:\n {@' + defaultYear + '} ({d}%)'
            },
            encode: {
              itemName: 'product',
              value: defaultYear,
              tooltip: defaultYear
            },
          }
        ]
      }
      /**
       * 为联动数据集传入数据
       */
      BTA_option.xAxis.data = xAxis; //坐标设置年份
      BTA_option.dataset.source.push(BTA_years);
      BTA_option.dataset.source.push(BTA_exports);
      BTA_option.dataset.source.push(BTA_imports);
      BTA_option.series[2].data = BTA_sum;
      return BTA_option;
    }
    worldMap.on("click", function (params) {
      let layerChart = echarts.init(document.querySelector('#BTA-chart'));
      //当点击时创建一个echars示例
      let res; //返回的数据(处理后)
      country = null;
      const mapdataIndex = params.dataIndex;
      switch (mapdataIndex) {
        case 167:
          country = "俄罗斯";
          break;
        case 133:
          country = "蒙古国";
          break;
        case 4:
          country = "哈萨克斯坦";
          break;
        case 204:
          country = "乌兹别克斯坦";
          break;
        case 198:
          country = "土耳其";
          break;
        case 28:
          country = "白俄罗斯";
          break;
        case 120:
          country = "斯里兰卡";
          break;
        case 140:
          country = "马来西亚";
          break;
        case 211:
          country = "也门";
          break;
        case 93:
          country = "印度尼西亚";
          break;
        default:
          break;
      }
      if (country != null) {
        //当目前国家不为空时，进行检索并生成layer
        $.ajax({
          type: "GET",
          url: "dataGet/get.php", //采用相对定位，同域检索
          data: {
            "country": country
          }, //发到后端的数据,这里给了死数据，其实也可以传进来
          async: false, //异步获取（true为同步获取）
          success: function (response) {//response是从服务端php拿到的数据（String）
            console.log(response)
            res = JSON.parse(response); //变为json字符串
            console.log(res);
            print(res);
            //res.GDP; //JSON数组字符串,每一项为{"year":"XXXX","GDP":"XXX(单位美元)"}
            //res.BTA; //JSON数组字符串,每一项为{"year":"XXX","sum_import_export":"XXX","imports":"XXX","exports":"XXX"},
          },
          error: function (jqXHR) {
            console.log("请求失败" + jqXHR.status); //出错时返回状态码
          }
        });

        layerChart.clear();
        layerChart.setOption(dataProcessGDP(res.GDP)); //装填图像,重新渲染，默认加载为GDP页面
        window.addEventListener("resize", function () {
          layerChart.resize();
        });
        $("#self-GDP").bind("click", function () {
          $("#BTA").removeClass("active");
          $(this).addClass("active");
          layerChart.clear();
          layerChart.setOption(dataProcessGDP(res.GDP));
        });
        $("#BTA").bind('click', function () {
          $("#self-GDP").removeClass("active");
          $(this).addClass("active");
          layerChart.clear();
          layerChart.setOption(dataProcessBTA(res.BTA));
        })
        layer.open({ //打开弹窗
          type: 1,
          title: null,
          area: ["600px", "600px"],
          content: $(".BTA-box")
        });
      }
      layerChart.on('mouseover', function (params) {
        if (params.componentType == "series" && params.seriesType == 'line' && params.seriesIndex != 2) {
          console.log(params.value);
          layerChart.setOption({
            title: [{
              id: "title",
              text: country + params.value[0] + "年与中国双边贸易额",
              textStyle: {
                color: "#FFEBCD"
              }
            }, {
              id: 'pieSum',
              text: '进出口贸易额\n(亿美元)\n' + (parseFloat(params.value[1]) + parseFloat(params.value[2])).toFixed(2),
              left: 'center',
              top: '20%',
            }],
            series: {
              id: 'pie',
              label: {
                formatter: '{b} \n {c} ({d}%)' //
              },
              data: [{
                value: parseFloat(params.value[1]).toFixed(2),
                name: "出口额(亿美元)"
              }, {
                value: parseFloat(params.value[2]).toFixed(2),
                name: "进口额(亿美元)"
              }]
            }
          });
          setTimeout(function () {
            layerChart.dispatchAction({
              type: 'highlight',
              seriesIndex: params.seriesIndex,
              dataIndex: params.seriesIndex
            });
          }, 300);
        }
      });
      layerChart.on('mouseout', function (params) {
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: params.seriesIndex,
          dataIndex: params.seriesIndex
        });
      });
    })


  })();

});