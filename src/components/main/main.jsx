/* jshint esversion: 6 */
import React from 'react';
import Nav from './Nav/nav';
import Details from './details/details';
import Other from './other/other'
import { BrowserRouter } from 'react-router-dom';

class Main extends React.Component {
    render() {

        return (
            <div style={{ height: '100%' }}>
                <BrowserRouter>
                    <div style={{ height: '100%' }}>
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