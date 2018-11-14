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
                    <p>我是一个已经从事前端编程行业半年的码农，业余爱好就是写写博客,学习一些新知识。</p>

                </div>
            </div>
        )
    }
}
export default Self;