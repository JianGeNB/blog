/* jshint esversion: 6 */
import React from 'react';
import '../self/self.scss';
import './soup.scss';
import {connect}from 'react-redux';
import {allSoup}from '../../redux/soupredux'

@connect(
    state => state.soupReducer,
    {allSoup}
)
class Soup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'soupList' : []
        }
    }
    componentDidMount(){
        this.props.allSoup()
    }
    render(){
        
        return(
            <div className='content'>
                <h1 className='title' style={{borderBottom:'1px solid'}}>心灵鸡汤</h1>
                <div>
                    
                        {this.props.data==='获取数据失败'?console.error(this.props.data):this.props.data.map((item,index)=>(
                            <div key={index}className='soupLi'><p>{item.context}</p><div style={{backgroundImage:'url('+require(`./images/${index}.jpg`)+')'}}></div></div>
                        ))}
                    
                </div>
            </div>
        )
    }
}
export default Soup;