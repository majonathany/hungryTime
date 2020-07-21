import React, {useState, useEffect} from 'react';

import Dropdown from 'react-dropdown';

import {distanceChoices, ratingChoices, priceChoices} from '../../Global/assets/reference';
import SearchQuery from "../models/SearchQuery";

const {search_icon} = require('../../Global/assets/icons');

function SearchBar(props)
{
    //State
    let [name, setName] = useState("");
    let [zip, setZip] = useState("");
    let [cuisine, setCuisine] = useState("");
    let [dietary, setDietary] = useState("");

    let [price, setPrice] = useState(null);
    let [distance, setDistance] = useState(null);

    const handleEnter = (e) =>
    {
        if(e.charCode === 13){
            console.log('value', e.target.value);
            onSearch();
        }
    }

    const onSearch = () =>
    {
        props.clearResults();

        let query = new SearchQuery();
        query.setParameter("name", name);
        query.setParameter("zip", zip);

        //cuisine and dietary not supported

        query.executeQuery().then((response) => {
            props.resultsCallback(response);
        }).catch(e =>
        {
            console.log("Could not search because of " + e);
        })
    }

    const handleTextChange = (event) =>
    {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        if (name === "query-name-input")
        {
            setName(value);
        }
        else if (name === "query-zip-input")
        {
            setZip(value);
        }
        else if (name === "query-cuisine-input")
        {
            setCuisine(value);
        }
        else if (name === "query-dietary-input")
        {
            setDietary(value);
        }
    }

    const handleDropdownChange = (target, dropdown) => {
        const value = target.value;
        const name = dropdown;

        if (name === "query-price-input")
        {
            setPrice(value);
        }
        else if (name === "query-distance-input")
        {
            setDistance(value);
        }
    }


    return (
        <div className="search-bar">
            <div className="top-row">
                <div className="query-name">
                    <span></span>
                    <input name="query-name-input" onKeyPress={handleEnter} onChange={handleTextChange} value={name} type="text" placeholder={"Restaurant Name"}/>
                </div>
                <div className="query-zip">
                    <span></span>
                    <input name="query-zip-input" onKeyPress={handleEnter} onChange={handleTextChange} value={zip} type="text" placeholder={"Zip Code"}/>
                </div>
                <div className="query-cuisine">
                    <span></span>
                    <input name="query-cuisine-input" onKeyPress={handleEnter} onChange={handleTextChange} value={cuisine}  type="text" placeholder={"Cuisine Type"}/>
                </div>
                <div className="query-dietary">
                    <span></span>
                    <input name="query-dietary-input" onKeyPress={handleEnter} onChange={handleTextChange} value={dietary}  type="text" placeholder={"Dietary"}/>
                </div>
                <div className="search-btn-container">
                    <button type="button" onClick={onSearch}>
                        <span>
                            {search_icon}
                        </span>
                        Search
                    </button>
                </div>

            </div>
            <div className="bottom-row">
                <Dropdown className="query-price" options={priceChoices} placeholder="Price" value={price} name={"query-price-input"} onChange={() => handleDropdownChange("query-price-input")} />
                <Dropdown className="query-distance" options={distanceChoices} placeholder="Distance" value={distance} name={"query-distance-input"} onChange={() => handleDropdownChange("query-distance-input")}/>
                <div className="num-results">
                    {props.numResults < 0 ? "" : `${props.numResults} results found`}
                </div>
            </div>
        </div>
    );
}





export default SearchBar;
