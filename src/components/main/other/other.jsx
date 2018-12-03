/* jshint esversion: 6 */
import React from 'react';
import './other.scss'       

class Other extends React.Component{
    render(){
        return(
            <div className='other'>
                <div className="reward">
                    <p>打赏</p>
                    <div ></div>
                </div>
                <div className='contact'>
                    <p>联系方式</p>
                    <pre>
                    {`QQ:478671803

                    邮箱:z8957276@gmail.com
                    
                    github:z8957276@gmail.com`}
                    </pre>
                </div>
                <div className='origin'>
                    <p>github源码</p>
                    <pre>
                        {`github.com/JianGeNB/blog`}
                    </pre>
                </div>
                <div className='thank'>
                <p>鸣谢</p>
                </div>
            </div>
        )
    }
}
export default Other;