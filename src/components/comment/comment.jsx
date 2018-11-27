import React from 'react';
import '../self/self.scss';
import './comment.scss';
import axios from 'axios';
import {withRouter}from 'react-router-dom';
import { List, Input, Button, Avatar,message} from 'antd';
import { connect } from 'react-redux';
import { allCommit } from '../../redux/comment';


const { TextArea } = Input;
let i;
@withRouter

@connect(
    state => state.commentReducer,
    { allCommit }
)
class Comment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comment:'',
            allCommit:[]
        }
        this.click = this.click.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.close = this.close.bind(this)
    }
    componentWillMount() {
        this.props.allCommit();
        this.setState(
            {allCommit:this.props.cdata}
        )
    }
    handleChange(e){
        this.setState({
            comment:e.target.value
        })
    }
    close(){
        this.setState({
            comment:''
        })
        this.setState({
            allCommit:[...this.state.allCommit,{info:i}]
        })
        
    }
    click(){
        i =this.state.comment;
        axios.post('/add',{info:i}).then(rdata=>{
            if(rdata.data.code===0){
                message.success('评论成功',1,this.close);
            
            }else{
                message.error('评论失败');
            }
        })
    }
    render() {
        const comment = this.state.comment;
        const dataArr =[];
        for(let i = this.state.allCommit.length-1;i>=0;i--){
            dataArr.push(this.state.allCommit[i])
        }
        return (
            <div className='content'>
                <h1 className='title'>留言板</h1>
                <div>
                    <TextArea rows={4} placeholder='留言区' value={comment}
                    onChange={this.handleChange}
                    />
                    <Button type="primary" className='submit' onClick={this.click}>提交</Button>
                </div>
                <div style={{ marginTop:'1rem' }}>
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: (page) => {
                                // console.log(page);
                            },
                            pageSize: 5,
                        }}
                        dataSource={dataArr}
                        renderItem={item => (
                            <List.Item style={{color:'white'}}>
                                <List.Item.Meta
                                    avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
                                />
                                {item.info}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }
}

export default Comment