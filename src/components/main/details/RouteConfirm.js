import React from 'react';
import{withRouter}from 'react-router-dom';

@withRouter
class RouteConfirm extends React.Component{
    componentDidMount(){
            if(this.props.match.path==='/notes'){
                this.props.history.push('/notes/toc')}
            
        
    }
    render (){
        return(
            <div></div>
        )
    }
}
export default RouteConfirm