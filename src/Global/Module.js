import React from 'react';
import Body from './views/Body'
import NavigationBar from "./views/NavigationBar";
import Banner from "./views/Banner";
import {RestaurantSearch} from "../RestaurantSearch/Module";

function Module() {
  return (
    <div className="App">
        <NavigationBar></NavigationBar>
        <Banner></Banner>
        <Body>
            <RestaurantSearch/>
        </Body>
    </div>
  );
}

export default Module;
