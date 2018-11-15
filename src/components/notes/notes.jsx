/* jshint esversion: 6 */
import React from 'react';
import {Switch,Route}from 'react-router-dom';
import '../self/self.scss';
import Toc from '../notes/toc/toc';
import ReactStudy from '../notes/reactstudy/reactstudy';
export const TocLists = [
    {
        title:'React学习笔记',
        key:'/Notes/reactstudy',
        component:ReactStudy
    }
]

class StudyNotes extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    componentDidMount(){
        
        this.props.history.push('/Notes/toc')
    }
    render(){
        return(
            <div style={{width:'100%',height:'100%'}}>
                <Switch>
                    {[{title:'目录',key:'/Notes/toc',component:Toc},...TocLists].map((item,index)=>{
                        return <Route path={item.key} key={index} component={item.component} />
                    })}
                </Switch>
                
            </div>
        )
    }
}

export default StudyNotes;