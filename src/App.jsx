import React from 'react';
import { Route, NavLink, Redirect, Switch } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import Home from './pages/home/index.jsx';
import User from './pages/user/user.jsx';
import BottomBar from './components/bottomBar';
import HeadBar from './components/headBar';
import {Channel, ChannelMark} from './components/channel';

class App extends React.Component {
    state = {
        isChannel: false,
    }
    isChannelFn = isShow => {
        this.setState((prevState, props) => {
            return {isChannel: isShow}
        })   
    }
    render() {
        return (
            <React.Fragment>
                <HeadBar isChannelFn={this.isChannelFn}></HeadBar>
                {/* 侧滑栏遮罩层 */}
                <CSSTransition
                in={this.state.isChannel}
                classNames="mark"
                timeout={300}
                unmountOnExit
                >
                    <ChannelMark isChannelFn={this.isChannelFn}></ChannelMark>
                </CSSTransition>
                {/* 侧滑栏 */}
                <CSSTransition
                in={this.state.isChannel}
                classNames="channel"
                timeout={300}
                unmountOnExit
                >
                    <Channel isChannelFn={this.isChannelFn}></Channel>
                </CSSTransition>
                
                
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
    }
}


export default App;