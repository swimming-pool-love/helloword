/*
 * @Author: your name
 * @Date: 2022-05-02 16:35:49
 * @LastEditTime: 2022-05-02 19:14:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Uncle-Cao的git本地库\计算机设计大赛\js\partFour.js
 */
$(document).ready(function () {
    let myCharts = echarts.init(document.querySelector(".echart"))

    function Tashkent() {
        /**
         * 塔什干
         */
        let symbolSizeSetting = 65; //图标大小
        var middle_table =
            'image://data:image/png;base64,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'; //表

        var task_scheduling =
            'image://data:image/png;base64,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'; //任务调度

        var server =
            'image://data:image/png;base64,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'; //前置服务器

        let labelTwo = {
            //文字2
            normal: {
                position: 'bottom',
                show: true,
                distance: 2,
                textStyle: {
                    fontSize: 15,
                    color: '#fff',
                    fontWeight: '500',
                    fontFamily: 'microsoftYaHei',
                },
            },
        };
        let labelThree = {
            //文字3
            normal: {
                // position: 'bottom',
                show: true,
                textStyle: {
                    fontSize: 20,
                    color: '#fff',
                    fontFamily: 'microsoftYaHei',
                },
            },
        };
        let labelFour = {
            //文字4
            normal: {
                show: true,
                textStyle: {
                    fontSize: 15,
                    color: '#ff5722',
                    fontFamily: 'microsoftYaHei',
                },
            },
        };
        let lineColorOne = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                // color: '#58B3CC',
                color: '#29c6cd',
            },
            {
                offset: 1,
                // color: '#F58158',
                color: '#29c6cd',
            },
        ]);
        let dataList = [{
                name: '教育碰撞',
                symbol: middle_table,
                symbolSize: symbolSizeSetting,
                draggable: false,
                fixed: true,
                value: [0, 280],
                label: labelTwo,
            },
            {
                name: '文化碰撞',
                symbol: middle_table,
                symbolSize: symbolSizeSetting,
                draggable: false,
                fixed: true,
                value: [150, 280],
                label: labelTwo,
            },
            {
                name: '科技碰撞',
                symbol: middle_table,
                symbolSize: symbolSizeSetting,
                draggable: false,
                fixed: true,
                value: [300, 280],
                label: labelTwo,
            },
            {
                name: '中塔交流',
                value: [150, 140],
                draggable: false,
                symbol: task_scheduling,
                symbolSize: 90,
                label: labelThree,
            },
            //节点B,C,D ....n
            {
                name: '共建艺术展览',
                symbol: server,
                symbolSize: symbolSizeSetting,
                draggable: false,
                value: [0, 20],
                label: labelFour,
            },
            {
                name: '成立孔子学院 ',
                URL: "https://news.lzu.edu.cn/c/201512/37702.html",
                symbol: server,
                symbolSize: symbolSizeSetting,
                draggable: false,
                value: [100, 20],
                label: labelFour,
            },
            {
                name: '修复古城古迹',
                symbol: server,
                symbolSize: symbolSizeSetting,
                draggable: false,
                value: [200, 20],
                label: labelFour,
            },
            {
                name: '共促丝路电商',
                symbol: server,
                symbolSize: symbolSizeSetting,
                draggable: false,
                value: [300, 20],
                label: labelFour,
            },
        ];

        var option = {
            grid: {
                left: '15%',
                right: '15%',
                top: '10%',
                bottom: '10%',
            },
            textStyle: {
                color: '#f00',
                fontSize: 16,
                fontWeight: 600,
            },
            animationDuration: 1500,
            animationEasingUpdate: 'quinticInOut',
            xAxis: {
                show: false,
                type: 'value',
            },
            yAxis: {
                show: false,
                type: 'value',
            },
            series: [{
                    type: 'graph',
                    coordinateSystem: 'cartesian2d',
                    legendHoverLink: false,
                    hoverAnimation: true,
                    nodeScaleRatio: false,
                    roam: false,
                    lineStyle: {
                        //去掉自带的那条线，不要删
                        normal: {
                            width: 0,
                            shadowColor: 'none',
                            color: 'transparent',
                        },
                    },
                    data: [{
                            name: '教育碰撞',
                            symbol: middle_table,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            fixed: true,
                            value: [0, 280],
                            label: labelTwo,
                        },
                        {
                            name: '文化碰撞',
                            symbol: middle_table,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            fixed: true,
                            value: [150, 280],
                            label: labelTwo,
                        },
                        {
                            name: '科技碰撞',
                            symbol: middle_table,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            fixed: true,
                            value: [300, 280],
                            label: labelTwo,
                        },
                        {
                            name: '中塔交流',
                            value: [150, 140],
                            draggable: false,
                            symbol: task_scheduling,
                            symbolSize: 90,
                            label: labelThree,
                        },
                        //节点B,C,D ....n
                        {
                            name: '共建艺术展览',
                            symbol: server,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            value: [0, 20],
                            label: labelFour,
                        },
                        {
                            name: '成立孔子学院 ',
                            url: "https://news.lzu.edu.cn/c/201512/37702.html",
                            symbol: server,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            value: [100, 20],
                            label: labelFour,
                        },
                        {
                            name: '修复古城古迹',
                            symbol: server,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            value: [200, 20],
                            label: labelFour,
                        },
                        {
                            name: '共促丝路电商',
                            symbol: server,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            value: [300, 20],
                            label: labelFour,
                        },
                    ]
                },
                {
                    type: 'lines', //大数据到块1,2,...n
                    coordinateSystem: 'cartesian2d',
                    z: 1,
                    effect: {
                        show: true,
                        smooth: true,
                        trailLength: 0,
                        symbol: 'arrow',
                        color: '#ff5722',
                        symbolSize: 15,
                        period: 5,
                        loop: true,
                    },
                    lineStyle: {
                        normal: {
                            curveness: 0,
                            color: lineColorOne,
                            width: 5,
                        },
                    },
                    data: [{
                            coords: [
                                [0, 240],
                                [130, 160]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,

                            },
                        },
                        {
                            coords: [
                                [150, 240],
                                [150, 170]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                        {
                            coords: [
                                [300, 240],
                                [170, 160]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                    ],
                },
                {
                    type: 'lines', //块1,2...n到节点A,B...N
                    coordinateSystem: 'cartesian2d',
                    // animationDelay: 10000,
                    z: 1,
                    effect: {
                        show: true,
                        smooth: true,
                        trailLength: 0,
                        symbol: 'arrow',
                        color: '#ff5722',
                        symbolSize: 15,
                        period: 5,
                        loop: true,
                    },
                    lineStyle: {
                        normal: {
                            curveness: 0,
                            color: lineColorOne,
                            width: 5,
                        },
                    },
                    data: [{
                            coords: [
                                [130, 120],
                                [0, 45]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                        {
                            coords: [
                                [140, 110],
                                [100, 45]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                        {
                            coords: [
                                [160, 110],
                                [200, 45]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                        {
                            coords: [
                                [170, 120],
                                [300, 45]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                    ],
                },
            ],
        };

        return option;
    }

    function Bukhara() {
        /**
         * 布哈拉
         */
        var nodes = [{
                x: 500,
                y: 1100,
                nodeName: '中布交流',
                svgPath: 'M544 552.325V800a32 32 0 0 1-32 32 31.375 31.375 0 0 1-32-32V552.325L256 423.037a32 32 0 0 1-11.525-43.512A31.363 31.363 0 0 1 288 368l224 128 222.075-128a31.363 31.363 0 0 1 43.525 11.525 31.988 31.988 0 0 1-11.525 43.513L544 551.038z m0 0,M64 256v512l448 256 448-256V256L512 0z m832 480L512 960 128 736V288L512 64l384 224z m0 0',
                symbolSize: 70,

            }, {
                x: 100,
                y: 500,
                nodeName: '古代丝路印记',
                color: "white",
                svgPath: 'M1172.985723 682.049233l-97.748643-35.516964a32.583215 32.583215 0 0 0-21.830134 61.582735l25.7398 9.123221-488.744218 238.181638L115.670112 741.349163l47.245961-19.223356a32.583215 32.583215 0 0 0-22.808051-60.604819l-119.579777 47.896905a32.583215 32.583215 0 0 0 0 59.952875l557.820313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.527227-278.584184a32.583215 32.583215 0 0 0-3.258721-59.952875z,M1185.041693 482.966252l-191.587622-68.749123a32.583215 32.583215 0 1 0-21.831133 61.254764l118.927833 43.010323-488.744218 237.855666-471.474695-213.744727 116.973-47.244961a32.583215 32.583215 0 1 0-24.111938-60.604819l-190.609705 75.593537a32.583215 32.583215 0 0 0-20.528246 29.650465 32.583215 32.583215 0 0 0 20.528246 30.30141l557.819313 251.866468a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0 18.24744-30.953354 32.583215 32.583215 0 0 0-21.505161-29.651465z,M32.583215 290.075742l557.819313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0-3.257721-59.952875L626.244463 2.042365a32.583215 32.583215 0 0 0-23.134022 0l-570.527226 228.080502a32.583215 32.583215 0 0 0-19.224357 30.627382 32.583215 32.583215 0 0 0 19.224357 29.325493zM615.817355 67.534767l474.733416 170.408432-488.744218 238.180638-471.474695-215.372588z'
            },
            {
                x: 500,
                y: 500,
                nodeName: '中布文化碰撞',
                svgPath: 'M1172.985723 682.049233l-97.748643-35.516964a32.583215 32.583215 0 0 0-21.830134 61.582735l25.7398 9.123221-488.744218 238.181638L115.670112 741.349163l47.245961-19.223356a32.583215 32.583215 0 0 0-22.808051-60.604819l-119.579777 47.896905a32.583215 32.583215 0 0 0 0 59.952875l557.820313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.527227-278.584184a32.583215 32.583215 0 0 0-3.258721-59.952875z,M1185.041693 482.966252l-191.587622-68.749123a32.583215 32.583215 0 1 0-21.831133 61.254764l118.927833 43.010323-488.744218 237.855666-471.474695-213.744727 116.973-47.244961a32.583215 32.583215 0 1 0-24.111938-60.604819l-190.609705 75.593537a32.583215 32.583215 0 0 0-20.528246 29.650465 32.583215 32.583215 0 0 0 20.528246 30.30141l557.819313 251.866468a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0 18.24744-30.953354 32.583215 32.583215 0 0 0-21.505161-29.651465z,M32.583215 290.075742l557.819313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0-3.257721-59.952875L626.244463 2.042365a32.583215 32.583215 0 0 0-23.134022 0l-570.527226 228.080502a32.583215 32.583215 0 0 0-19.224357 30.627382 32.583215 32.583215 0 0 0 19.224357 29.325493zM615.817355 67.534767l474.733416 170.408432-488.744218 238.180638-471.474695-215.372588z'
            },
            {
                x: 900,
                y: 500,
                nodeName: '中布合作新时代',
                svgPath: 'M1172.985723 682.049233l-97.748643-35.516964a32.583215 32.583215 0 0 0-21.830134 61.582735l25.7398 9.123221-488.744218 238.181638L115.670112 741.349163l47.245961-19.223356a32.583215 32.583215 0 0 0-22.808051-60.604819l-119.579777 47.896905a32.583215 32.583215 0 0 0 0 59.952875l557.820313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.527227-278.584184a32.583215 32.583215 0 0 0-3.258721-59.952875z,M1185.041693 482.966252l-191.587622-68.749123a32.583215 32.583215 0 1 0-21.831133 61.254764l118.927833 43.010323-488.744218 237.855666-471.474695-213.744727 116.973-47.244961a32.583215 32.583215 0 1 0-24.111938-60.604819l-190.609705 75.593537a32.583215 32.583215 0 0 0-20.528246 29.650465 32.583215 32.583215 0 0 0 20.528246 30.30141l557.819313 251.866468a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0 18.24744-30.953354 32.583215 32.583215 0 0 0-21.505161-29.651465z,M32.583215 290.075742l557.819313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0-3.257721-59.952875L626.244463 2.042365a32.583215 32.583215 0 0 0-23.134022 0l-570.527226 228.080502a32.583215 32.583215 0 0 0-19.224357 30.627382 32.583215 32.583215 0 0 0 19.224357 29.325493zM615.817355 67.534767l474.733416 170.408432-488.744218 238.180638-471.474695-215.372588z'
            },
            {
                x: 0,
                y: 100,
                nodeName: '中布千年之缘',
                svgPath: 'M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z',
            },
            {
                x: 200,
                y: 100,
                nodeName: '丝路活化石',
                svgPath: 'M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z',
            },
            {
                x: 500,
                y: 100,
                nodeName: '丝路文化交流',
                svgPath: 'M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z',
            },
            {
                x: 800,
                y: 100,
                nodeName: '战略合作协议',
                svgPath: 'M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z',
            },
            {
                x: 1000,
                y: 100,
                nodeName: '能源续航',
                svgPath: 'M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z',
            },
        ]
        var charts = {
            nodes: [],
            linesData: [{
                    coords: [
                        [500, 1500],
                        [500, 800],
                    ]
                }, {
                    coords: [
                        [500, 800],
                        [100, 800],
                        [100, 600]

                    ]
                }, {
                    coords: [
                        [500, 800],
                        [500, 600],

                    ]
                }, {
                    coords: [
                        [500, 800],
                        [900, 800],
                        [900, 600]

                    ]
                },
                {
                    coords: [
                        [100, 400],
                        [0, 100]
                    ]
                },
                {
                    coords: [
                        [100, 400],
                        [200, 100]
                    ]
                },
                {
                    coords: [
                        [500, 600],
                        [500, 200]
                    ]

                },
                {
                    coords: [
                        [900, 400],
                        [800, 100]
                    ]
                },
                {
                    coords: [
                        [900, 400],
                        [1000, 100]
                    ]
                }
            ]
        }
        for (var j = 0; j < nodes.length; j++) {
            const {
                x,
                y,
                nodeName,
                svgPath,
                symbolSize
            } = nodes[j];
            var node = {
                nodeName,
                value: [x, y],
                symbolSize: symbolSize || 50,
                symbol: 'path://' + svgPath,
                itemStyle: {
                    color: 'orange',
                }
            }
            charts.nodes.push(node)
        }
        var option = {
            xAxis: {
                min: 0,
                max: 1000,
                show: false,
                type: 'value'
            },
            yAxis: {
                min: 0,
                max: 1000,
                show: false,
                type: 'value'
            },
            series: [{
                    type: 'graph',
                    coordinateSystem: 'cartesian2d',
                    label: {
                        show: true,
                        position: 'bottom',
                        color: 'white',
                        fontSize: '16',
                        formatter: function (item) {
                            return item.data.nodeName
                        }
                    },
                    data: charts.nodes,
                },
                {
                    type: 'lines',
                    polyline: true,
                    coordinateSystem: 'cartesian2d',
                    lineStyle: {
                        type: 'dashed',
                        width: 2,
                        color: '#005691',
                        curveness: 0.3

                    },
                    effect: {
                        show: true,
                        trailLength: 0.1,
                        symbol: 'arrow',
                        color: '#ffc93c',
                        symbolSize: 8
                    },
                    data: charts.linesData
                }
            ]
        };
        return option;


    }

    function Samarkand() {
        /**
         * 撒马尔罕
         */
        let symbolSizeSetting = 65; //图标大小
        var middle_table =
            'image://data:image/png;base64,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'; //表
        var task_scheduling =
            'image://data:image/png;base64,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'; //任务调度
        var server =
            'image://data:image/png;base64,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'; //前置服务器
        let labelTwo = {
            //文字2
            normal: {
                position: 'bottom',
                show: true,
                distance: 2,
                textStyle: {
                    fontSize: 15,
                    color: '#ff5722',
                    fontWeight: '500',
                    fontFamily: 'microsoftYaHei',
                },
            },
        };
        let labelThree = {
            //文字3
            normal: {
                // position: 'bottom',
                show: true,
                textStyle: {
                    fontSize: 20,
                    color: '#ff5722',
                    fontFamily: 'microsoftYaHei',
                },
            },
        };
        let labelFour = {
            //文字4
            normal: {
                show: true,
                textStyle: {
                    fontSize: 15,
                    color: '#ff5722',
                    fontFamily: 'microsoftYaHei',
                },
            },
        };
        let lineColorOne = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                // color: '#58B3CC',
                color: '#7098da',
            },
            {
                offset: 1,
                // color: '#F58158',
                color: '#7098da',
            },
        ]);
        var option = {
            grid: {
                left: '15%',
                right: '15%',
                top: '10%',
                bottom: '10%',
            },
            textStyle: {
                color: '#f00',
                fontSize: 16,
                fontWeight: 600,
            },
            animationDuration: 1500,
            animationEasingUpdate: 'quinticInOut',
            xAxis: {
                show: false,
                type: 'value',
            },
            yAxis: {
                show: false,
                type: 'value',
            },
            series: [{
                    type: 'graph',
                    coordinateSystem: 'cartesian2d',
                    legendHoverLink: false,
                    hoverAnimation: true,
                    nodeScaleRatio: false,
                    roam: false,
                    lineStyle: {
                        //去掉自带的那条线，不要删
                        normal: {
                            width: 0,
                            shadowColor: 'none',
                            color: 'transparent',
                        },
                    },
                    data: [{
                            name: '教育碰撞',
                            symbol: middle_table,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            fixed: true,
                            value: [0, 280],
                            label: labelTwo,
                        },
                        {
                            name: '文化碰撞',
                            symbol: middle_table,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            fixed: true,
                            value: [150, 280],
                            label: labelTwo,
                        },
                        {
                            name: '科技碰撞',
                            symbol: middle_table,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            fixed: true,
                            value: [300, 280],
                            label: labelTwo,
                        },
                        {
                            name: '中撒交流',
                            value: [150, 140],
                            draggable: false,
                            symbol: task_scheduling,
                            symbolSize: 90,
                            label: labelThree,
                        },
                        //节点B,C,D ....n
                        {
                            name: '撒马尔罕孔子学院',
                            symbol: server,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            value: [0, 20],
                            label: labelFour,
                        },
                        {
                            name: '文化旅游综合体建设',
                            symbol: server,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            value: [100, 20],
                            label: labelFour,
                        },
                        {
                            name: '农业综合示范区',
                            symbol: server,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            value: [200, 20],
                            label: labelFour,
                        },
                        {
                            name: '高质量产能合作',
                            symbol: server,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            value: [300, 20],
                            label: labelFour,
                        },
                    ]
                },
                {
                    type: 'lines', //大数据到块1,2,...n
                    coordinateSystem: 'cartesian2d',
                    z: 1,
                    effect: {
                        show: true,
                        smooth: true,
                        trailLength: 0,
                        symbol: 'arrow',
                        color: '#ff5722',
                        symbolSize: 15,
                        period: 5,
                        loop: true,
                    },
                    lineStyle: {
                        normal: {
                            curveness: 0,
                            color: lineColorOne,
                            width: 5,
                        },
                    },
                    data: [{
                            coords: [
                                [0, 240],
                                [130, 160]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                        {
                            coords: [
                                [150, 240],
                                [150, 170]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                        {
                            coords: [
                                [300, 240],
                                [170, 160]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                    ],
                },
                {
                    type: 'lines', //块1,2...n到节点A,B...N
                    coordinateSystem: 'cartesian2d',
                    // animationDelay: 10000,
                    z: 1,
                    effect: {
                        show: true,
                        smooth: true,
                        trailLength: 0,
                        symbol: 'arrow',
                        color: '#ff5722',
                        symbolSize: 15,
                        period: 5,
                        loop: true,
                    },
                    lineStyle: {
                        normal: {
                            curveness: 0,
                            color: lineColorOne,
                            width: 5,
                        },
                    },
                    data: [{
                            coords: [
                                [130, 120],
                                [0, 45]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                        {
                            coords: [
                                [140, 110],
                                [100, 45]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                        {
                            coords: [
                                [160, 110],
                                [200, 45]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                        {
                            coords: [
                                [170, 120],
                                [300, 45]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                    ],
                },
            ],
        };



        return option;
    }

    function LuxorTemple() {
        /**
         * 埃及卢克索神庙
         */
        var nodes = [{
                x: 500,
                y: 1100,
                nodeName: '中埃交流',
                svgPath: 'M544 552.325V800a32 32 0 0 1-32 32 31.375 31.375 0 0 1-32-32V552.325L256 423.037a32 32 0 0 1-11.525-43.512A31.363 31.363 0 0 1 288 368l224 128 222.075-128a31.363 31.363 0 0 1 43.525 11.525 31.988 31.988 0 0 1-11.525 43.513L544 551.038z m0 0,M64 256v512l448 256 448-256V256L512 0z m832 480L512 960 128 736V288L512 64l384 224z m0 0',
                symbolSize: 70,

            }, {
                x: 100,
                y: 500,
                nodeName: '教育合作',
                color: "white",
                svgPath: 'M1172.985723 682.049233l-97.748643-35.516964a32.583215 32.583215 0 0 0-21.830134 61.582735l25.7398 9.123221-488.744218 238.181638L115.670112 741.349163l47.245961-19.223356a32.583215 32.583215 0 0 0-22.808051-60.604819l-119.579777 47.896905a32.583215 32.583215 0 0 0 0 59.952875l557.820313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.527227-278.584184a32.583215 32.583215 0 0 0-3.258721-59.952875z,M1185.041693 482.966252l-191.587622-68.749123a32.583215 32.583215 0 1 0-21.831133 61.254764l118.927833 43.010323-488.744218 237.855666-471.474695-213.744727 116.973-47.244961a32.583215 32.583215 0 1 0-24.111938-60.604819l-190.609705 75.593537a32.583215 32.583215 0 0 0-20.528246 29.650465 32.583215 32.583215 0 0 0 20.528246 30.30141l557.819313 251.866468a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0 18.24744-30.953354 32.583215 32.583215 0 0 0-21.505161-29.651465z,M32.583215 290.075742l557.819313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0-3.257721-59.952875L626.244463 2.042365a32.583215 32.583215 0 0 0-23.134022 0l-570.527226 228.080502a32.583215 32.583215 0 0 0-19.224357 30.627382 32.583215 32.583215 0 0 0 19.224357 29.325493zM615.817355 67.534767l474.733416 170.408432-488.744218 238.180638-471.474695-215.372588z'
            },
            {
                x: 500,
                y: 500,
                nodeName: '产能合作',
                svgPath: 'M1172.985723 682.049233l-97.748643-35.516964a32.583215 32.583215 0 0 0-21.830134 61.582735l25.7398 9.123221-488.744218 238.181638L115.670112 741.349163l47.245961-19.223356a32.583215 32.583215 0 0 0-22.808051-60.604819l-119.579777 47.896905a32.583215 32.583215 0 0 0 0 59.952875l557.820313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.527227-278.584184a32.583215 32.583215 0 0 0-3.258721-59.952875z,M1185.041693 482.966252l-191.587622-68.749123a32.583215 32.583215 0 1 0-21.831133 61.254764l118.927833 43.010323-488.744218 237.855666-471.474695-213.744727 116.973-47.244961a32.583215 32.583215 0 1 0-24.111938-60.604819l-190.609705 75.593537a32.583215 32.583215 0 0 0-20.528246 29.650465 32.583215 32.583215 0 0 0 20.528246 30.30141l557.819313 251.866468a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0 18.24744-30.953354 32.583215 32.583215 0 0 0-21.505161-29.651465z,M32.583215 290.075742l557.819313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0-3.257721-59.952875L626.244463 2.042365a32.583215 32.583215 0 0 0-23.134022 0l-570.527226 228.080502a32.583215 32.583215 0 0 0-19.224357 30.627382 32.583215 32.583215 0 0 0 19.224357 29.325493zM615.817355 67.534767l474.733416 170.408432-488.744218 238.180638-471.474695-215.372588z'
            },
            {
                x: 900,
                y: 500,
                nodeName: '基建工程合作',
                svgPath: 'M1172.985723 682.049233l-97.748643-35.516964a32.583215 32.583215 0 0 0-21.830134 61.582735l25.7398 9.123221-488.744218 238.181638L115.670112 741.349163l47.245961-19.223356a32.583215 32.583215 0 0 0-22.808051-60.604819l-119.579777 47.896905a32.583215 32.583215 0 0 0 0 59.952875l557.820313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.527227-278.584184a32.583215 32.583215 0 0 0-3.258721-59.952875z,M1185.041693 482.966252l-191.587622-68.749123a32.583215 32.583215 0 1 0-21.831133 61.254764l118.927833 43.010323-488.744218 237.855666-471.474695-213.744727 116.973-47.244961a32.583215 32.583215 0 1 0-24.111938-60.604819l-190.609705 75.593537a32.583215 32.583215 0 0 0-20.528246 29.650465 32.583215 32.583215 0 0 0 20.528246 30.30141l557.819313 251.866468a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0 18.24744-30.953354 32.583215 32.583215 0 0 0-21.505161-29.651465z,M32.583215 290.075742l557.819313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0-3.257721-59.952875L626.244463 2.042365a32.583215 32.583215 0 0 0-23.134022 0l-570.527226 228.080502a32.583215 32.583215 0 0 0-19.224357 30.627382 32.583215 32.583215 0 0 0 19.224357 29.325493zM615.817355 67.534767l474.733416 170.408432-488.744218 238.180638-471.474695-215.372588z'
            },
            {
                x: 0,
                y: 100,
                nodeName: '汉语课堂',
                svgPath: 'M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z',
            },
            {
                x: 200,
                y: 100,
                nodeName: '数字教育项目',
                svgPath: 'M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z',
            },
            {
                x: 500,
                y: 100,
                nodeName: '电网升级工程',
                svgPath: 'M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z',
            },
            {
                x: 800,
                y: 100,
                nodeName: '新城综合体建设',
                svgPath: 'M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z',
            },
            {
                x: 1000,
                y: 100,
                nodeName: '轻轨工程',
                svgPath: 'M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z',
            },
        ]
        var charts = {
            nodes: [],
            linesData: [{
                    coords: [
                        [500, 1500],
                        [500, 800],
                    ]
                }, {
                    coords: [
                        [500, 800],
                        [100, 800],
                        [100, 600]

                    ]
                }, {
                    coords: [
                        [500, 800],
                        [500, 600],

                    ]
                }, {
                    coords: [
                        [500, 800],
                        [900, 800],
                        [900, 600]

                    ]
                },
                {
                    coords: [
                        [100, 400],
                        [0, 100]
                    ]
                },
                {
                    coords: [
                        [100, 400],
                        [200, 100]
                    ]
                },
                {
                    coords: [
                        [500, 600],
                        [500, 200]
                    ]

                },
                {
                    coords: [
                        [900, 400],
                        [800, 100]
                    ]
                },
                {
                    coords: [
                        [900, 400],
                        [1000, 100]
                    ]
                }
            ]
        }
        for (var j = 0; j < nodes.length; j++) {
            const {
                x,
                y,
                nodeName,
                svgPath,
                symbolSize
            } = nodes[j];
            var node = {
                nodeName,
                value: [x, y],
                symbolSize: symbolSize || 50,
                symbol: 'path://' + svgPath,
                itemStyle: {
                    color: 'orange',
                }
            }
            charts.nodes.push(node)
        }
        var option = {
            xAxis: {
                min: 0,
                max: 1000,
                show: false,
                type: 'value'
            },
            yAxis: {
                min: 0,
                max: 1000,
                show: false,
                type: 'value'
            },
            series: [{
                    type: 'graph',
                    coordinateSystem: 'cartesian2d',
                    label: {
                        show: true,
                        position: 'bottom',
                        color: '#194769',
                        fontSize: '16',
                        formatter: function (item) {
                            return item.data.nodeName
                        }
                    },
                    data: charts.nodes,
                },
                {
                    type: 'lines',
                    polyline: true,
                    coordinateSystem: 'cartesian2d',
                    lineStyle: {
                        type: 'dashed',
                        width: 2,
                        color: '#005691',
                        curveness: 0.3

                    },
                    effect: {
                        show: true,
                        trailLength: 0.1,
                        symbol: 'arrow',
                        color: '#ffc93c',
                        symbolSize: 8
                    },
                    data: charts.linesData
                }
            ]
        };
        return option;

    }

    function Sentosa() {
        /** 
         * 新加坡圣淘沙
         */
        let symbolSizeSetting = 65; //图标大小
        var middle_table =
            'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2CAYAAAAdp2cRAAAAAXNSR0IArs4c6QAAIABJREFUeF7tfQuUXFWZ7vfvc6qqu6ur0p0HzAQMkK6OEhAIICC+eHZ1zCB4RQS8CkpgBOTeJaAzBh+ogA8ec0UBUS7LMA5wQecyMJiuDgJeFZQhiVEek+7qBKKBAfLqqupHPc7+7/rPrt1V3ekk/ajunNactWpVr6TqnL33V/+//+e3Cfuvv8gVoJk+Kz5rfkOmEDmSWB1OoEMZfBgTDlKgOQDmMCNOxGEGIjJXAvLMVCBCBsA2Dd5GjC0E2sTgV5j0y/Fw/gV67LX+mbw2Mw7Y7NLEYjC/j5hO1sBJACcAUrUFgTVAaQX8lomfAdGvYqvSL9X2GVN7t8AD2700EZkPtHkaZxHQzsDbRixJAeD/JNALmnkjgV5RoM0l4m0RT28dbNSZplApD/y5YL53cHhn0Y3U5VQ876i5LtMcDV7A4EMV0UIGHwnQOwCEq59DwJ8Y6HAUHnsN6Gxdlc5PLTSTu3sggWWAcm0tp7JSnwTzOQBmVabJrxPoKRB+Qx49E93e/SKtQXFyyzD823wcQn2zW49gh08G4z0MPhWgv636VC+IHiGt72vs7HmKAK7l82txr0ABu3PZgmZVCl9GwHIGEuU9URZtHRF+Co9WRVd3r5/uhZQfWt+ZrUfD4aXMOBfAEvm38vjSDNyj3cIPmx7fvKMWoNTiHoEAdscHDzvE1e7VzPxpAI1mYvwqge4Nge+vS/WkazHZWt1jMNmSKIIuZMh46ZDyfXNEdG9JlW5r/vmmV2v1rIneZ58Cu/W0RQdFwnoFM5bbPY3AvyDglmiqp5MAPdGJTcf3GFB9yZY2Bq5l0OnlZ4rFfU++oG6a+2TXlukYx2jP2CfA8kcXh7OZwrUMvo5ADSKeAB5nhRtnrUr/dl8txmSe27s0cRJpXAdgmXhVDO4n0I2xePgWevilsuE2mSeM77vTDuzOZOsZCvr7AL1dACXCz8ijGxtXd/9+fEMP5qdzZ7Yeww5fx4yPGLeZN2iozzalup+YzhFPG7Bvnfn2+WHl3aaA88qGx0tEuDLWkX56Oic8Xc/KtidOYcYdABYLuhp4qKCdq+et3vDadIxhWoDtS7Yu85hXgiDRoBxA34ht7f6nWrsp07Fg43mGuE3Zua2fA/jLvlHI2OYQXRRNdT8+nvtM5LNTCuzzxyG0aF7rTdB8DUjUEj3usr68obPnTxMZ7Ez9Tn9by9tKpO4CeBkYDEW3dr3VveL4Gvvf1eszZcAOnLFwQdFRDwJ4N1gCCLwi1tlz63T7oEH5Mcj2k21ruQagm0AIAXg25Onz65/YuHkqxjglwA60L3pvkfW/AZgt/igrOn+mWru1XnRjPfODZf93e4jU2fUdXb+u9XNqDmwmmTgbjAdAqAfhsZhTuIgCFJGp9QJO5H68bEFz1guvBOMsMAZAuCCeSosg1OyqKbCZ9sQlYPwAgMuEO+Md6auCHmSo2UqO80YS3Mi0J75HjCsAlED4TLwj/b/HeZvdfrxmwGaSiRUAbijf8PpYKv31Wg3yL/k+2WTiKwCuL2cRvhRPpW+qxXxrAmwZ1BsB9ojUlbGO7rtrMbi/lntk21v/nlnfAZAD4LpagDtpYMvq90figxPowlgq/dBfCyC1nGc2mTiPwff7RQOESyerlicFrG8oAT8lwAHR5fsldXJQi+SC+S4GPADnTsagmjCwvkujdadYvwR8df+eOjlQ7bdlz2Xga2Ith5Rqm6grNCFgy8GHdeKnivU7qyN9ZW2mtf8usgK97Yk7ytby9pCnl0wkiDFuYCVM+Pa5iV+yRJTET+1In7PfpantD1JcoWx74hHfzwWe7dqa/sB4w4/jBjbT3nozmK+ViFLMLS7ZH3yoLaj2bn4QoxRa50eoiG6Jd3R/fjxPGhew5SzNY+JQs4P37w8Tjmepx/9ZP/zo4f9JwMchOms8WaExAyv51Ijy/iBF2Ap8bWOq59bxD3X/N8a7ArlkyzUadIsUt+e1c9RY87ljBrY3mXiQgI9J6i2W6pYa38CVXI530WbC5/2sULL1MUn5MfB/ZqXS549l3GMCVspZHHAnA30u8+K/tnzqWBZyKj9j8rn0EgFRD9Q2ljKbvQJrCs/yfzA1SvQP8VT3d6ZyEpO9944zEksch08D6CgCjgAwj4HZBEQYlAW4l4A0E14g0K8bQ30dM6FPJ5Ns/QLA35Yaqlg8ctTeCuT2CmwlDoyXYlvTxwSxnIWXJuI5j69ioksAHDaeH4epJsRDYUU31K1K94znu9P5WVNmk5CCv8VjiSfvEVi/7jfkdTGonginBbHwLJNMLAf4OwA1+wtNbl8oHHuV3Ohbjhvdrpy6PuVE8iDlaS6GoIuRUiHXrEu5ObqYWeCVBg801YQogXFzrJD+Cj2N0nSCNtZnlQvknmTwQLHoLNpT3fIegc22J+5gxhXSXhHrSH90rAOYjs/x4sXh3ILiSmb2jQnHbdgSbjhondsw98/QfqxVis0ZJCW+XDH0iAjMBPI79JRXyjUVs5uXFAs7pRxWiXouet7fzX5iY+90zGO8z8i2Jx6WNhMi3BnbQ8Rvt8BK24XjOV0AQgpqSWOqa/14BzFVn+dT4GbDrQ+B+MNEqhCJHvyrUPTgLjCLpAmoHpg1lNLDQPUlugpYZkmT+a9SfttBA5mNZ4BLjdLw1a+zyb/pfKNvquYw0fvmkouO1tASzi16jrdod+0kuwU22956OzNfBeDf46m0hLYCc2WTLV9n0JeJ1GB909sfdcLNb4K5CKISmA2w8iIywIrUVi4FZlUG2PWBJXLB7Hqlvqb+nS99GLoUA/CjeCp9WWAmXTWQTDIhQaK/I6LbYx3d/3O0MY4KbLnrTarnGlnh3UGKMEmlvSZ+TqIx9U2tj7h182ScxbK0CrAlH2AjtexLrZFUUclWDcu8jbQyuz6wQAjMIV3onde/8+WPMdhRTMnGzu7VQQO33E7yrNRoa7ewYLQuv1GBzSQT/wDgW9IgFUv1nBGkiWWTrT9j8H9zI7N/X998+NO+pAqwBlwrtVYla19qdbm3S/mN7zJn+WNXYE2zcyif6TmhMPDGewE8F0+lTwzS/O1YssmWJ8qNYP8YT6W/PXKMuwDrNx0nE13Sn6rASxtTPR1BmdjO01sXKld3ERQ3zDnmXuXU7QRQAFFhCGArsUYtC7DDjScB1RhOBliRVq2lzldeYRCFoUv1fVvXLNfsRQl8WizV81RQ1sCOI5dsadegVeKTN6bSi0ZGAncBNtvWchoT/cLP3qR6FgYpJWc1iROKvdzQfKTsMwZUeWeWv63kVowoUcWebLnlS4nhWwZWa1HDBlR5ZxaJlVdkoLfr/aXBrScDuDeeSot/HKjLT+0lWzZK9oeYT4919jxZPcBdgM21t/5YM18UxKqIbDLxJAOnhqMH/TwSO3QdmPMgykPrCsCikrUuQSkjsVZq7awFVK0VHMdBNbBGWiM+uEQRL7/jb/t3vHQpAf8VS6WraQoCA7CttlBEKxs7ui/eLbBC5HGgxhsExEPgRUHqJPeD4e2JXjBi0dnHfE85ddug1GAZXAHWACzAKlWE54lVbNyeaqtYgDXgulDKGE0CakVa68As1EGRvree+5yoY83OwqbODZsCg2h5IOXOetk2M28oHFhNeDJMYvuWJs7yNB5lYO2sVPq4IE2ElybmZTXeVOT0ReedICnDQR9MeTeqWKTXqGUDrlHHWjM8T6xjeRE8zwAr1nA1sCKtWkd8qTV/1/Vv//3FXmngMIf5g9HOnlVBWo+KEZVYw8CxjsKHoqvSsj0ZJ6B6sJlk4ocALlWEFY0d6W8GaSJlx/z3ygm/EZ17vPSdCqAisYNQKu8DW9lzjTq2gQqRWAFWa4JSwyVWJLWsfsuSWgfAl9r+HS9c4BWz7yTQ5bFUt3Q4BO7KtSe+qBlSZD7M7x4GbDaZ2Cw8SkrTkqB1mPcmW9oJtMpx69MNs4+5F8CAD6yAKu9a5/2/jdSKKhZ/tqKKRWodxwBbKskea9SwGE1WUuVdQCUSYOsHdrx8dqm482QQVsQD9kMfso7Fr1e8TnioYqn0gl0kVhjPWONFgF+PpXoOCloiPdPWcg6I/q8Tir7Y0HzUfSASYA24RnIrwAq41cCKtBYKQDgMH1TXtaFEYwlXVLCRViOx9YM7Nywt5redQcDXY6n0VwMnroa8g7LJli3CQ0UKR1gGuSGJzba3/D0z/YCA+2Op9MeDNolceyKpGR3Kqd8Qnbvkhz6wWhtgq9WxldpqVSzAVlvF4r96nnF1BFjHCcPzKqAaYBsGev/znFJh5ynEuD7Wmf5a0Nakap/9FwYuJOLPxDp6/PaaIWBzycRKDXyyzAtxZ9AmkT0z8QFWeJqcuo2Nc4+93QfVSG1lr3UcsYxlvy3CdYsoFo1lbIGVPdb6sKGQuDtmf7USa6S13pdYrRsGdrx4fqmUfU/QCwyy7YkrhO9CAfc1ptIXDQM2257YwIxFQdxfZaB9bS3HeUTPKxXaEp33LgmhGYmtBtd1B1EqGZ9WVLHjlKC1huPsXmI9LwKlzIvZgCrvStX3b1v/Ka+YexcYy+OdtWtxrLXQ+PFzxZLx6Yqn0pJ+NBIr1LDZQn0WoFJsa7oxiFUS5cTEdgINNs478fNQqt8H1fMq4FqJ3R2wnkcIhQhaG1VsLWIBVQymKlAF3L6ta67WXn6R0kg2rk531hqQWt2vXF2RA9iNhQdiUurjA9ubXHQCQf+OgPWxVPqYWj2w1vfJJBNvAZgbnX30F5VT/8YQuAJwoZCHSKyo4mpgPU8jEjFZgFKJ4Djiw44OrJVYpepB1JB949nvgPWskKcPmUibRa3nv6f7ZZIt66XOi+GdOCu16Tkf2Exby0Ug+nFQDSc7oUwy8RsAJ9c1HnJbqGH+H31gRR2L8WRVsoBaLBYQDkumx+yxhYJRxfX1QD6vfGkNhyVlZyNOdb4q1rreqmGdz83p37H+fzHQH0ulY0HzEkaCnE0mfAMKzBfHO3tW+sBm2xJfZcL1zHzDrM4e4SQK5JVNttzFoM+4kTn/Kgl2H0xmYQI3wIq0WonVujjqHisSWyqJGjbAhkIS9DdqWIA1fmxDoe+1I/LZTV9kYN2sVPrYQC5I1aB621q+QURfsha8ldgfg+iiwBsJ7Qsv0KzuV07dH6Nzj711VGANyDaNJyHF4ao4HCYfWANuBVgxohyn3geXqGFg+8sfKhW2n0fAPbFU+tKgA5tpS1wCwj1gXhnv7Lm4vMe2rCbQGYqpLYgVA3ZRpWoyHNJ/JqL+xgNOuArk5naR2IkCWyqJOh6S2L631lyrvcFjFOETjR3pnwQd2Fxb65mapKifn5iV6jnTqOJkYi0DSxyFY6Or0mI2B/bKJBMvSm1tuOFtN0fiC57fZY8Vy1hcnj2pYlHDIyXWqmJjQEWzb/7uLkBHXeYFM6HzoW9pYomnsZaAdbFU+tiyxCY2E/C2mWD99SYTXyPgK64bfap+ztF37+LyiBqWfVZ82GKxhIaGivEk7o5VxRIrLhZDcBwTH64yngp9rx2T73v1ywB3xVM9vl8Y9KvcjP4qA3+alUovMHtsMiGU500xTzdRQOtp7cJmk4kjGHgBpLKxucdfDieU9cEtlQaH3B2lzB67O6tYQooCbLVVbH1Y5vr+HX9c7pX62sF8c7yz5wtBB1XGx2csnJV1lJQK7Yyn0s1lVdzSx6CGWHywgR7+s4TpAn3ZrSPccMDtkVjiySFXR9weaxVbYCV1Z/1YkVjJ7lhVLLFiMZpsRgeo87SO9W997m6AZznAcdFUem2gF6M8OP7owfXZTF0/gftjqZ5oWWJbSsIxFIunXXrYr8kN9NWXTCz3gB+Rcjc2zjn+GjiO+LMSmBDJLUD2WVHFElbcU4BCgBUVLOCWI0/5bM/phYE3rwb4D/FUz9GBXoiqwfFH4WQziZJwbcVTPe6MBJaXJiI5jY0MzI/UHfitcHyhkFmbZICAKgEKAdZ1TaxYwK1cji+1hYKAGoLrhiEWsev6MeK+N393u2bvMAe4NJpK3zOjgc0mZ5Yq9i15n82Mf0Ck3qyfveQyxwnL/mKAFTVsMjyVJIBEn8RwKhSMKnZdk2gXaZXsjuvWDWxff3GpkPvvADbF4uF37K1VMUigj66K2xI7QGjy6kvNzY+8IgsU+Iuvh8o+2/JbgN7luNGHG2YfdYcP6sg9ViQ2HDYSa/dYSQKIAVWVtuvPdi3z8jv+URjmlKOWNv48eB0AewJlxzmHNjkD7g4wdsY7h4ynhJjJC2aCu1M9uXK66j9kP6mftejjTsMBm3dJAoxM24kattmdcqLdG3zj0IHMxn9moI4YV8Y604HLR+9N0qy7Q8DmWCp9yLAAhQaOa5ohVqCdaCaZkPqnTym34YHo7KO/64cTbXbHNGZ5w/KxI4ElCvW/9fyXPS9/tiL8pLEj/Ym9LWIQ/39nMnGsAtaMCFCYkKLWSDYFOO842oJm2hNCTf8MkeppnHfix4f22N0l2i2wpsUjhEIhnNux5gHWXutMiLzt7ke188xEm1JIDQspZtpaZkQSYOSkepMHzwbq303gfydSrzcecNI5vrsTCtkGLZMEkAoKedk9Vspj+vulrtivUsxte/77rEvCNPcT5dGt0dzABno2+P589XqMmgSYKWk7AdKhug96QLtivL/6yFHHqfvXhjlLvjlkEVt3p1gUa7ji7ohVLFIrOVmJPhGFiplN78znttzNQnfvX373wCukaT2gn4JWT8Se6H45iCrYjml3abvAJtq57cBoRsU+TMznE+hMHnauK/UROa+TE34+2rz4bjgRCS+aumLZXwsFzwe12o+VfKypLXarKxW94tbDBnNbLtW62ErszWfT+jF0iVECovs8Xbi3qfPVwLV7jJpo700edgLB+V2Qoi2DH1y4qOjRFQySZiN7fqynnLqXHbdxTbiuaa2KzNvkV0+YoL8piRlZ71QdeRKYTHDCFIxbqbUx46H6Yt1QzG8/xBvsXaxLuSO1HjyctW4qoyyNXh0e6RXNqU2BoW8YtTQmSMVs5VaO68E4Ww5hkpIU5UReUW78P8Kxg55Tqn7biL4dE5SQvdUGJmSPFWm1ceKRpTHVdU/VyQAB2BS2mfix1BqXqxeLg//1juLg1pN0MXcUM4cJ7DHwz6ToC7FVaanF2mfXbovZZESZZGIDsO/KT3OnH3agDrnfJuZPSO8nQEU3HFsfqp//jFs3W85jNdX+tjjctnVYSbVlpwKu7K/i5oi0WuPJddkvZrMGlC0aL++zfvG4RKEkxGhjxxZgI8lSMhNBqb9pIPPKaV5h57sY7BJjC5N3QTy16Vf7Ctndlp/KgPZlwXh2acvH2MMPQNREoJIbaV4Tjh36a+XUbR/qga1u47DtHFYFV9cSi7SKq2M67YxFLO/2MoaTcFE4qKszCXcB1fTwmOI2k5u1nXdSCzWsC8/vny3kDshnuz7klQalX6bkEH02uo8OudhLwfj0t3iIZOaSie8y8FlZd9dt2BiJt6xWoZiwwJheHHm3DVe20dn+n+cVyk1ZknutFIlLgt1KbF2dhkirvQYHjfEk+6wAKwCP7Go39U+VDgHpl7VtlibFJ8XlEUDXDWbSpxQHt53kbxmEy6I1PDtnrBrAGk6jtnhMd1OW4bpo/RcGXyDSFW6Y/3Sk8ZA15f5W06k+EsjhABtDSaRV2jnEEi6VTEZHgBU1LKBai9iq4khEitlM0bitWLSGlO3lEam1Ktnssbbbfah3VhqjLcD53MYTi/1vnOrHmUEfidb41Ks9AbzXpiz58nS2UWbbE9cz46tCwFUXa3nUrZ/3yhCYIwG1va/VHXVW/VpJtSpYgBUwlfJ8SZW/QyEjscWiAVXAFckVaRXpDYVM1eJIlSyulZXcanVsJdi+A5HBTPo9xYE332eOEi2+M5p69fWxStxkPmf31922UZYNqGlpfM4vaz08X+T1ILj1sYWPug1/I+SUlc70SqVhRXJtF52o3+oGZ2sJW4PJSmtjo4d8nn1wLbAWXCOpw6W2OpVXLbkjG6MrPBVGJVvAmSMD29efWyr1LwTQEU+ll04GsLF+t4rEdPeNz5aqgIC1sSmkKsgmE3cycHko3PRi3ewjVpet3eHqtxrcaioC66taQK0VLO6NbcKS/VXU8O6AtVKbyxl1PJohVc0kYzvylBLjqrLfVtEaCMi6NNDcv339xcy6fjQml7GCNZ7PZZNjoCqYLnKRTHuiB4yFDbMOf8Cpa94ypIKt5Sv7azX9gOWXMHVM1ZxOJiZsszj2XazgamBHrpSA6bsCZWBtiFHaPmzfrJCPmOoKqWSskI+IhArAZTqDiiFljKqySn4vEX4Z60ifMh6QxvvZMZOL+HOdBjqgTFuiIIfjxg448XaQY5uXjcRWgyssMIaKwNL9VKxfK6m2aM24NMbFsYaTqGGR2pGXNaAEUOnlkXdDv2dJvQRMIfYSn9a4Qq5b6X6vdocMw4xRy35Qo9SY2/r8ZQxdB/LeEe/YJPGBKbmGDl8iWhnfEx2Qb0BNA4FXJpnwFzt2wLtvHaL0MQaSYYKpdmdEQo30VqTV8jjZ1Jyo3mpgxXeVaNNIV6fa5RF1LKUy8urvr6hkW5pqJdcaVIZr0RB8Ve2r1SwzFuDc1rUXs84fMJVpwHETeE0H5V4VsN8ZVQ3b/dWWuVj1K+Aamh/zLh3r1fuqSc1Vok0CpA0nWlAbGkw7pVzWiBIwpW9W0nn5vKk5tnFkUcVCG1TN3Gak07hAFUISn0JI/q1v29pPay9/4FQCO27KvbJ1PKUkmVXAfqsMrFjEu/qu1bxN1q2xwNr9VKRWqAhEaiVFZ8GVdxuYGBgQEE0+Vlop5bISK4EKAdWm8+x+K2rZqOMKu8xwa7kSjRqhjvu2rrlkqoEdN0mmzHmqaW2rgJX8qRhKNg5sjKZqSbWEXCKtooIdZziHkwXYEHQJIaYJH1qQd7e72e52eXdd8W+FTYZQLArQho7PglutlivdAxWJtYkDkVhhdNu29tKpBHbCtLb+Xtve+l1m/h9TQUQ9DNhqY2lvKtgaTJY0xBJ0ua5GqST+qrg4RjotoUg1Y4wFWUhG5JJ3C6wl9xIuKGtICbACcLXklqlvfbdHrGNjJQ+LSOW2rb2Up1AVT5iIWuY8ldTxuwBbCR8a6rxqVlPLQywq2BpNonYtqCKhAqqAK1eFXm/vBz4JmPISMO3fIrXWOrbvssdWuBd9TuMh/kUbNx6KH0+txJYjTdJ2MjHqeCO1U3PYwyh7rFHHhuSyEti3lrAF1LgzFSo9AdO4N8OBlcGPVWKNEVUB1rK3FYtSVF5xgSy4FlT7XqESGoon921bu3yqVPGkD3uQ+UqjcSjkdVGNj2cZAvbAk789JKEj+RAtc/jIfdXS6FmJdRyRWEMNX612R1PBI/dbq5KtWrYAW77FaskVUk2hwrV+bbX7Y8OM5ajUVFnFNTuepWwhrwBwI1C7A5UssI7bIKUt/oEMLBTvUkQmx6qYAxrK77AM4aJazd9kz9WrOsSh+giWiYYD5IQP/2LzLk+Sy/y7uEPm3T8sQlkKevLPVfezdoYyV3uD85l1pJbuTk0PVPLnNgVHoFlgJ7r+M+V7tQS25keg+e5PjQ8tzC1NtM0UcCYzzmjIeZYe3ZCdzD3ku1NyaKEd1P5jRicLz8S+P6XHjMqQ9h8MPDFgJvutTFvLtSC6WRL4eZ6Cg4FlgPuP8p4sTOP7/rQc5W2HlGlvvRnM1/rHt7jFJfT4ZiEm2X/VeAV42YLmbCm0To5fAdEt8Y7uz4/nEbscz7K3Lz9/HEKL5iZ+CUCamB6LdaTPCdLZPHsb/0z4fz8l1554BAw5U/DZrq3pDxy/xm9bGfM1bmDlzuUmWyH6ms2EO2ft4bjLMY9k/weHVqC3PXEHMa4AsD3k6SUTYV6dELA+uO2L3lvUuhOE+iAevjRTfydDVRGMgZBSbfUdXb+eyFwmDKw8LJNMnA3gp2TOiLs8to8q4Scy8SB+RwhTwHwXm2NSz41Poj55UsD64LYnLgHjRxIOJNCFsVT6oSAuWtDHlE0mzmPw/X54knBpfJIdBZMGtiy55Xgye0Tqyv2SO76fkaE20ncIiRqA6+KptByQNKmrJsBWgXtD+YbXx1Lpr09qZH8lX5Y9FcD15eTxl2oBqixdzYCtUstyVJgr1nK8I33Vfldo9F+ouDSZ9sT3ytZvCYTPTFb9Vj+ppsAOGVSMB8Ra9v1cp3DR/iDGcHD94IMXXun7qYwBEC6YjKE02k+n5sAOuUKs/038XIlQsaLzg3TO+77U8qYQjR/0I0rip5I6e6IuzZ7mMSXA2iBGyVEPskSoGEVF/MVoque2oJ+GMVWgS5amL9lytWb6pnRBEPCs6+nzJxJ8GMsYpwxYebgffpzXehM0XyP1BwA97rK+fCZQsY9l8cb6GZNPVXcBvExqQKDo1q63uleMN0w41ufV3Hja3YP9rBB4JYA50h4E0DdiW7v/KYgnco1n8fb2WVPO0vo5gOXIm0YA2xzQRdFU9+N7++5k/39KJbZ6cJLPDSvvNgWcJ2pJaqjKByQK1/Bf3FUuPJMDjBfL9qOBhwrauXre6g2vTcdkpw1YOxkps1HQ3wdIDlFgIvyMWN3QmOoKDGfSZBZe6IyY9JeY8RHjTvIGDfXZplT3E5O573i/O+3AygBNgVzhWgJfJ2cRmPNt8Tgr3DhTredy28V1AJYJoAzuJ9CNsXj4ln1BaL1PgLW/PqlbjoT1CmYs9yvrTW3nLwi4JZrq6Qx6cEOCDH3JljYGrmXQ6eV5FYhwT76gbpr7ZNeW8UparT6/T4G1k5B2Ele71zDzp8pGhgjxqwS6NwS+vy7Vk67VhGtxn3In+YUM/nTZH5Xb5ojo3pIq3db8801COLZPr0AAO7T/LlvQrErhywhYzkCibLaL4bHOIfwUHq2Kru5eP92+sO+Dntl6NBxe6jHOVcCSsgEom2iagXs4nQRvAAABPUlEQVS0W/hhU4DKhAIFrAXYb75uazmVlPqkZj6niiRTJPl1Aj0Fwm/Io2ei27tfrLXbJG5K3+zWI9jhk8F4D4NPlcPtq0SwVxE9wlrf19jZ89R0/9DGogoCCWz1wIXwZD7Q5mmcRUB7NUfx0J4GCJfwi5p5I4FeUaDN5PBWVdTb6oBeNBcKwJ+l4QvAwWHsCIcHgVk6pOawR3M1eAGDD1VEQuUjJ3Edbvd8OxbhUWKgw1F47DWgs3VVWroCA3sFHtiRKycMcmB+HzGdrIGTAE6Y3plaXqL9Ka2A3zLxMyD6VWxV+qVaPmGq7zXjgB25IELJmyk0HknsHU6gQxl8GBMOUqA5GphLQIzAYRaKPONY5hkkR0BnFbBVg7cJgymBNjH4FSbn5Xg494Kccz7Viz+V95/xwE7l4szke/9/XzyElFgzzvcAAAAASUVORK5CYII='; //表
        var task_scheduling =
            'image://data:image/png;base64,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'; //任务调度
        var server =
            'image://data:image/png;base64,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'; //前置服务器
        let labelTwo = {
            //文字2
            normal: {
                position: 'bottom',
                show: true,
                distance: 2,
                textStyle: {
                    fontSize: 15,
                    color: '#ff5722',
                    fontWeight: '500',
                    fontFamily: 'microsoftYaHei',
                },
            },
        };
        let labelThree = {
            //文字3
            normal: {
                // position: 'bottom',
                show: true,
                textStyle: {
                    fontSize: 20,
                    color: '#ff5722',
                    fontFamily: 'microsoftYaHei',
                },
            },
        };
        let labelFour = {
            //文字4
            normal: {
                show: true,
                textStyle: {
                    fontSize: 15,
                    color: '#ff5722',
                    fontFamily: 'microsoftYaHei',
                },
            },
        };
        let lineColorOne = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                // color: '#58B3CC',
                color: '#7098da',
            },
            {
                offset: 1,
                // color: '#F58158',
                color: '#7098da',
            },
        ]);
        var option = {
            grid: {
                left: '15%',
                right: '15%',
                top: '10%',
                bottom: '10%',
            },
            textStyle: {
                color: '#f00',
                fontSize: 16,
                fontWeight: 600,
            },
            animationDuration: 1500,
            animationEasingUpdate: 'quinticInOut',
            xAxis: {
                show: false,
                type: 'value',
            },
            yAxis: {
                show: false,
                type: 'value',
            },
            series: [{
                    type: 'graph',
                    coordinateSystem: 'cartesian2d',
                    legendHoverLink: false,
                    hoverAnimation: true,
                    nodeScaleRatio: false,
                    roam: false,
                    lineStyle: {
                        //去掉自带的那条线，不要删
                        normal: {
                            width: 0,
                            shadowColor: 'none',
                            color: 'transparent',
                        },
                    },
                    data: [{
                            name: '互联互通',
                            symbol: middle_table,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            fixed: true,
                            value: [0, 280],
                            label: labelTwo,
                        },
                        {
                            name: '金融合作',
                            symbol: middle_table,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            fixed: true,
                            value: [150, 280],
                            label: labelTwo,
                        },
                        {
                            name: '市场合作',
                            symbol: middle_table,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            fixed: true,
                            value: [300, 280],
                            label: labelTwo,
                        },
                        {
                            name: '中新交流',
                            value: [150, 140],
                            draggable: false,
                            symbol: task_scheduling,
                            symbolSize: 90,
                            label: labelThree,
                        },
                        //节点B,C,D ....n
                        {
                            name: '互联互通示范性项目',
                            symbol: server,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            value: [0, 20],
                            label: labelFour,
                        },
                        {
                            name: '新加坡亚太交易所',
                            symbol: server,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            value: [100, 20],
                            label: labelFour,
                        },
                        {
                            name: '中资银行',
                            symbol: server,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            value: [200, 20],
                            label: labelFour,
                        },
                        {
                            name: '投资合作论坛',
                            symbol: server,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            value: [300, 20],
                            label: labelFour,
                        },
                    ]
                },
                {
                    type: 'lines', //大数据到块1,2,...n
                    coordinateSystem: 'cartesian2d',
                    z: 1,
                    effect: {
                        show: true,
                        smooth: true,
                        trailLength: 0,
                        symbol: 'arrow',
                        color: '#ff5722',
                        symbolSize: 15,
                        period: 5,
                        loop: true,
                    },
                    lineStyle: {
                        normal: {
                            curveness: 0,
                            color: lineColorOne,
                            width: 5,
                        },
                    },
                    data: [{
                            coords: [
                                [0, 240],
                                [130, 160]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                        {
                            coords: [
                                [150, 240],
                                [150, 170]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                        {
                            coords: [
                                [300, 240],
                                [170, 160]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                    ],
                },
                {
                    type: 'lines', //块1,2...n到节点A,B...N
                    coordinateSystem: 'cartesian2d',
                    // animationDelay: 10000,
                    z: 1,
                    effect: {
                        show: true,
                        smooth: true,
                        trailLength: 0,
                        symbol: 'arrow',
                        color: '#ff5722',
                        symbolSize: 15,
                        period: 5,
                        loop: true,
                    },
                    lineStyle: {
                        normal: {
                            curveness: 0,
                            color: lineColorOne,
                            width: 5,
                        },
                    },
                    data: [{
                            coords: [
                                [130, 120],
                                [0, 45]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                        {
                            coords: [
                                [140, 110],
                                [100, 45]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                        {
                            coords: [
                                [160, 110],
                                [200, 45]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                        {
                            coords: [
                                [170, 120],
                                [300, 45]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                    ],
                },
            ],
        };
        return option;
    }

    function Bangkok() {
        /**
         * 泰国曼谷
         */
        var nodes = [{
                x: 500,
                y: 1100,
                nodeName: '中泰交流',
                svgPath: 'M544 552.325V800a32 32 0 0 1-32 32 31.375 31.375 0 0 1-32-32V552.325L256 423.037a32 32 0 0 1-11.525-43.512A31.363 31.363 0 0 1 288 368l224 128 222.075-128a31.363 31.363 0 0 1 43.525 11.525 31.988 31.988 0 0 1-11.525 43.513L544 551.038z m0 0,M64 256v512l448 256 448-256V256L512 0z m832 480L512 960 128 736V288L512 64l384 224z m0 0',
                symbolSize: 70,

            }, {
                x: 100,
                y: 500,
                nodeName: '文化合作',
                color: "white",
                svgPath: 'M1172.985723 682.049233l-97.748643-35.516964a32.583215 32.583215 0 0 0-21.830134 61.582735l25.7398 9.123221-488.744218 238.181638L115.670112 741.349163l47.245961-19.223356a32.583215 32.583215 0 0 0-22.808051-60.604819l-119.579777 47.896905a32.583215 32.583215 0 0 0 0 59.952875l557.820313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.527227-278.584184a32.583215 32.583215 0 0 0-3.258721-59.952875z,M1185.041693 482.966252l-191.587622-68.749123a32.583215 32.583215 0 1 0-21.831133 61.254764l118.927833 43.010323-488.744218 237.855666-471.474695-213.744727 116.973-47.244961a32.583215 32.583215 0 1 0-24.111938-60.604819l-190.609705 75.593537a32.583215 32.583215 0 0 0-20.528246 29.650465 32.583215 32.583215 0 0 0 20.528246 30.30141l557.819313 251.866468a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0 18.24744-30.953354 32.583215 32.583215 0 0 0-21.505161-29.651465z,M32.583215 290.075742l557.819313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0-3.257721-59.952875L626.244463 2.042365a32.583215 32.583215 0 0 0-23.134022 0l-570.527226 228.080502a32.583215 32.583215 0 0 0-19.224357 30.627382 32.583215 32.583215 0 0 0 19.224357 29.325493zM615.817355 67.534767l474.733416 170.408432-488.744218 238.180638-471.474695-215.372588z'
            },
            {
                x: 500,
                y: 500,
                nodeName: '产能合作',
                svgPath: 'M1172.985723 682.049233l-97.748643-35.516964a32.583215 32.583215 0 0 0-21.830134 61.582735l25.7398 9.123221-488.744218 238.181638L115.670112 741.349163l47.245961-19.223356a32.583215 32.583215 0 0 0-22.808051-60.604819l-119.579777 47.896905a32.583215 32.583215 0 0 0 0 59.952875l557.820313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.527227-278.584184a32.583215 32.583215 0 0 0-3.258721-59.952875z,M1185.041693 482.966252l-191.587622-68.749123a32.583215 32.583215 0 1 0-21.831133 61.254764l118.927833 43.010323-488.744218 237.855666-471.474695-213.744727 116.973-47.244961a32.583215 32.583215 0 1 0-24.111938-60.604819l-190.609705 75.593537a32.583215 32.583215 0 0 0-20.528246 29.650465 32.583215 32.583215 0 0 0 20.528246 30.30141l557.819313 251.866468a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0 18.24744-30.953354 32.583215 32.583215 0 0 0-21.505161-29.651465z,M32.583215 290.075742l557.819313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0-3.257721-59.952875L626.244463 2.042365a32.583215 32.583215 0 0 0-23.134022 0l-570.527226 228.080502a32.583215 32.583215 0 0 0-19.224357 30.627382 32.583215 32.583215 0 0 0 19.224357 29.325493zM615.817355 67.534767l474.733416 170.408432-488.744218 238.180638-471.474695-215.372588z'
            },
            {
                x: 900,
                y: 500,
                nodeName: '基建工程合作',
                svgPath: 'M1172.985723 682.049233l-97.748643-35.516964a32.583215 32.583215 0 0 0-21.830134 61.582735l25.7398 9.123221-488.744218 238.181638L115.670112 741.349163l47.245961-19.223356a32.583215 32.583215 0 0 0-22.808051-60.604819l-119.579777 47.896905a32.583215 32.583215 0 0 0 0 59.952875l557.820313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.527227-278.584184a32.583215 32.583215 0 0 0-3.258721-59.952875z,M1185.041693 482.966252l-191.587622-68.749123a32.583215 32.583215 0 1 0-21.831133 61.254764l118.927833 43.010323-488.744218 237.855666-471.474695-213.744727 116.973-47.244961a32.583215 32.583215 0 1 0-24.111938-60.604819l-190.609705 75.593537a32.583215 32.583215 0 0 0-20.528246 29.650465 32.583215 32.583215 0 0 0 20.528246 30.30141l557.819313 251.866468a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0 18.24744-30.953354 32.583215 32.583215 0 0 0-21.505161-29.651465z,M32.583215 290.075742l557.819313 251.540496a32.583215 32.583215 0 0 0 27.695632 0l570.201254-278.584184a32.583215 32.583215 0 0 0-3.257721-59.952875L626.244463 2.042365a32.583215 32.583215 0 0 0-23.134022 0l-570.527226 228.080502a32.583215 32.583215 0 0 0-19.224357 30.627382 32.583215 32.583215 0 0 0 19.224357 29.325493zM615.817355 67.534767l474.733416 170.408432-488.744218 238.180638-471.474695-215.372588z'
            },
            {
                x: 0,
                y: 100,
                nodeName: '高校留学',
                svgPath: 'M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z',
            },
            {
                x: 200,
                y: 100,
                nodeName: '旅游交往',
                svgPath: 'M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z',
            },
            {
                x: 500,
                y: 100,
                nodeName: '电网联通工程',
                svgPath: 'M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z',
            },
            {
                x: 800,
                y: 100,
                nodeName: '中泰铁路合作',
                svgPath: 'M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z',
            },
            {
                x: 1000,
                y: 100,
                nodeName: '轻轨工程',
                svgPath: 'M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z',
            },
        ]
        var charts = {
            nodes: [],
            linesData: [{
                    coords: [
                        [500, 1500],
                        [500, 800],
                    ]
                }, {
                    coords: [
                        [500, 800],
                        [100, 800],
                        [100, 600]

                    ]
                }, {
                    coords: [
                        [500, 800],
                        [500, 600],

                    ]
                }, {
                    coords: [
                        [500, 800],
                        [900, 800],
                        [900, 600]

                    ]
                },
                {
                    coords: [
                        [100, 400],
                        [0, 100]
                    ]
                },
                {
                    coords: [
                        [100, 400],
                        [200, 100]
                    ]
                },
                {
                    coords: [
                        [500, 600],
                        [500, 200]
                    ]

                },
                {
                    coords: [
                        [900, 400],
                        [800, 100]
                    ]
                },
                {
                    coords: [
                        [900, 400],
                        [1000, 100]
                    ]
                }
            ]
        }
        for (var j = 0; j < nodes.length; j++) {
            const {
                x,
                y,
                nodeName,
                svgPath,
                symbolSize
            } = nodes[j];
            var node = {
                nodeName,
                value: [x, y],
                symbolSize: symbolSize || 50,
                symbol: 'path://' + svgPath,
                itemStyle: {
                    color: 'orange',
                }
            }
            charts.nodes.push(node)
        }
        var option = {
            xAxis: {
                min: 0,
                max: 1000,
                show: false,
                type: 'value'
            },
            yAxis: {
                min: 0,
                max: 1000,
                show: false,
                type: 'value'
            },
            series: [{
                    type: 'graph',
                    coordinateSystem: 'cartesian2d',
                    label: {
                        show: true,
                        position: 'bottom',
                        color: '#194769',
                        fontSize: '16',
                        formatter: function (item) {
                            return item.data.nodeName
                        }
                    },
                    data: charts.nodes,
                },
                {
                    type: 'lines',
                    polyline: true,
                    coordinateSystem: 'cartesian2d',
                    lineStyle: {
                        type: 'dashed',
                        width: 2,
                        color: '#005691',
                        curveness: 0.3

                    },
                    effect: {
                        show: true,
                        trailLength: 0.1,
                        symbol: 'arrow',
                        color: '#ffc93c',
                        symbolSize: 8
                    },
                    data: charts.linesData
                }
            ]
        };
        return option;
    }

    function Athens() {
        /**
         * 希腊雅典
         */
        let symbolSizeSetting = 65; //图标大小
        var middle_table =
            'image://data:image/png;base64,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'; //表
        var task_scheduling =
            'image://data:image/png;base64,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'; //任务调度
        var server =
            'image://data:image/png;base64,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'; //前置服务器
        let labelTwo = {
            //文字2
            normal: {
                position: 'bottom',
                show: true,
                distance: 2,
                textStyle: {
                    fontSize: 15,
                    color: '#ff5722',
                    fontWeight: '500',
                    fontFamily: 'microsoftYaHei',
                },
            },
        };
        let labelThree = {
            //文字3
            normal: {
                // position: 'bottom',
                show: true,
                textStyle: {
                    fontSize: 20,
                    color: '#ff5722',
                    fontFamily: 'microsoftYaHei',
                },
            },
        };
        let labelFour = {
            //文字4
            normal: {
                show: true,
                textStyle: {
                    fontSize: 15,
                    color: '#ff5722',
                    fontFamily: 'microsoftYaHei',
                },
            },
        };
        let lineColorOne = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                // color: '#58B3CC',
                color: '#7098da',
            },
            {
                offset: 1,
                // color: '#F58158',
                color: '#7098da',
            },
        ]);
        var option = {
            grid: {
                left: '15%',
                right: '15%',
                top: '10%',
                bottom: '10%',
            },
            textStyle: {
                color: '#f00',
                fontSize: 16,
                fontWeight: 600,
            },
            animationDuration: 1500,
            animationEasingUpdate: 'quinticInOut',
            xAxis: {
                show: false,
                type: 'value',
            },
            yAxis: {
                show: false,
                type: 'value',
            },
            series: [{
                    type: 'graph',
                    coordinateSystem: 'cartesian2d',
                    legendHoverLink: false,
                    hoverAnimation: true,
                    nodeScaleRatio: false,
                    roam: false,
                    lineStyle: {
                        //去掉自带的那条线，不要删
                        normal: {
                            width: 0,
                            shadowColor: 'none',
                            color: 'transparent',
                        },
                    },
                    data: [{
                            name: '中国梦',
                            symbol: middle_table,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            fixed: true,
                            value: [0, 280],
                            label: labelTwo,
                        },
                        {
                            name: '“一带一路”',
                            symbol: middle_table,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            fixed: true,
                            value: [150, 280],
                            label: labelTwo,
                        },
                        {
                            name: '希腊梦',
                            symbol: middle_table,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            fixed: true,
                            value: [300, 280],
                            label: labelTwo,
                        },
                        {
                            name: '中希交流',
                            value: [150, 140],
                            draggable: false,
                            symbol: task_scheduling,
                            symbolSize: 90,
                            label: labelThree,
                        },
                        //节点B,C,D ....n
                        {
                            name: '中远海运比港项目',
                            symbol: server,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            value: [0, 20],
                            label: labelFour,
                        },
                        {
                            name: '亚欧电网联网',
                            symbol: server,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            value: [100, 20],
                            label: labelFour,
                        },
                        {
                            name: '中希海洋合作',
                            symbol: server,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            value: [200, 20],
                            label: labelFour,
                        },
                        {
                            name: '中希文化产业合作',
                            symbol: server,
                            symbolSize: symbolSizeSetting,
                            draggable: false,
                            value: [300, 20],
                            label: labelFour,
                        },
                    ]
                },
                {
                    type: 'lines', //大数据到块1,2,...n
                    coordinateSystem: 'cartesian2d',
                    z: 1,
                    effect: {
                        show: true,
                        smooth: true,
                        trailLength: 0,
                        symbol: 'arrow',
                        color: '#ff5722',
                        symbolSize: 15,
                        period: 5,
                        loop: true,
                    },
                    lineStyle: {
                        normal: {
                            curveness: 0,
                            color: lineColorOne,
                            width: 5,
                        },
                    },
                    data: [{
                            coords: [
                                [0, 240],
                                [130, 160]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                        {
                            coords: [
                                [150, 240],
                                [150, 170]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                        {
                            coords: [
                                [300, 240],
                                [170, 160]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                    ],
                },
                {
                    type: 'lines', //块1,2...n到节点A,B...N
                    coordinateSystem: 'cartesian2d',
                    // animationDelay: 10000,
                    z: 1,
                    effect: {
                        show: true,
                        smooth: true,
                        trailLength: 0,
                        symbol: 'arrow',
                        color: '#ff5722',
                        symbolSize: 15,
                        period: 5,
                        loop: true,
                    },
                    lineStyle: {
                        normal: {
                            curveness: 0,
                            color: lineColorOne,
                            width: 5,
                        },
                    },
                    data: [{
                            coords: [
                                [130, 120],
                                [0, 45]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                        {
                            coords: [
                                [140, 110],
                                [100, 45]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                        {
                            coords: [
                                [160, 110],
                                [200, 45]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                        {
                            coords: [
                                [170, 120],
                                [300, 45]
                            ],
                            label: {
                                show: true,
                                formatter: function (params) {
                                    console.log(params);
                                    console.log(params.data.coords);
                                    return params.data.coords[2];
                                },
                                color: '#fc3a52',
                                position: 'middle',
                                fontSize: 15,
                            },
                        },
                    ],
                },
            ],
        };
        return option;
    }
    
    


    
    myCharts.setOption(Tashkent(),true)

    window.addEventListener("resize", function () {
        myCharts.resize();
   });






});