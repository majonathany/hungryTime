import React, {useEffect, useState} from 'react';

const {sampleFoodIcon, samplePinIcon, filled_star, empty_star, cheap_icon, expensive_icon} = require('../../Global/assets/icons')

function ListEntry(props)
{
    const [distance, setDistance] = useState(null);

    useEffect(() =>
    {
        if (props.query) {
            let distance = props.query.getDistance(props.location)
            setDistance(distance.toFixed(2) + "mi");
        }

    }, [props.query, props.location])

    const generateCost = () => {
        let x = parseInt(props.query.query.price)

        return <div> {x>0?expensive_icon:cheap_icon}
            {x>1?expensive_icon:cheap_icon}
            {x>2?expensive_icon:cheap_icon}
            {x>3?expensive_icon:cheap_icon}
        </div>;
    }

    let formatPhoneNumber = (str) => {
        //Filter only numbers from the input
        let cleaned = ('' + str).replace(/\D/g, '');

        //Check if the input is of correct length
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        };

        return null
    };


    return (
        <div className={`list-entry ${props.isClicked ? 'active':''}`} onClick={() => props.clickedCallback(props.query)}>
            <div className={"icon"}>
                {props.query?.query.image_url ? <img className="list-entry-img" src={props.query.query.image_url}/> : sampleFoodIcon}
            </div>
            <div className={"description"}>
                <div className={"name"}>
                    {props.query?.query.name || "Restaurant Name"}
                </div>
                <div className={"type"}>
                    {`${props.query?.query.city}, ${props.query?.query.state}` || "Restaurant Type"}
                </div>
                <div className={"location"}>
                    <div className={"pin_icon"}>
                        {samplePinIcon}
                    </div>
                    <div className={"distance"}>
                        {distance !== "0.00mi" ? distance : "" || "0.68mi"}
                    </div>
                    <div className={"divider"}> | </div>
                    <div className={"address"}>
                        {props.query?.query.address || "Restaurant Address"}
                    </div>
                </div>
                <div className={"price"}>
                    {generateCost()}
                </div>
            </div>
            <div className={"rating"}>
                {props.query.query.area}
            </div>
            <div className={"actions"}>
                <div className="banner"> Make a Reservation </div>
                <div className="action-button">
                    <div className="phone-icon"></div>
                    <div className="phone">{formatPhoneNumber(props.query?.query.phone) || "123-456-7890"}</div>
                </div>
                <div className="alt-buttons">
                    <a href={props.query?.query.reserve_url}>See Website</a> <span> | </span>
                    <div className="save-action">
                        <div className='save-icon'></div>
                        <div className='save-message'>Save</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListEntry;
