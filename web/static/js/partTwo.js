/*
 * @Author: your name
 * @Date: 2022-03-22 00:37:26
 * @LastEditTime: 2022-05-02 14:17:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Uncle-Cao的git本地库\计算机设计大赛\js\partTwo.js
 */
window.onload = function () {
    var data = {
        value: [{
                "name": "中欧班列",
                "value": 1000
            },
            {
                "name": "发展",
                "value": 990
            },
            {
                "name": "一带一路",
                "value": 990
            },
            {
                "name": "建设",
                "value": 988
            },
            {
                "name": "国家",
                "value": 982
            },
            {
                "name": "加强",
                "value": 981
            },
            {
                "name": "推进",
                "value": 971
            },
            {
                "name": "中国",
                "value": 967
            },
            {
                "name": "经济",
                "value": 962
            },
            {
                "name": "推动",
                "value": 954
            },
            {
                "name": "支持",
                "value": 952
            },
            {
                "name": "工作",
                "value": 949
            },
            {
                "name": "合作",
                "value": 940
            },
            {
                "name": "企业",
                "value": 933
            },
            {
                "name": "政策",
                "value": 932
            },
            {
                "name": "共建",
                "value": 931
            },
            {
                "name": "国际",
                "value": 931
            },
            {
                "name": "促进",
                "value": 904
            },
            {
                "name": "服务",
                "value": 902
            },
            {
                "name": "开展",
                "value": 897
            },
            {
                "name": "创新",
                "value": 895
            },
            {
                "name": "加快",
                "value": 887
            },
            {
                "name": "改革",
                "value": 877
            },
            {
                "name": "实施",
                "value": 874
            },
            {
                "name": "深化",
                "value": 872
            },
            {
                "name": "政府",
                "value": 866
            },
            {
                "name": "坚持",
                "value": 865
            },
            {
                "name": "就业",
                "value": 857
            },
            {
                "name": "完善",
                "value": 849
            },
            {
                "name": "继续",
                "value": 819
            },
            {
                "name": "重要",
                "value": 815
            },
            {
                "name": "全面",
                "value": 812
            },
            {
                "name": "疫情",
                "value": 803
            },
            {
                "name": "保障",
                "value": 802
            },
            {
                "name": "社会",
                "value": 801
            },
            {
                "name": "提升",
                "value": 773
            },
            {
                "name": "增长",
                "value": 772
            },
            {
                "name": "交往",
                "value": 723
            },
            {
                "name": "投资",
                "value": 709
            },
            {
                "name": "交流",
                "value": 706
            },
            {
                "name": "落实",
                "value": 706
            },
            {
                "name": "加大",
                "value": 705
            },
            {
                "name": "问题",
                "value": 685
            },
            {
                "name": "领域",
                "value": 671
            },
            {
                "name": "世界",
                "value": 659
            },
            {
                "name": "积极",
                "value": 658
            },
            {
                "name": "能力",
                "value": 657
            },
            {
                "name": "稳定",
                "value": 641
            },
            {
                "name": "市场",
                "value": 638
            },
            {
                "name": "议会",
                "value": 627
            },
            {
                "name": "作用",
                "value": 623
            },
            {
                "name": "提高",
                "value": 622
            },
            {
                "name": "保护",
                "value": 619
            },
            {
                "name": "做好",
                "value": 600
            },
            {
                "name": "重大",
                "value": 587
            },
            {
                "name": "战略",
                "value": 576
            },
            {
                "name": "人民",
                "value": 574
            },
            {
                "name": "发挥",
                "value": 571
            },
            {
                "name": "构建",
                "value": 568
            },
            {
                "name": "组织",
                "value": 568
            },
            {
                "name": "扩大",
                "value": 568
            },
            {
                "name": "强化",
                "value": 563
            },
            {
                "name": "高质量",
                "value": 556
            },
            {
                "name": "部分",
                "value": 551
            },
            {
                "name": "全球",
                "value": 543
            },
            {
                "name": "外交",
                "value": 537
            },
            {
                "name": "对外",
                "value": 533
            },
            {
                "name": "项目",
                "value": 527
            },
            {
                "name": "风险",
                "value": 517
            },
            {
                "name": "力度",
                "value": 513
            },
            {
                "name": "保持",
                "value": 511
            },
            {
                "name": "优化",
                "value": 499
            },
            {
                "name": "2021",
                "value": 495
            },
            {
                "name": "我国",
                "value": 488
            },
            {
                "name": "重点",
                "value": 487
            },
            {
                "name": "地区",
                "value": 483
            },
            {
                "name": "制度",
                "value": 474
            },
            {
                "name": "增强",
                "value": 470
            },
            {
                "name": "体系",
                "value": 465
            },
            {
                "name": "经济社会",
                "value": 458
            },
            {
                "name": "深入",
                "value": 458
            },
            {
                "name": "融资",
                "value": 456
            },
            {
                "name": "基础",
                "value": 453
            },
            {
                "name": "区域",
                "value": 441
            },
            {
                "name": "任务",
                "value": 437
            },
            {
                "name": "基本",
                "value": 433
            },
            {
                "name": "围绕",
                "value": 420
            },
            {
                "name": "开放",
                "value": 408
            },
            {
                "name": "作为",
                "value": 389
            },
            {
                "name": "治理",
                "value": 388
            },
            {
                "name": "生产",
                "value": 362
            },
            {
                "name": "机制",
                "value": 360
            },
            {
                "name": "社会主义",
                "value": 345
            },
            {
                "name": "资金",
                "value": 342
            },
            {
                "name": "倡议",
                "value": 331
            },
            {
                "name": "基础设施",
                "value": 326
            },
            {
                "name": "核心",
                "value": 318
            },
            {
                "name": "群众",
                "value": 313
            },
            {
                "name": "监管",
                "value": 305
            },
            {
                "name": "方面",
                "value": 281
            },
            {
                "name": "铁路",
                "value": 281
            },
            {
                "name": "民生",
                "value": 278
            },
            {
                "name": "关系",
                "value": 268
            },
            {
                "name": "行动",
                "value": 252
            },
            {
                "name": "挑战",
                "value": 230
            },
            {
                "name": "共同",
                "value": 227
            },
            {
                "name": "金融",
                "value": 227
            },
            {
                "name": "会议",
                "value": 226
            },
            {
                "name": "一年",
                "value": 221
            },
            {
                "name": "规划",
                "value": 217
            },
            {
                "name": "资源",
                "value": 216
            },
            {
                "name": "文化",
                "value": 199
            },
            {
                "name": "时代",
                "value": 185
            },
            {
                "name": "共同体",
                "value": 181
            },
            {
                "name": "科技",
                "value": 160
            },
            {
                "name": "地方",
                "value": 148
            },
            {
                "name": "委员会",
                "value": 146
            },
            {
                "name": "议政",
                "value": 145
            },
            {
                "name": "稳步",
                "value": 131
            },
            {
                "name": "务实",
                "value": 125
            },
            {
                "name": "各国",
                "value": 122
            },
            {
                "name": "环境",
                "value": 120
            },
            {
                "name": "命运",
                "value": 109
            },
            {
                "name": "政治",
                "value": 105
            },
            {
                "name": "代表",
                "value": 97
            },
            {
                "name": "创业",
                "value": 96
            },
            {
                "name": "良好",
                "value": 86
            },
            {
                "name": "健康",
                "value": 68
            },
            {
                "name": "今年",
                "value": 56
            },
            {
                "name": "2022",
                "value": 54
            },
            {
                "name": "党中央",
                "value": 42
            },
            {
                "name": "研发",
                "value": 35
            },
            {
                "name": "积极开展",
                "value": 21
            }

        ],
        //词云的轮廓：使用base64编码
        image: "data:image/png;base64,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"
    }

    var wordCloud = echarts.init(document.getElementById('wordCloudCanvas'));
    var maskImage = new Image();
    maskImage.src = data.image;
    maskImage.onload = function () {
        /**
         * 词云部分相关功能
         */
        var wordCloudOption = {
            backgroundColor: '#2F4858',
            tooltip: {
                trigger: "item",
                showDelay: 50, //显示延迟50ms
                type: "shadow",
                formatter: function (p) {
                    console.log(p.data.name);
                    console.log(p.data.value);
                    var res = p.data.name;
                    if (p.data.value) { //如果有数据
                        res = res + '<br/><svg t="1651472129782"  style="width:20px;height:20px" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="60370" width="200" height="200"><path d="M636.294095 464.969143c-82.895238-92.647619-82.895238-202.361905-82.895238-360.838095-258.438095 102.4-195.047619 380.342857-202.361905 472.990476-65.828571-56.07619-82.895238-185.295238-82.895238-185.295238-73.142857 36.571429-112.152381 129.219048-112.152381 202.361904 4.87619 190.171429 160.914286 343.771429 351.085715 341.333334 190.171429 4.87619 346.209524-146.285714 351.085714-336.457143v-7.314286c0-112.152381-82.895238-165.790476-82.895238-314.514285-82.895238 24.380952-141.409524 99.961905-138.971429 187.733333z" fill="#FF6A6A" p-id="60371"></path><path d="M497.322667 557.616762c119.466667 46.32381 92.647619 175.542857 92.647619 212.114286 19.504762-24.380952 31.695238-53.638095 36.571428-82.895238 29.257143 21.942857 46.32381 56.07619 46.32381 92.647619-2.438095 87.771429-73.142857 156.038095-160.914286 153.6-85.333333-2.438095-153.6-70.704762-153.6-153.6 9.752381-82.895238 138.971429-148.72381 138.971429-221.866667z" fill="#FFAC7D" p-id="60372"></path></svg>' + ":" + p.data.value;

                    } else {
                        "<br/>暂无数据" + ":--"
                    }
                    return res;
                }

            },
            left: 'center',
            top: 'center',
            width: '200%',
            height: '100%',
            right: null,
            bottom: null,
            series: [{
                type: 'wordCloud',
                shape: "circle",
                gridSize: 3,
                sizeRange: [12, 40],
                rotationRange: [-45, 0, 45, 30, 90],
                maskImage: maskImage,
                drawOutOfBound: false,
                textStyle: {
                    //词云文本的设置
                    color: function () {
                        return 'rgb(' + [
                            Math.round(Math.random() * 255),
                            Math.round(Math.random() * 255),
                            Math.round(Math.random() * 255)
                        ].join(',') + ')';
                    }
                },
                data: data.value
            }]
        }
        wordCloud.setOption(wordCloudOption);





        let elNum = data.value.length; //获取词云元素的总个数
        wordCloud.on("click", function (params) {
            console.log(params);

        })

        //下面是一些鼠标悬浮或点击事件的功能设计
    }



    //右侧搜索引擎部分功能
    //通过鼠标的移入移除来对历史标签的有无进行显示
    //下面为演示代码
    function killGrandFather(e) {
        e.closest(".history").remove();
    } //1s后移除
    function createNewHistory(content) {
        console.log("新的结点来辣！")   
        var newhistory = '<div class="history">';
        newhistory += '<div class="history-wrap">';
        newhistory += ('<span data-value="' + content + '">' + content + '</span>');
        newhistory += '<svg t="1651471844319" id="close" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="55801" width="200" height="200"><path d="M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128zM512 832c-179.2 0-320-140.8-320-320s140.8-320 320-320 320 140.8 320 320S691.2 832 512 832z" p-id="55802" fill="#bfbfbf"></path><path d="M672 352c-12.8-12.8-32-12.8-44.8 0L512 467.2 396.8 352C384 339.2 364.8 339.2 352 352S339.2 384 352 396.8L467.2 512 352 627.2c-12.8 12.8-12.8 32 0 44.8s32 12.8 44.8 0L512 556.8l115.2 115.2c12.8 12.8 32 12.8 44.8 0s12.8-32 0-44.8L556.8 512l115.2-115.2C684.8 384 684.8 364.8 672 352z" p-id="55803" fill="#2c2c2c"></path></svg>';
        newhistory += '</div></div>';

        $(".history-list div:first").before(newhistory);

        $(".history-list div:first").bind("mouseover", function () {
                $(this).css({
                    "width": "6.5vw",
                    "margin-right": "0.5vw"
                })
            })
            .bind("mouseout", function () {
                $(this).css({
                    "width": "5vw",
                    "margin-right": "1vw"
                })
            })
        $(".history-list div:first #close").click(function () {
            //解绑事件防止删除过程异常
            var THIS = $(this);
            THIS.closest(".history").unbind(); //给其曾祖父节点解绑
            THIS.closest(".history").css({
                "background-color": "",
                "width": "0",
                "margin": "0",
                "padding": "0"
            });
            setTimeout(function () {
                killGrandFather(THIS)
            }, 500);
        })
        //给新添加的节点绑定事件
    }
    createNewHistory("和平");
    createNewHistory("自由");
    createNewHistory("中欧班列");





    //下方政策相关滚动
    let navList = document.querySelector(".nav-list");
    navList.innerHTML += navList.innerHTML; //复制一份
    let left = 0;

    function autoSwitch() {
        const width = parseInt($("body").css("width"));
        left -=2;
        if (left <= (-1 * (width) * 0.85)) {
            left = 0;
        }
        $(".nav-list").css("left", left + "px");
    }

    var autoTimmer = setInterval(autoSwitch, 20);

    $(".nav-container").bind("mouseover", function () {
        clearInterval(autoTimmer);
    })
    $(".nav-container").bind("mouseout", function () {
        autoTimmer = setInterval(autoSwitch, 20);
    })

}