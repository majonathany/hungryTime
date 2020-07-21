import React, {useState, useEffect} from 'react';

function MapView(props) {

    //State
    let isReady = false;
    const [currentLocation, setCurrentLocation] = useState(null);

    let zoom = 10;
    const [map, setMap] = useState(null);

    let marker = null;

    let labelIndex = 0;

    useEffect(() => {
        let x = 0;
        let intervalID = setInterval(() => {
            if (window.google !== null && isReady === false)
            {
                console.log("Google Maps Is Ready.")
                isReady = true;
            }
            x++;
            if (x > 20 || isReady === true)
            {
                window.clearInterval(intervalID);
            }
        }, 500);
    }, [])

    const createMap = () => {
        if (currentLocation != null)
        {
            if (map == null)
            {
                setMap(new window.google.maps.Map(document.getElementById('map'),
                    {zoom: zoom, center: currentLocation}));
            }
            else
            {
                map.setCenter(currentLocation);
                map.setZoom(zoom);
            }
            if (marker != null)
            {
                marker.setPosition(currentLocation)
            }
        }
        else if (props.location != null)
        {
            if (map == null)
            {
                setMap(new window.google.maps.Map(document.getElementById('map'),
                    {zoom: zoom, center: props.location}));
            }
            else
            {
                map.setCenter(props.location);
                map.setZoom(zoom);
            }
            if (marker != null)
            {
                marker.setPosition(props.location)
            }
        }
    }


    useEffect(() => {
        if (props.currentRestaurant != null) {
            if (currentLocation == null)
            {
                let lat = props.currentRestaurant.query.lat;
                let long = props.currentRestaurant.query.lng;
                setCurrentLocation({lat: lat, lng: long})
            }
            else if ((props.currentRestaurant.query.lat != currentLocation?.lat && props.currentRestaurant.query.lng != currentLocation?.lng)) {
                let lat = props.currentRestaurant.query.lat;
                let long = props.currentRestaurant.query.lng;
                setCurrentLocation({lat: lat, lng: long})
            }
            zoom = 14;
        }
    }, [props.currentRestaurant])



    useEffect(() => {
        createMap();
    }, [props.location, currentLocation])

    useEffect(() => {
        if (isReady) {
            marker = new window.google.maps.Marker({
                position: currentLocation,
                map: map,
                title: props.currentRestaurant?.query.name
            });
        }
    }, [currentLocation])

    useEffect(() => {
        if (isReady)
        {
            if (marker != null)
            {
                marker.setMap(null);
            }
        }
    }, [currentLocation])




    return (
        <div className="map-view">
            <div id="map">
            </div>
        </div>
    );
}


export default MapView;
