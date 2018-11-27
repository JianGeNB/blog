/* jshint esversion: 6 */
import React from 'react';
import { Carousel } from 'antd';
import './home.scss'

const CarouselList = [
    {

    }, {}, {}, {}
]
class Home extends React.Component {
    render() {
        return (
            <div>
                <Carousel autoplay>
                    {CarouselList.map((item, index) => (
                        <div key={index}>
                            <img style={{ width: '100%', height: '100%' }} src={require(`./images/${index + 1}.jpg`)} alt="" />
                        </div>
                    ))}
                </Carousel>
                <h1 style={{width:'30%',margin:'auto',color:"white"}}>还没想好放些什么</h1>
            </div>
        )
    }
}
export default Home;