import React, { Component } from 'react';
import './App.css';
import Checkpoint from "./Components/Checkpoint";
import {getPageData} from "./State/state";
import { withCookies, Cookies } from 'react-cookie';

class App extends Component {
   
    constructor(props) {
      super(props)
   
      const { cookies } = props;
      
      const stationdata = {}
      try {
        const stationdata = JSON.parse(cookies.get('QRnonerka'))
      }
      catch(e) {
      }

      this.state = {
        stations: stationdata,
        data: getPageData(1)
      }

      cookies.set('QRnonerka', JSON.stringify({}))
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">QRnonerka</h1>
        </header>
        <Checkpoint {...this.state.data}/>
      </div>
    );
  }
}

export default withCookies(App);
