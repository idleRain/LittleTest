// 线型图
;(function () {
    const myChart = echarts.init(document.querySelector('.line'))
    const option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        legend: {
            top: 10,
        },
        title: {
            left: 'left',
            text: '期望薪资 Salary',
            textStyle: {
                color: '#6d767e'
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['纪三', '纪四', '纪飞', '纪云', '纪狗', '纪三', '纪四', '纪飞', '纪云', '纪狗', '纪三', '纪四', '纪飞', '纪云', '纪狗', '纪三', '纪四', '纪飞', '纪云', '纪狗',]
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '50%']
        },
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 15
            },
            {
                start: 0,
                end: 15
            }
        ],
        series: [
            {
                name: '期望薪资',
                type: 'line',
                smooth: true, // 表示使用平滑曲线
                symbol: 'none', // 线上拐点位置的样式，none表示没有；也可以是实心圆、空心圆、方块.....
                itemStyle: { // 单独控制这条线的颜色
                    color: '#ee6666'
                },
                data: [8300, 9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000]
            },
            {
                name: '实际薪资',
                type: 'line',
                smooth: true,
                symbol: 'none',
                itemStyle: { // 单独控制这条线的颜色
                    color: '#5470c6'
                },
                data: [9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 13000]
            }
        ]
    };
    myChart.setOption(option)
})()

//柱状图
;(function () {
    const myChart = echarts.init(document.querySelector('.barChart'))
    const option = {
        tooltip: {
            trigger: 'axis',
        },
        grid:{
            top:30,
            left:'7%',
            bottom:30,
            right:'7%'
        },
        // title: {
        //     text: '成绩 Score',
        //     textStyle: {
        //         color: '#6d767e'
        //     }
        // },
        dataset: {
            // source:
        },
        xAxis: {
            type: 'category',
            data: ['1组', '2组', '3组', '4组', '5组', '6组', '7组'],
            axisPointer: { // 坐标轴指示器为阴影，配合tooltip中的设置，组成十字准星
                type: 'shadow'
            }
        },
        yAxis: [
            {
                type: 'value',
                // 最大数于最小数
                max: 100,
                min: 0,
                // 间隔值
                interval: 10,
                axisLabel: {
                    formatter: '{value}分'
                }
            },
            {
                type: 'value',
                min: 0,
                max: 10,
                interval: 1,
                axisLabel: {
                    formatter: '{value}人'
                }
            }
        ],
        series: [
            {
                type: 'bar',
                name: '平均分',
                data: [83, 57, 90, 78, 66, 76, 77, 87, 69, 92, 88, 78],
                barWidth: '15'
            },
            {
                type: 'bar',
                name: '不及格',
                data: [2, 1, 3, 4, 2, 5, 2, 2, 4, 1, 6, 2],
                yAxisIndex: 1,
                barWidth: '15'
            },
            {
                type: 'bar',
                name: '60到80分',
                data: [3, 2, 1, 5, 1, 2, 3, 4, 5, 2, 2, 4],
                yAxisIndex: 1,
                barWidth: '15'
            },
            {
                type: 'bar',
                name: '80分以上',
                data: [3, 2, 1, 5, 1, 2, 3, 4, 5, 2, 2, 4],
                yAxisIndex: 1,
                barWidth: '15'
            },
        ]
    }
    myChart.setOption(option)
})()

// 饼图
;(function () {
    const myCharts = echarts.init(document.querySelector('.pie'))
    const option = {
        tooltip: {
            // {a} 表示series中的name
            // {b} 表示数据中的series.data中的name
            // {c} 表示每一项的值
            // {d} 表示百分比
            formatter: '{a} <br />{b} <strong>{c}</strong>人 占比{d}%'
        },
        // 标题
        title: {
            // 标题文字
            text: '籍贯 Hometown',
            // 标题样式
            textStyle: {
                color: '#6d767e'
            }
        },
        series: [
            {
                // 图形名称
                name: '各地人员分布',
                // 类型
                type: 'pie',
                // 半径
                // 第一个数组的值是内部圆的半径
                // 第一个数组的值是外部圆的半径
                radius: ['10%', '65%'],
                // 圆的中心点位置
                center: ['50%', '50%'],
                // roseType: area | radius
                //'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小。
                //'area' 所有扇区圆心角相同，仅通过半径展现数据大小。
                roseType: 'area',
                // 扇区样式
                itemStyle: {
                    borderRadius: 5
                },
                // 数据
                data: [
                    {value: 40, name: '河北'},
                    {value: 20, name: '山东'},
                    {value: 32, name: '河南'},
                    {value: 30, name: '山西'},
                    {value: 28, name: '内蒙古'},
                    {value: 26, name: '辽宁'},
                    {value: 22, name: '吉林'},
                    {value: 18, name: '黑龙江'}
                ]
            }
        ]
    }
    myCharts.setOption(option)
})()
