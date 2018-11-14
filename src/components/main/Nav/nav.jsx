/* jshint esversion: 6 */
import React from 'react';
import './nav.scss';
import {navList}from '../details/details';
import {Link}from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div className='nav'>
                <div className='Avatar'></div>
                <div className='navList'>
                    {navList.map((item,index)=>(
                        <div className='navLink' key={index}>
                        <p style={{backgroundImage:'url('+require(`${item.icon}`)+')'}}></p>
                        <Link to={item.key} title={item.title}>{item.title}</Link>
                        </div>
                    ))}
                </div>
            </div>

        )
    }
}
export default Nav