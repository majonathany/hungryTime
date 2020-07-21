import React, {useEffect, useState} from 'react';


import SearchBar from "./views/SearchBar";
import ResultsList from "./views/ResultsList";
import MapView from "./views/MapView";
import SearchQuery from "./models/SearchQuery";

import {exampleList} from "../Global/assets/reference";
import ResultQuery from "./models/ResultQuery";

//Small Applet inside big application
export function RestaurantSearch(props)
{
    //Results State
    const [listConfig, setListConfig] = useState({numResultsPerPage: 4})
    const [numResults, setNumResults] = useState(-1);

    const [listOfRestaurants, setListOfRestaurants] = useState([] || exampleList);
    const [currentRestaurant, setCurrentRestaurant] = useState(null);
    const [location, setLocation] = useState(null);


    useEffect(() => {
        if (currentRestaurant != null)
        {
            setNumResults(listOfRestaurants.length);
        }
    }, [listOfRestaurants]);

    useEffect(() => {
        if (localStorage.getItem("position") === null) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    console.log("Position is: " + position);
                    sessionStorage.setItem("position", position);
                    setLocation({lat: position.coords.latitude, lng: position.coords.longitude});
                }, function(error) {
                    console.log("Geolocation failed.");
                });
            } else {
                // Fallback for no geolocation
                console.log("Geolocation failed.");

            }

        }
        else
        {
            let position = localStorage.getItem("position");
            setLocation({lat: position.coords.latitude, lng: position.coords.longitude})
        }
    }, [])

    const handleResponseData = (response) =>
    {
        if (response.restaurants?.length > 0)
        {
            let result_queries = response.restaurants.map((element) =>
                {
                    let query = new ResultQuery();
                    query.setQueryParameters(element);
                    return query;
                }
            )

            setListOfRestaurants(result_queries);
            setCurrentRestaurant(result_queries[0])

        }
    }

    const clearResults = () =>
    {
        setListOfRestaurants([]);
    }

    const setCurrentRestaurantCallback = (result_query) => {
        setCurrentRestaurant(result_query)
    }


    
    return (
        <div className="restaurant-search-module">
            <SearchBar resultsCallback={handleResponseData} clearResults={clearResults} numResults={numResults}> listConfig={listConfig}</SearchBar>
            <div className='results-container'>
                <ResultsList location={location} config={listConfig} data={listOfRestaurants} callback={setCurrentRestaurantCallback}/>
                <MapView location={location} currentRestaurant={currentRestaurant}/>
            </div>
        </div>
    );
}