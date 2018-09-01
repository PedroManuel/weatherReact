import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
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
  handleSelectedLocation = city =>{
    console.log(`handleSelectionLocation ${city}`);
  }
  render() {
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
                <div className='detail'></div>
              </Paper>
    
            </Col>
          </Row>
        </Grid>
 
      </MuiThemeProvider>
    );
  }
}

export default App;
