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

    //Price seems to not work
    let [price, setPrice] = useState(1);

    let [distance, setDistance] = useState(1);

    const handleEnter = (e) =>
    {
        if(e.charCode === 13){
            console.log('value', e.target.value);
            onSearch();
        }
    }

    const onSearch = () =>
    {
        debugger;


        props.clearResults();

        let query = new SearchQuery();
        query.setParameter("name", name);
        query.setParameter("zip", zip);

        debugger;

        query.setParameter("price", priceChoices[price].value);
        // query.setParameter("distance", distanceChoices[distance - 1].value );


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

    const handlePrice = (element) =>
    {
        setPrice(element.value);
    }

    const handleDistance = (element) =>
    {
        debugger;
        setDistance(element.value);
    }


    return (
        <div className="search-bar">
            <table className="top-row">
                <tbody>
                <tr>
                <td className="query-name">
                    <span></span>
                    <input name="query-name-input" onKeyPress={handleEnter} onChange={handleTextChange} value={name} type="text" placeholder={"Restaurant Name"}/>
                </td>
                <td className="query-zip">
                    <span></span>
                    <input name="query-zip-input" onKeyPress={handleEnter} onChange={handleTextChange} value={zip} type="text" placeholder={"Zip Code"}/>
                </td>
                <td className="query-cuisine">
                    <span></span>
                    <input name="query-cuisine-input" onKeyPress={handleEnter} onChange={handleTextChange} value={cuisine}  type="text" placeholder={"Cuisine Type"}/>
                </td>
                <td className="query-dietary">
                    <span></span>
                    <input name="query-dietary-input" onKeyPress={handleEnter} onChange={handleTextChange} value={dietary}  type="text" placeholder={"Dietary"}/>
                </td>
                <td className="search-btn-container">
                    <button type="button" onClick={onSearch}>
                        <span>
                            {search_icon}
                        </span>
                        Search
                    </button>
                </td>
                </tr>
                </tbody>
            </table>
            <div className="bottom-row">
                <Dropdown className="query-price" options={priceChoices} placeholder="Price" value={priceChoices[price - 1]} name={"query-price-input"} onChange={handlePrice} />
                <Dropdown className="query-distance" options={distanceChoices} placeholder="Distance" value={distanceChoices[distance-1]} name={"query-distance-input"} onChange={handleDistance} />
                <div className="num-results" style={{display: props.numResults < 0 ? 'none' : "block"}}>
                    {props.numResults < 0 ? "" : `${props.numResults} results found`}
                </div>
            </div>
        </div>
    );
}





export default SearchBar;
