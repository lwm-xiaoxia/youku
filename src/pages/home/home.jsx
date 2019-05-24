import React from 'react';
import {Route, NavLink, Redirect, Switch } from "react-router-dom";
import Year from './year';
import DramaSeries from './dramaSeries';
import Film from './film';
import Hot from './hot';
import OnePunch from './onePunch';
import Choice from './choice';

class Home extends React.Component {
    state = {
        routers: [
            {id: 0, path: '/choice', title: '精选', component: Choice},
            {id: 1, path: '/onePunch', title: '一拳', component: OnePunch},
            {id: 2, path: '/year', title: '70年', component: Year},
            {id: 3, path: '/hot', title: '热点', component: Hot},
            {id: 4, path: '/dramaSeries', title: '剧集', component: DramaSeries},
            {id: 5, path: '/film', title: '电影', component: Film},
        ]
    }
    constructor(props) {
        super(props);
    }
    componentWillMount() {

    }
    render() {
        const {match, history} = this.props;
        const routers = this.state.routers.map(route =>  <Route key={route.id} path={match.path + route.path + '/:id'} component={route.component}></Route>)
        return (
            <React.Fragment>
                <p style={{'margin-top': '1rem'}}>home</p>
                <Switch>
                    {routers}
                    <Redirect to={match.path+'/choice'}></Redirect>
                </Switch>
            </React.Fragment>
        )
    }
}

export default Home;