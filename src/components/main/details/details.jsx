/* jshint esversion: 6 */
import React from 'react';
import {Route,withRouter}from 'react-router-dom';
import Home from '../../home/home';
import Self from '../../self/self';
import Toc from '../../notes/toc/toc';
import Soup from '../../soup/soup';
import Comment from '../../comment/comment';
import './details.scss';
import QueueAnim from 'rc-queue-anim'

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
@withRouter
class Details extends React.Component{
    render(){
        let page = navList.find(v=>v.key===this.props.location.pathname)
        page=page===undefined?navList[1]:page
        return(
            <div className="details">
               
                    <QueueAnim type='scale' duration={1000}>

                    
                    
                         <Route path={page.key} key={page.key} component={page.component}/>
                   
                    </QueueAnim>
                
                
            </div>
        )
    }
}
export default Details;