import React from 'react';
import { Route, NavLink, Redirect, Switch } from "react-router-dom";
import Home from './pages/home/index.jsx';
import User from './pages/user/user.jsx';
import Hot from './pages/hot/index';
import Star from './pages/star/index';
import BottomBar from './components/bottomBar';
// import HeadBar from './components/headBar';
import {Channel} from './components/channel';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* <HeadBar></HeadBar> */}
                <Channel></Channel>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/user" component={User}></Route>
                    <Route path="/member" component={Home}></Route>
                    <Route path="/star" component={Star}></Route>
                    <Route path="/hot" component={Hot}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
            <BottomBar/>
            </React.Fragment>
        )
    }
}


export default App;