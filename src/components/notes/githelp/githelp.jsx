/* jshint esversion: 6 */
import React from 'react';
import '../../self/self.scss'

class GitHelp extends React.Component {
    render() {
        return (
            <div className='content'>
                <h1 className='title' style={{ borderBottom: '1px solid' }}>git使用整理</h1>
                <div>
                    <p>1.第一次上传步骤</p>
                        <pre>
                            {`进入自己的项目根目录下
                            1)git init(初始化,多处一个.git的文件夹，显示隐藏文件才能看到)
                            2)git add .(准备所有要上传的文件)
                            3)git commit -m "first commit"(引号内填写备注)
                            4)git remote add origin https://自己的仓库url地址
                            5)git push -u origin master(开始上传)

                        `}
                        </pre>                  
                    
                    2.更新:
                        <pre>
                        {`1)git add * (添加所有文件，会检查变动的文件)
                        2)git commit -m ""(引号内填写备注)
                        3)git push -u origin master(开始上传)
                        4)git push -f (如果在github上改动了文件才执行)
                        `}
                        </pre>
                        3.拉取:
                        <pre>
                        {`git pull
                        `}
                        </pre>
                    
                </div>
            </div>
        )
    }
}

export default GitHelp;