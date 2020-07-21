import React, {useState} from 'react';
import {close_icon} from "../assets/icons";

function Banner() {

    const [hidden, setHidden] = useState(false);

    return (
        <div className={`banner-top ${hidden ? "hidden" : ""}`}>
            <div className="bannerText">Enjoy your discounts! Create an account <a> here</a></div>
            <div className="close-icon" onClick={() => setHidden(true)}>
                {close_icon}
            </div>
        </div>
    );
}

export default Banner;
