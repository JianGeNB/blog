// /* jshint esversion: 6 */
import React from 'react';
import './nav.scss';
import {navList}from '../details/details';
import {Link,withRouter}from 'react-router-dom';
@withRouter
class Nav extends React.Component {
    constructor(props){
        super(props);
         this.onClick = this.onClick.bind(this);
    }
    onClick(key){

    }
    render() {
        let color = this.props.location.pathname;
        return (
            <div className='nav'>
                <div className='Avatar'></div>
                <div className='navList'>
                    {navList.map((item,index)=>{
                        
                            return <div className='navLink' key={index} 
                                    style={color===item.key?{backgroundImage:'url('+require('./huo.png')+')',backgroundRepeat:'no-repeat',backgroundPositionX:'1rem'}:null}>
                                    <p style={{backgroundImage:'url('+require(`${item.icon}`)+')'}}></p>
                                    <Link to={item.key} title={item.title}>{item.title}</Link>
                                    </div>
                        
                    })}
                </div>
            </div>

        )
    }
}
export default Nav