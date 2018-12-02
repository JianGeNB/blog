/* jshint esversion: 6 */
import React from 'react';
import './self.scss';
class Self extends React.Component{
    render(){
        return(
            <div className='content'>
                <h1 className='title'>关于我</h1>
                <div>
                    <h2>自我介绍</h2>
                    <p><span>网名:渐歌</span><span>出生日期:1996年12月16日</span></p>
                    <p>年龄:22</p>
                    <p>QQ:478671803</p>
                    <p>星座:射手</p>
                    <p>目前从事5个月的前端开发工作</p>

                </div>
            </div>
        )
    }
}
export default Self;