import axios from 'axios';
import {message}from 'antd'
const SUCCESS = 'SUCCESS',
      FAil = 'FAIL',
      ADDSUCCESS='ADDSUCCESS',
      ADDFAIL='ADDFAIL'
const initState = {
    cdata:[],
}
export function commentReducer(state = initState,action){
    switch(action.type){
        case SUCCESS:return {cdata:action.payload};
        case ADDSUCCESS:return {cdata:[...state.cdata,{info:action.payload,time:action.time}]};
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
function successAdd(data,date){
    return {type:ADDSUCCESS,payload:data,time:date}
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
    let date = foramor(new Date());
    return async (dispatch)=>{
        //async/await形式
        let rdata = await axios.post('/add',{info:data,time:date})
        if(rdata.status===200&&rdata.data.code===0){
            //let i = getState()

            message.success('评论成功',1)
            dispatch(successAdd(data,date))
        }else{
            message.error('评论失败',1)
            dispatch(failAdd())
        }
        //promise
        // axios.post('/add',{info:data,time:date}).then(rdata=>{
        //     if(rdata.status===200&&rdata.data.code===0){
        //         //let i = getState()

        //         message.success('评论成功',1)
        //         dispatch(successAdd(data,date))
        //     }else{
        //         message.error('评论失败',1)
        //         dispatch(failAdd())
        //     }

        // })
    }
}
function foramor(date){
    let y = date.getFullYear();
    let month=change(date.getMonth()+1);
  let day=change(date.getDate());
  let hour=change(date.getHours());
  let minute=change(date.getMinutes());
  let second=change(date.getSeconds());
  function change(t){
    if(t<10){
     return "0"+t;
    }else{
     return t;
    }
  }
  let time=y+'-'+month+'-'+day+' '+hour+':'+minute+':'+second;
  return time
}