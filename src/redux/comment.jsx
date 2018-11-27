import axios from 'axios';
import {message}from 'antd'
const SUCCESS = 'SUCCESS',
      FAil = 'FAIL',
      ADDSUCCESS='ADDSUCCESS',
      ADDFAIL='ADDFAIL'
const initState = {
    cdata:[]
}
export function commentReducer(state = initState,action){
    switch(action.type){
        case SUCCESS:return {cdata:action.payload};
        case ADDSUCCESS:return {cdata:[...state.cdata,{info:action.payload}]};
        case ADDFAIL:return state;
        default: return state;
    }
}
function successAction(data){
    return {type:SUCCESS,payload:data}
}
function failAction(data){
    return {type:FAil,payload:data}
}
function successAdd(data){
    return {type:ADDSUCCESS,payload:data}
}
function failAdd(){
    return {type:ADDFAIL}
}
export function allCommit(){
    return dispatch=>{
        axios.get('/comment').then(rdata=>{
            if(rdata.status === 200&&rdata.data.code===0){
                dispatch(successAction(rdata.data.commitList))
            }else{
                dispatch(failAction('获取评论失败'))
            }
        })
    }
}
export function addComment(data){
    return dispatch=>{
        axios.post('/add',{info:data}).then(rdata=>{
            if(rdata.status===200&&rdata.data.code===0){
                message.success('评论成功',1)
                dispatch(successAdd(data))
            }else{
                message.error('评论失败',1)
                dispatch(failAdd())
            }

        })
    }
}