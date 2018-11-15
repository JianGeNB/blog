/* jshint esversion: 6 */
import React from 'react';
import './nav.scss';
import {navList}from '../details/details';
import {Link}from 'react-router-dom';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        this.props.history.push('/Notes/toc')
    }
    render() {
        return (
            <div className='nav'>
                <div className='Avatar'></div>
                <div className='navList'>
                    {navList.map((item,index)=>{
                        if(item.title==='笔记'){
                            return <div className='navLink' key={index}>
                                    <p style={{backgroundImage:'url('+require(`${item.icon}`)+')'}} onClick={this.onClick}></p>
                                    <Link to={item.key} title={item.title}>{item.title}</Link>
                                    </div>
                        }else{
                            return <div className='navLink' key={index}>
                            <p style={{backgroundImage:'url('+require(`${item.icon}`)+')'}}></p>
                            <Link to={item.key} title={item.title}>{item.title}</Link>
                            </div>
                        }
                    })}
                </div>
            </div>

        )
    }
}
export default Nav