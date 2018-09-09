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
      console.log(stationdata)
    }
    catch(e) {
    }

    this.state = {
      stations: stationdata,
      data: getPageData(1)
    }

    cookies.set('QRnonerka', JSON.stringify(
      Object.assign(stationdata, 
        {'1': (new Date()).getTime()}
        )
      )
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        {JSON.stringify(this.state.stations)}
          <h1 className="App-title">QRnonerka</h1>
        </header>
        <Checkpoint {...this.state.data}/>
      </div>
    );
  }
}

export default withCookies(App);
