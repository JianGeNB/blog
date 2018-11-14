/* jshint esversion: 6 */
import React from 'react';
import {Switch,Route}from 'react-router-dom';
import Home from '../../home/home';
import Self from '../../self/self';
import './details.scss';

export const navList = [
    {
        key:'/home',
        title:'首页',
        icon:'./home.png',
        component:Home
    },
    {
        key:'/self',
        title:'个人',
        icon:'./self.png',
        component:Self
    }
]
class Details extends React.Component{
    render(){
        return(
            <div className="details">
                
                <Switch>
                    {navList.map((item,index)=>{
                        return <Route path={item.key} key={index} component={item.component}/>
                    })
                    }
                </Switch>
                
            </div>
        )
    }
}
export default Details;