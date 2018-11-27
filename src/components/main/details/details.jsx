/* jshint esversion: 6 */
import React from 'react';
import {Switch,Route}from 'react-router-dom';
import Home from '../../home/home';
import Self from '../../self/self';
import Toc from '../../notes/toc/toc';
import Soup from '../../soup/soup';
import Comment from '../../comment/comment';
import './details.scss';

export const navList = [
    {
        key:'/home',
        title:'首页',
        icon:'./home.png',
        component:Home
    },{
        key:'/Notes',
        title:'笔记',
        icon:'./study.png',
        component:Toc
    },{
        key:'/checkenSoup',
        title:'鸡汤',
        icon:'./soup.png',
        component:Soup
    },
    {
        key:'/self',
        title:'个人',
        icon:'./self.png',
        component:Self
    },{
        key:'/comment',
        title:'留言',
        icon:'./liuyan.png',
        component:Comment
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