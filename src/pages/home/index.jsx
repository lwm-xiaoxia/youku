import React from 'react';
import {Route, NavLink, Redirect, Switch } from "react-router-dom";
import homeLists from './data.js';

class Home extends React.Component {
    state = {
        routers: homeLists
    }
    constructor(props) {
        super(props);
    }
    componentWillMount() {
    }
    render() {
        const {match, history} = this.props;
        const routers = this.state.routers.map(route =>  <Route key={route.id} path={route.path} component={route.component}></Route>)
        return (
            <React.Fragment>
                <p style={{'margin-top': '1rem'}}>home</p>
                <Switch>
                    {routers}
                    <Redirect to={match.path + "/choice"}></Redirect>
                </Switch>
            </React.Fragment>
        )
    }
}

export default Home;