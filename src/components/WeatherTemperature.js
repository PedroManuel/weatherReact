import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
        CLOUD, 
        CLOUDY, 
        SUN, 
        RAIN, 
        SNOW, 
        WINDY } from '../constants/weathers';

const stateToIconName = weatherstate => {
    switch (weatherstate){
        case CLOUD:
            return 'cloud';
        case CLOUDY:
            return 'cloudy';
        case SUN:
            return 'day-sunny';
        case RAIN:
            return 'rain';
        case SNOW:
            return 'snow';
        case WINDY:  
            return 'windy';
        default:
            return 'day-sunny';
    }
};
const getWeatherIcon = weatherstate => {
    return (<WeatherIcons name={stateToIconName(weatherstate)} size="2x"/>)
};

const WeatherTemperature = ({temperature, weatherstate}) => (
    <div>
        {getWeatherIcon(weatherstate)}
        <span>{`${temperature} Cº`}</span>
        <span>{`${weatherstate} wind`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherstate: PropTypes.string
}
export default WeatherTemperature;