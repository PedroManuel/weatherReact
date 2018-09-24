import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import {setCity} from './actions';


import './App.css';

const cities = [
  'Santa Cruz de Tenerife, ES',
  'Buenos Aires, ar',
  'Berlin, DE',
  'Madrid, ES',
  'Mexico, mx',
  'Bogota,col',
  'Santiago,cl'
];

class App extends Component {

  constructor(){
    super();
    this.state = {city:null};
  }

  handleSelectedLocation = city =>{
    this.setState({city:city});
    console.log(`handleSelectionLocation ${city}`);

    this.props.setCity(city);
  }


  render() {
  
    const {city} = this.state;
    return (
      <MuiThemeProvider>
 
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title='weather App'></AppBar>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities} 
                onSelectedLocation={this.handleSelectedLocation}></LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className='detail'>
                { city && 
                  <ForecastExtended city={city}></ForecastExtended>
                } 
                </div>
              </Paper>
    
            </Col>
          </Row>
        </Grid>
 
      </MuiThemeProvider>
    );
  }
}

App.PropTypes={
  stCity: PropTypes.func.isRequired,
}

const mapDispatchToPropsActions = dispatch => (
  {
    setCity: value => dispatch(setCity(value))
  }
);

export default connect(null, mapDispatchToPropsActions)(App);
