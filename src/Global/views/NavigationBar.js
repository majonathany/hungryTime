import React from "react";
import hungryTimeIcon from "../assets/hungryTimeIcon.png";


const {avatar_icon, notificationOffIcon, notificationOnIcon} = require("../assets/icons");

function NavigationBar() {
    return (
        <div className="navigation-bar">
            <div className="hungry-time-icon">
                <img src={hungryTimeIcon}/>
            </div>
            <div className="dashboard-link">
                <a href> My Dashboard</a>
            </div>
            <div className="search-link">
                <a href> Search</a>
            </div>
            <div className="alerts-icon">
                {notificationOnIcon}
            </div>
            <div className="user-icon">
                <a>{avatar_icon}</a>
            </div>
        </div>
    );
}




export default NavigationBar;
