import React from 'react';
import {NavLink} from "react-router-dom";

class BottomBar extends React.Component {
    state = {
        btnParams: [
            {id: 0, className: 'iconshouye', text: '首页', path: '/home'},
            {id: 1, className: 'iconredian', text: '热点', path: '/hot'},
            {id: 2, className: 'iconhuiyuan', text: '会员', path: '/member'},
            {id: 3, className: 'iconxingqiu', text: '星球', path: '/star'},
            {id: 4, className: 'iconwode', text: '我的', path: '/user'},
        ]
    }
    render() {
        const btns = this.state.btnParams.map(btn => {
            return (  
                <NavLink to={btn.path} key={btn.id} className="bar-btn-box">
                    <i className={`iconfont ${btn.className}`}></i>
                    <span className="text">{btn.text}</span>
                </NavLink> 
            );
        })
        return (
            <div className="bottom-bar">
               {btns}
            </div>
        );
    }
}

export default BottomBar;