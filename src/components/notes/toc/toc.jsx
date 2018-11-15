/* jshint esversion: 6 */
import React from 'react';
import '../../self/self.scss';
import {TocLists}from '../notes';
import {Link}from 'react-router-dom'
class Toc extends React.Component{
    render(){
        // let show = this.props.match.path==='/Notes/toc'?'block':'none'
        return(
            <div className='content'>
                <h1 className='title'>学习笔记</h1>
                <div>
                    <h2>目录</h2>
                    {TocLists.map((item,index)=>(
                        <p key={index}><Link to={item.key}>{index+1}.{item.title}</Link></p>
                    ))}

                </div>
            </div>
        )
    }
}

export default Toc;