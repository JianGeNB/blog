/* jshint esversion: 6 */
import React from 'react';
import './self.scss';
class Self extends React.Component{
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

                </div>
            </div>
        )
    }
}
export default Self;