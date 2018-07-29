import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {
   /* CLOUD, 
    CLOUDY, 
    SUN, 
    RAIN, 
    SNOW, */
    WINDY } from '../constants/weathers';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={25} weatherstate={WINDY}/>
        <WeatherExtraInfo humidity={30} wind={'10m/s'}/>
    </div>
);

export default WeatherData;