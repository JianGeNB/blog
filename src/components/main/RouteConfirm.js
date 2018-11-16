import React from 'react';
import{withRouter}from 'react-router-dom';

@withRouter
class RouteConfirm extends React.Component{
    componentDidMount(){
            if(this.props.match.path==='/'){
                this.props.history.push('/home')}
            
        
    }
    render (){
        return(
            <div></div>
        )
    }
}
export default RouteConfirm