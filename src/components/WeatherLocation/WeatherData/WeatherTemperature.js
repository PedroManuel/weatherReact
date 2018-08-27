import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
        CLOUD, 
        CLOUDY, 
        SUN, 
        RAIN, 
        SNOW, 
        WINDY,THUNDER, DRIZZLE } from '../../../constants/weathers';
import './styles.css';

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
        case THUNDER:  
            return 'day-thunderstorm';
        case DRIZZLE:  
            return 'day-showers';
        default:
            return 'day-sunny';
    }
};
const getWeatherIcon = weatherState => {
    return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="3x"/>)
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className='weatherTemperatureInfoCont'>
        {getWeatherIcon(weatherState)}
        <span className='temperature'>{`${temperature}`}</span>
        <span className='temperaturetype'>Cº</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherstate: PropTypes.string
}
export default WeatherTemperature;