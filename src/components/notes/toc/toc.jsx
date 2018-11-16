/* jshint esversion: 6 */
import React from 'react';
import '../../self/self.scss';
import StudyReact from '../reactstudy/reactstudy'
import { Link, Switch, Route } from 'react-router-dom';
export const TocLists = [{
    title: 'React学习笔记',
    key: '/Notes/reactstudy',
    component: StudyReact
}]
class Toc extends React.Component {
    render() {
        let show = this.props.location.pathname === '/Notes' ? 'block' : 'none'
        return (
            <div className='content'>
                <div style={{ display: show }}>
                    <h1 className='title'>学习笔记</h1>
                    <div>
                        <h2>目录</h2>
                        {TocLists.map((item, index) => (
                            <p key={index}><Link to={item.key}>{index + 1}.{item.title}</Link></p>
                        ))}
                    </div>
                </div>
                <div>
                    <Switch>
                        {[{ title: '目录', key: '/Notes/toc', component: Toc }, ...TocLists].map((item, index) => {
                            return <Route path={item.key} key={index} component={item.component} />
                        })}
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Toc;