/* jshint esversion: 6 */
import React from 'react';
import Nav from './Nav/nav';
import Details from './details/details';
import Other from './other/other'
import { BrowserRouter} from 'react-router-dom';
import RouteConfirm from './RouteConfirm.js'

class Main extends React.Component {

    render() {
        // console.log(this.props)
        return (
            <div style={{ height: '100%' }}>
                <BrowserRouter>
                    <div style={{ height: '100%' }}>
                        {/* 使用routerconfirm,当加载"/"时，跳转到home */}
                        <RouteConfirm></RouteConfirm>
                        <Nav></Nav>
                        <Details></Details>
                        <Other></Other>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
export default Main