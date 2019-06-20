import React from 'react';
import {NavLink} from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import {isChannelAction} from '../store/actionCreators.js';

//每个分类小组件
export class ClassifyBox extends React.Component {
    componentWillMount() {
        const {color, text, icon, path, isChannelFn} = this.props.opations;
        this.color = color;
        this.text = text;
        this.icon = icon;
        this.path = path;
    }
    handleClassifyBox = () => {
        const action = window.$actionFn.isChannelAction(false);
        window.$store.dispatch(action);
    }
    render() {
        return (
            <NavLink className="ClassifyBox"
                to={this.path}
                style={{backgroundColor: this.color}}
                onClick={this.handleClassifyBox}>
                <span className="text">{this.text}</span>
                <i className={`iconfont ${this.icon}`}></i>
            </NavLink>
        )    
    }
}

//侧滑栏组件
export class ChannelBox extends React.Component {
    state = {
        isManage: false,  //是否进入管理状态
    }
    //响应是否进入管理状态
    manageState = state => {
        if(state) {
            this.setState(() => {
                return {isManage: true}
            })
        }
        else {
            this.setState(() => {
                return {isManage: false}
            })
        }
    }
    handleManage = () => {
        this.manageState(true);
    }
    handleFinish = () => {
        this.manageState(false);
    }
    handleCancel = () => {
        this.manageState(false);
    }
    componentWillMount() {
        this.opations = {
            color: 'rgb(10, 182, 203)',
            text: '精选',
            path: '/home/choice',
            icon: 'iconbofang',
        }
    }
    render() {
        return (
            <div className="channel">
                <div className="channel-header">
                    <span className="cancel"
                    onClick={this.handleCancel}
                    style={{opacity: this.state.isManage ? 1 : 0}}
                    >取消
                    </span>
                    <span className="title">频道</span>
                    {
                    !this.state.isManage ?
                    <span className="administration" 
                    onClick={this.handleManage}
                    >管理
                    </span> :
                    <span className="finish" 
                    onClick={this.handleFinish}
                    >完成
                    </span>
                    }
                </div>

                <div className="channel-list">
                    <h3 className="channel-list-title">
                        <span className="text">常用频道</span>
                        {this.state.isManage && <span className="tip">长按拖动排序</span>}
                    </h3>
                    <div className="channel-list-body">
                        <ClassifyBox opations={this.opations}/>
                    </div>
                </div>
            </div> 
        )
    }
}


//遮罩层组件
export const ChannelMark = props => {
    const isChannelAction = window.$actionFn.isChannelAction;
    return (
        <div className="channel-mark" 
        onClick={e => {window.$store.dispatch(isChannelAction(false))}}
        >
        </div>
    )
}

//侧滑栏主组件
export class Channel extends React.Component {
    state = {
        isChannel: window.$store.getState().isChannel, //侧滑栏是否显示
    }
    constructor(props) {
        super(props);
        window.$store.subscribe(this.isChannelFn)  //监听store变化  更改isChannel
    }
    isChannelFn = () => {
        this.setState(() => ({
            isChannel: window.$store.getState().isChannel
        }))
    }
    render() {
        return (
            <React.Fragment>
                {/* 侧滑栏遮罩层 */}
                <CSSTransition
                in={this.state.isChannel}
                classNames="mark"
                timeout={300}
                unmountOnExit
                >
                    <ChannelMark></ChannelMark>
                </CSSTransition>
                
                {/* 侧滑栏 */}
                <CSSTransition
                in={this.state.isChannel}
                classNames="channel"
                timeout={300}
                unmountOnExit
                >
                    <ChannelBox isChannelFn={this.isChannelFn}></ChannelBox>
                </CSSTransition>
            </React.Fragment>
         )
    }
}
