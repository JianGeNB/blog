import React from 'react';

export default function BaseHOC(Component) {
    class NewCom extends React.Component{
        constructor(props){
            super(props)
            this.state={}
            this.handleChange= this.handleChange.bind(this)
        }
        handleChange(key, value) {
            this.setState({
                [key]: value
            })
        }
        render(){
            return (
                <Component handleChange={this.handleChange} state={this.state} setState={this.setState}{...this.props}></Component>
            )
        }
    }
    return NewCom
}