import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';
import transformForecast from './../services/transformForecast';
/*import WeatherData from './WeatherLocation/WeatherData';*/
/*
const days = [
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
];

const data = {
    temperature: 10,
    humidity: 10,
    wetherState: 'normal',
    wind: 'normal',
}
*/
const url = "https://api.openweathermap.org/data/2.5/forecast";
const api_key = '3b70670ce2b097b120221e9a014ab18b';

class ForecastExtended extends Component{

    constructor(){
        super();
        this.state = {forecastData: null}
    }

    componentDidMount(){
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.city !== this.props.city){
            this.setState(({forecastData:null}))
            this.updateCity(nextProps.city);
        }
    }
    updateCity = city =>{
                // fetch or axios opción para ser soportado por mas navegadores
                const url_forecast = `${url}?q=${city}&appid=${api_key}`;
                console.log("CIUDADA:" + city);
            
                fetch(url_forecast).then(
                    data => (data.json())
                ).then(
                    weather_data =>{
                        console.log(weather_data);
                        const forecastData = transformForecast(weather_data);
                        console.log(forecastData);
                        this.setState({forecastData});
                    }
                );
    }
    
    renderForecastItemDays(forecastData){
        return forecastData.map(forecast => (
            <ForecastItem 
                    key={`${forecast.weekDay}${forecast.hour}`}
                    weekDay={forecast.weekDay} 
                    hour={forecast.hour} 
                    data={forecast.data}>
            </ForecastItem>
        ));
       // return days.map(day =>(<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>));
    }

    renderProgress = () => {
        return <h3>Cargando Pronóstico extendido...</h3>;
    }

    render(){
        const  {city} = this.props;
        const { forecastData} = this.state;

        return (
            <div>
                <h3 className='forecast-title'>Pronóstico Extendido para {city}</h3>
                {forecastData ?
                    this.renderForecastItemDays(forecastData):
                    this.renderProgress()
                }
            </div>
            );
    }

}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;