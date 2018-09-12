import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import './styles.css';

const url = "https://api.openweathermap.org/data/2.5/weather";
/*const city = 'Santa Cruz de Tenerife, ES';*/
const api_key = '3b70670ce2b097b120221e9a014ab18b';
/*const api_weather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;*/


class WeatherLocation extends Component{  
    constructor({city}){
        super();
        this.state = {
            city,
            data:null
        };

    }

    
    componentWillMount(){
        const{city} = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}`;
        fetch(api_weather).then(data => {
            return data.json();
        }).then(weather_data =>{
            const data = transformWeather(weather_data);
            this.setState({data}); /* Esto provoca otro evento Render */
           
        }) ;
    }



    render = () => {
        const {onWeatherLocationClick} = this.props;
        const {city,data} = this.state;
        return (<div className="weatherLocationCont" onClick={onWeatherLocationClick}>
            <Location city={city}  />
            {data ? <WeatherData data={data}/>:
            <CircularProgress size={60} thickness={7} />  }
            {/*
            En caso que la acción de actuliar se pusiese un botón
            <button onClick={this.handUpdateClick}>Actualizar</button>
            */}
        </div>);
    }; 

}
WeatherLocation.PropTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;