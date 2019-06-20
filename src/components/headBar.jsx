import React from 'react';
import {NavLink} from "react-router-dom";
import { platform } from 'os';

class TitleBtnBox extends React.Component {
    constructor(props) {
        super(props);
        this.TitleBtnBoxNode = React.createRef();
    }
    positionF = () => {
        this.props.positionLine({target: this.TitleBtnBoxNode.current});
    }
    render() {
        return (
            <NavLink to={this.props.list.path} 
            className="titleBtn-box"
            data-path={this.props.list.path} 
            onClick={this.positionF}
            >
                <span className="text" ref={this.TitleBtnBoxNode}>{this.props.list.title}</span>
                <span className="icon"></span>
            </NavLink>
        )
    }
}
class HeadBar extends React.Component {
    state = {
        titleLists: this.props.headBarParm,
        isSortBtn: true,
        lineStyle: {
            left: '',
            width: ''
        }
    }
    //获取激活的navLink节点
    activeNode = (nodes, path) => nodes.find(node => node.getAttribute('data-path') === path)
    //定位指示线动态位置
    positionLine = ({target, nodes = []}, path) => {
        let targetNode = target;
        if(!target) {
            !nodes.length && console.error('nodes为空');
            !path && console.error('path为空');
            targetNode = this.activeNode(nodes, path);
        }
        if(window.$COM.isEl(targetNode)) {
            const left = targetNode.offsetLeft + 'px';
            const width = targetNode.offsetWidth + 'px';
            this.setState(() => {
                return {
                    lineStyle: {left, width}
                }
            })
        }        
    }
    componentDidMount() {
        let navLinkNodes = [...document.querySelectorAll('.titleBtn-box')];        
        const {history} = this.props;
        //初始定位指示线位置
        const nowPath = history.location.pathname;
        this.positionLine({nodes: navLinkNodes}, nowPath);
        //监听路由变化定位指示线动态位置
        history.listen(location => {
            this.positionLine({nodes: navLinkNodes}, location.pathname)
        });

    }
    handleSort = () => {
        const action = window.$actionFn.isChannelAction(true);
        window.$store.dispatch(action);
    }
    render() {
        const titleLists = this.state.titleLists.map(listValue => {
            return (
               <TitleBtnBox 
               list={listValue} 
               key={listValue.path} 
               positionLine={this.positionLine} 
               />
            )
        })
        return (
            <header className="headBar">
                {titleLists}
                {
                this.state.isSortBtn && 
                <a className="sortBtn" onClick={this.handleSort}>
                    <i className="iconfont iconfenleisvg"></i>
                </a>
                }
                <span className="header-line" 
                ref={el => this.line = el}
                style={this.state.lineStyle}></span>
            </header>
        );
    }
}

export default HeadBar;