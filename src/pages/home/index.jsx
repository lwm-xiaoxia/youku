import React from 'react';
import {Route, NavLink, Redirect, Switch } from "react-router-dom";
import homeLists from './data.js';
import HeadBar from '../../components/headBar';

class Home extends React.Component {
    state = {
        routers: homeLists,
        headBarParm: homeLists,
    }
    render() {
        const {match, history} = this.props;
        const routers = this.state.routers.map(route =>  (
            <Route key={route.path} path={route.path} component={route.component}></Route>
        ))
        return (
            <React.Fragment>
                <HeadBar headBarParm={this.state.headBarParm} history={history}></HeadBar>
                <p className="home">home</p>
                <Switch>
                    {routers}
                    <Redirect to={match.path + "/choice"}></Redirect>
                </Switch>
            </React.Fragment>
        )
    }
}

export default Home;