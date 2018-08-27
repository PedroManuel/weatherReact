import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
      <div className="App">
        <LocationList cities={cities} 
          onSelectedLocation={this.handleSelectedLocation}></LocationList>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
