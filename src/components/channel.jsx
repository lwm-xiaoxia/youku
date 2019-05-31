import React from 'react';
import {NavLink} from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

export class ClassifyBox extends React.Component {
    componentWillMount() {
        const {color, text, icon, path, isChannelFn} = this.props.opations;
        this.color = color;
        this.text = text;
        this.icon = icon;
        this.path = path;
        this.isChannelFn = isChannelFn;
    }
    render() {
        return (
            <NavLink className="ClassifyBox"
                to={this.path}
                style={{backgroundColor: this.color}}
                onClick={e => this.isChannelFn(false)}>
                <span className="text">{this.text}</span>
                <i className={`iconfont ${this.icon}`}></i>
            </NavLink>
        )    
    }
}

export class Channel extends React.Component {
    state = {
        isCancel: {opacity: 0},
        isAdmini: true,
        isTip: false,
        isShow: true,
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
            judgeChannel: this.judgeChannel
        }
    }
    render() {
        return (
            <div className="channel">
                <div className="channel-header">
                    <span className="cancel"
                        onClick={this.handleCancel}
                        style={{opacity: this.state.isManage ? 1 : 0}}>取消
                        </span>
                    <span className="title">频道</span>
                    {
                    !this.state.isManage ?
                    <span className="administration" 
                    onClick={this.handleManage}>管理
                    </span> :
                    <span className="finish" 
                    onClick={this.handleFinish}>完成
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



export const ChannelMark = props => {
    return (
        <div className="channel-mark" 
        onClick={e => {props.isChannelFn(false)}}>
        </div>
    )
}