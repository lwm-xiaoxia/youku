import React from 'react';
import {Route, NavLink, Redirect, Switch } from "react-router-dom";
import HeadBar from '../../components/headBar';
import hotLists from './data';

class Hot extends React.Component {
    state = {
        routers: hotLists,
        headBarParm: hotLists,
    }
    componentWillMount() {
        const {history} = this.props;
        window.$ReactHistory = history
    }
    render() {
        const {match, history} = this.props;
        const routers = this.state.routers.map(route =>  (
            <Route key={route.path} path={route.path} component={route.component}></Route>
        ))
        return (
            <React.Fragment>
                <HeadBar headBarParm={this.state.headBarParm} history={history}></HeadBar>
                <p className="home">hot</p>
                <Switch>
                    {routers}
                    <Redirect to={match.path + "/recommend"}></Redirect>
                </Switch>
            </React.Fragment>
        )
    }
}

export default Hot;