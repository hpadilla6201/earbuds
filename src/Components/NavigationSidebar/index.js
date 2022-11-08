import React from "react";
import { Link, useLocation } from "react-router-dom";
const NavigationSidebar = () => {
    let location = useLocation();
    let active = location.pathname;
    return (
        <div className="list-group">
        <a className="list-group-item" href="index.js">New Music</a>
        <Link to="/home" className={`list-group-item ${active === '/home'?'active':''}`}>
            <span>Charts</span>
        </Link>
        <Link to="/tuiter" className={`list-group-item ${active === '/tuiter'?'active':''}`}>
            <span>Hip-Hop</span>
        </Link>
        <a className={`list-group-item ${active === 'notifications'?'active':''}`} href="./index.js">
            <span>R&B</span>
        </a>
        <a className={`list-group-item ${active === 'messages'?'active':''}`} href="./index.js">
            <span>Pop</span>
        </a>
        <a className={`list-group-item ${active === 'bookmarks'?'active':''}`} href="./index.js">
            <span>Classical</span>
        </a>
        <a className={`list-group-item ${active === 'lists'?'active':''}`} href="./index.js">
            <span>Alternative</span>
        </a>
        <a className={`list-group-item ${active === 'profile'?'active':''}`} href="./index.js">
            <span>More</span>
        </a>
    </div>
    );  
}

export default NavigationSidebar;