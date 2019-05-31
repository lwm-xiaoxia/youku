import React from 'react';
import {NavLink, withRouter} from "react-router-dom";
import homeLists from '../pages/home/data.js';

class TitleBtnBox extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
       
    }
    positionF = () => {
        this.props.getNavLink(this.refs['el']);
    }
    render() {
        return (
            <NavLink key={this.props.list.id} 
                to={this.props.list.path} 
                className="titleBtn-box" onClick={this.positionF}>
                <span className="text" ref="el">{this.props.list.title}</span>
                <span className="icon"></span>
            </NavLink>
        )
    }
}
class HeadBar extends React.Component {
    state = {
        titleLists: homeLists,
        isSortBtn: true,
        lineStyle: {
            left: ''
        }
    }
    getNavLinkF = el => {
        this.setState({
            lineStyle: {
                left: `${el.offsetLeft}px`
            }
        })
    }
    componentDidMount() {
    }
    clickSort = () => {
        this.props.isChannelFn(true);
    }
    render() {
        const titleLists = this.state.titleLists.map(listValue => {
            return (
               <TitleBtnBox list={listValue} getNavLink={this.getNavLinkF}/>
            )
        })
        return (
            <header className="headBar">
                {titleLists}
                {
                this.state.isSortBtn && 
                <a className="sortBtn" onClick={this.clickSort}>
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