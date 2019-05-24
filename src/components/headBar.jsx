import React from 'react';
import {NavLink, withRouter} from "react-router-dom";


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
            to={this.props.list.path+`/${this.props.list.id}`} 
            className="titleBtn-box" onClick={this.positionF}
           >
                <span className="text" ref="el">{this.props.list.title}</span>
                <span className="icon"></span>
            </NavLink>
        )
    }
}
class HeadBar extends React.Component {
    state = {
        titleLists: [
            {id: 0, path: `/home/choice`, title: '精选'},
            {id: 1, path: `/home/onePunch`, title: '一拳'},
            {id: 2, path: `/home/year`, title: '70年'},
            {id: 3, path: `/home/hot`, title: '热点'},
            {id: 4, path: `/home/dramaSeries`, title: '剧集'},
            {id: 5, path: `/home/film`, title: '电影'},
            
        ],
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
                <a className="sortBtn">
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