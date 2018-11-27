import axios from 'axios';

const SUCCESS = 'SOUPSUCCESS';
const FAIL = 'SOUPFAIL';
const initState = {
    data:[]
}
export function soupReducer(state=initState,action){
    switch(action.type){
        case SUCCESS : return{...state,data:action.payload};
        default: return state
    }
}
function successAction(data){
    return {type:SUCCESS,payload:data}
}
function failAction(data){
    return {type:FAIL,payload:data}
}

export function allSoup(){
    return dispatch=>{
        axios.get('/checkenSoup').then((rdata)=>{
            if(rdata.data.code===0){
                dispatch(successAction(rdata.data.soupList))
            }else{
                dispatch(failAction('获取数据失败'))
            }
        })
    }
}