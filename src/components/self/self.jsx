/* jshint esversion: 6 */
import React from 'react';
import './self.scss';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
class Self extends React.Component{
    componentDidMount(){
        let skillChart = echarts.init(document.getElementById('skill'));
        // 绘制图表
        skillChart.setOption({
            title: { 
                text: '技能饼图',
                textStyle:{
                    color:'white'
                }
            },
            tooltip: {
                formatter(params) {
                    let tooltip = `<div>`
                    let q = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>`
                    tooltip += q +params.name;
                    tooltip +=`</div>`
                    return tooltip
                }
            },
            legend:{
                textStyle:{
                    color:'white'
                },
                bottom:0,
                data:['HTML','CSS/SCSS','JavaScript/Jquery','React全家桶','Vue全家桶','Express/Koa2']
            },
            series:[
                {
                    type: 'pie',
                    radius : '65%',
                    center: ['50%', '50%'],
                    selectedMode: 'single',
                    data:[
                        {value:1,name: 'HTML',itemStyle:{
                            color:'#FFDE40'
                        }},
                        {value:1, name: 'CSS/SCSS',itemStyle:{
                            color:'#FFE773'
                        }},
                        {value:1, name: 'JavaScript/Jquery',itemStyle:{
                            color:'#BFBF30'
                        }},
                        {value:1, name: 'React全家桶',itemStyle:{
                            color:'#A6A600'
                        }},
                        {value:1, name: 'Vue全家桶',itemStyle:{
                            color:'#412C84'
                        }},
                        {value:1,name:'Express/Koa2',itemStyle:{
                            color:'#200772'
                        }}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 100,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
                    
        });
    }
    render(){
        return(
            <div className='content'>
                <h1 className='title'>关于我</h1>
                <div className='introduce'>
                    <h2>基础介绍</h2>
                    <p><span>网名:渐歌</span><span>出生日期:1996年12月16日</span></p>
                    <p><span>年龄:22</span><span>星座:射手</span></p>
                    <h2>兴趣爱好</h2>
                    <p><span>运动:</span><span>工作:前端技术</span></p>
                    <p><span>歌手:较多</span><span></span></p>
                    <h2>个人简介</h2>
                    <div>内蒙人,毕业于江苏无锡江南大学,菜鸡一个,目前从事5个月的前端开发工作</div>
                    <h2>技能展示</h2>
                    <div id='skill' style={{width:'100%',height:'28rem'}}></div>
                </div>
            </div>
        )
    }
}
export default Self;