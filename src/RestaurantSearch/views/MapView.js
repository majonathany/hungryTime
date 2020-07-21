import React, {useState, useEffect} from 'react';

function MapView(props) {

    //State
    let isReady = false;
    const [currentLocation, setCurrentLocation] = useState(null);

    window.zoom = 10;
    let map = null;

    let marker = null;

    useEffect(() => {
        let x = 0;
        let intervalID = setInterval(() => {
            if (window.google !== null && isReady === false)
            {
                console.log("Google Maps Is Ready.")
                window.isReady = true;
            }
            x++;
            if (x > 20 || window.isReady === true)
            {
                window.clearInterval(intervalID);
            }
        }, 500);
    }, [])

    const createMap = () => {
        if (window.isReady) {
            if (currentLocation != null) {
                if (map == null) {
                    map = new window.google.maps.Map(document.getElementById('map'),
                        {zoom: window.zoom, center: currentLocation});
                } else {
                    window.zoom = 14;
                    map.setCenter(currentLocation);
                    map.setZoom(window.zoom);
                }

            } else if (props.location != null) {
                if (map == null) {
                    map = new window.google.maps.Map(document.getElementById('map'),
                        {zoom: window.zoom, center: props.location});
                } else {
                    map.setCenter(props.location);
                    map.setZoom(window.zoom);
                }
                if (marker != null) {
                    marker.setPosition(props.location)
                }
            } else {
                if (map == null) {
                    if (window.isReady) {
                        map = new window.google.maps.Map(document.getElementById('map'),
                            {zoom: window.zoom, center: {lat: 25.7617, lng: -80.1918}});

                    }
                } else {
                    map.setCenter(props.location);
                    map.setZoom(window.zoom);
                }
                if (marker != null) {
                    marker.setPosition(props.location)
                }
            }
            if (marker == null) {
                if (window.isReady) {

                    marker = new window.google.maps.Marker({
                        position: currentLocation || props.location,
                        map: map,
                        title: props.currentRestaurant?.query.name
                    });
                }
            } else {
                marker.setPosition(currentLocation)
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
        }
    }, [props.currentRestaurant])



    useEffect(() => {
        createMap();
    }, [props.location, currentLocation])

    useEffect(() => {
        if (window.isReady)
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
