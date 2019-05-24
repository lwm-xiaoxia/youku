import React from 'react';
import { Route, NavLink, Redirect, Switch } from "react-router-dom";
import Home from './pages/home/home.jsx';
import User from './pages/user/user.jsx';
import BottomBar from './components/bottomBar';
import HeadBar from './components/headBar';
const App = () => (
        <React.Fragment>
            <HeadBar></HeadBar>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/user" component={User}></Route>
                <Route path="/member" component={Home}></Route>
                <Route path="/star" component={User}></Route>
                <Route path="/hot" component={User}></Route>
                <Redirect to="/home"></Redirect>
            </Switch>
           <BottomBar/>
        </React.Fragment>
    
)

export default App;

//新分支