// /* jshint esversion: 6 */
import React from 'react';
import './nav.scss';
import {navList}from '../details/details';
import {Link,withRouter}from 'react-router-dom';
import QueueAnim from 'rc-queue-anim'
@withRouter
class Nav extends React.Component {
    constructor(props){
        super(props);
         this.onClick = this.onClick.bind(this);
    }
    onClick(key){

    }
    render() {
        let color = this.props.location.pathname.split('/')[0]+this.props.location.pathname.split('/')[1];
        return (
            <div className='nav'>
                <div className='Avatar'></div>
                <QueueAnim delay={300} type='left' className='navList'>
                {navList.map((item,index)=>{
                        
                        return <div className='navLink' key={index} 
                                style={color===item.key.split('/')[0]+item.key.split('/')[1]?{backgroundImage:'url('+require('./huo.png')+')',backgroundRepeat:'no-repeat',backgroundPositionX:'1rem'}:null}>
                                <p style={{backgroundImage:'url('+require(`${item.icon}`)+')'}}></p>
                                <Link to={item.key} title={item.title}>{item.title}</Link>
                                </div>
                    
                })}
                </QueueAnim>
                <div style={{textAlign:'center'}}>
                <a href="http://www.miitbeian.gov.cn/" target='blank'>蒙ICP备18005689号</a>
                </div>
            
                {/* <div className='navList'>
                    {navList.map((item,index)=>{
                        
                            return <div className='navLink' key={index} 
                                    style={color===item.key.split('/')[0]+item.key.split('/')[1]?{backgroundImage:'url('+require('./huo.png')+')',backgroundRepeat:'no-repeat',backgroundPositionX:'1rem'}:null}>
                                    <p style={{backgroundImage:'url('+require(`${item.icon}`)+')'}}></p>
                                    <Link to={item.key} title={item.title}>{item.title}</Link>
                                    </div>
                        
                    })}
                </div> */}
            </div>

        )
    }
}
export default Nav