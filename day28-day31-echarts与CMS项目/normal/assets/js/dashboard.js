// 初始化班级基本数据
axios.get('http://www.itcbc.com:8000/student/overview').then(
    response => {
        const {data} = response.data
        document.querySelector('.total').innerText = data.total
        document.querySelector('.avgSalary').innerText = data.avgSalary
        document.querySelector('.avgAge').innerText = data.avgAge
        document.querySelector('.proportion').innerText = data.proportion
    },
    error => {
        console.log(error.message)
    }
)
// 初始化学生信息
axios.get('http://www.itcbc.com:8000/student/list').then(
    response => {
        if (response.data.code === 0) {
            const data = response.data.data
            // 线型图数据
            const lineData = {name: [], salary: [], trueSalary: []}
            // 饼图数据
            const arr = []
            // 地图数据
            let a = {'百京':[116.4551, 40.2539]}
            let b = []

            data.forEach(item => {
                // 处理线型图数据
                lineData.name.push(item.name)
                lineData.salary.push(item.salary)
                lineData.trueSalary.push(item.truesalary)
                // 处理饼图数据
                const i = arr.findIndex(v => v.name === item.province); // 没有找到则返回 -1
                if (i >= 0) {
                    // 让当前这个省的value++
                    arr[i].value++;
                } else {
                    // 向arr数组中新增一个 { value: 1, name: 省的名字 }
                    arr.push({value: 1, name: item.province});
                }
                // 处理地图数据
                a[item.city] = [item.jing,item.wei]
                b.push([{name:item.city,value:0}])
            })

            lineChart(lineData)
            pieChart(arr)
            mapChart(a,b)
        }
    }
)
// 处理柱状图数据
;(function () {
    const lis = document.querySelectorAll('#batch li')
    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener('click', function () {
            axios.get('http://www.itcbc.com:8000/score/batch', {
                params: {
                    batch: i + 1
                }
            }).then(
                response => {
                    barChart(response.data.data)
                }
            )
        })
    }
    lis[0].click()
})()
// 点击右上角 “三个点” 显示/隐藏下拉菜单
;(function () {
    let flag = false
    document.querySelector('.icon-youcecaidan').addEventListener('click', function () {
        flag = !flag
        if (flag) {
            document.querySelector('#batch').style.display = 'block'
        } else {
            document.querySelector('#batch').style.display = 'none'
        }
    })
})()

// 线型图
function lineChart({name, salary, trueSalary}) {
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
            data: name
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
                data: salary
            },
            {
                name: '实际薪资',
                type: 'line',
                smooth: true,
                symbol: 'none',
                itemStyle: { // 单独控制这条线的颜色
                    color: '#5470c6'
                },
                data: trueSalary
            }
        ]
    };
    myChart.setOption(option)
}

//柱状图
function barChart(data) {
    const myChart = echarts.init(document.querySelector('.barChart'))
    const option = {
        tooltip: {
            trigger: 'axis',
        },
        grid: {
            top: 30,
            left: '7%',
            bottom: 30,
            right: '7%'
        },
        dataset: {
            // source:
        },
        xAxis: {
            type: 'category',
            data: data.group,
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
                data: data.avgScore,
                barWidth: '15'
            },
            {
                type: 'bar',
                name: '不及格',
                data: data.lt60,
                yAxisIndex: 1,
                barWidth: '15'
            },
            {
                type: 'bar',
                name: '60到80分',
                data: data.gt60,
                yAxisIndex: 1,
                barWidth: '15'
            },
            {
                type: 'bar',
                name: '80分以上',
                data: data.gt80,
                yAxisIndex: 1,
                barWidth: '15'
            },
        ]
    }
    myChart.setOption(option)
}

// 饼图
function pieChart(arr) {
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
                data: arr
            }
        ]
    }
    myCharts.setOption(option)
}

//路线图
function mapChart(a,b) {
    const myChart = echarts.init(document.querySelector('.map'))
    let chinaGeoCoordMap = a
    let chinaDatas = b

    let convertData = function (data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
            let dataItem = data[i];
            let fromCoord = chinaGeoCoordMap[dataItem[0].name];
            let toCoord = [116.4551, 40.2539];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord,
                    value: dataItem[0].value
                }, {
                    coord: toCoord,
                }]);
            }
        }
        return res;
    };
    let series = [];
    [['百京', chinaDatas]].forEach(function (item) {
        series.push({
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 5, //图标大小
                },
                lineStyle: {
                    normal: {
                        width: 1, //尾迹线条宽度
                        opacity: 1, //尾迹线条透明度
                        curveness: .3 //尾迹线条曲直度
                    }
                },
                data: convertData(item[1])
            }, {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: { //涟漪特效
                    period: 4, //动画时间，值越小速度越快
                    brushType: 'stroke', //波纹绘制方式 stroke, fill
                    scale: 4 //波纹圆环最大限制，值越大波纹越大
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right', //显示位置
                        offset: [5, 0], //偏移设置
                        formatter: function (params) {//圆环显示文字
                            return params.data.name;
                        },
                        fontSize: 13
                    },
                    emphasis: {
                        show: true
                    }
                },
                symbol: 'circle',
                symbolSize: function (val) {
                    return 5 + val[2] * 5; //圆环大小
                },
                itemStyle: {
                    normal: {
                        show: false,
                        color: '#f00'
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[0].name,
                        value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                    };
                }),
            },
            //被攻击点
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    period: 4,
                    brushType: 'stroke',
                    scale: 4
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        //offset:[5, 0],
                        color: '#0f0',
                        formatter: '{b}',
                        textStyle: {
                            color: "#0f0"
                        }
                    },
                    emphasis: {
                        show: true,
                        color: "#f60"
                    }
                },
                symbol: 'pin',
                symbolSize: 50,
                data: [{
                    name: item[0],
                    value: chinaGeoCoordMap[item[0]].concat([10]),
                }],
            }
        );
    });

    //
    let option = {
        // 标题
        title: {
            // left: 'center',
            text: '来京路线 From',
            textStyle: {
                color: '#6d767e'
            }
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(166, 200, 76, 0.82)',
            borderColor: '#FFFFCC',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: 'z-index:100',
            formatter: function (params) {
                //根据业务自己拓展要显示的内容
                let name = params.name;
                let value = params.value[params.seriesIndex + 1];
                return "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
            }
        },
        backgroundColor: "#fff",
        visualMap: { // 图例值控制（官方叫做视觉映射组件）
            min: 0,
            max: 1,
            calculable: true,
            show: false,
            color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'china',
            zoom: 1.2,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true, //是否允许缩放
            itemStyle: {
                normal: {
                    color: 'rgba(51, 69, 89, .5)', //地图背景色
                    borderColor: '#516a89', //省市边界线00fcff 516a89
                    borderWidth: 1
                },
                emphasis: {
                    color: 'rgba(37, 43, 61, .5)' //悬浮背景
                }
            }
        },
        series: series
    };
    myChart.setOption(option)
}