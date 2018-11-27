import axios from 'axios';

const SUCCESS = 'SUCCESS',
      FAil = 'FAIL';
const initState = {
    cdata:[]
}
export function commentReducer(state = initState,action){
    switch(action.type){
        case SUCCESS:return {...state,cdata:action.payload};
        default: return state;
    }
}
function successAction(data){
    return {type:SUCCESS,payload:data}
}
function failAction(data){
    return {type:FAil,payload:data}
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
