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
        maxId: 0
      }

      cookies.set('QRnonerka', JSON.stringify({}))
    }

  render() {
    const currentUrl = window.location.href
    const urlParams = currentUrl ? currentUrl.split('?')[1] : null

    let firstParamValue = null
    if(urlParams) {
      let firstParam = urlParams.split('&')[0].split('#')[0]
      firstParamValue = parseInt(firstParam.split('=')[1])
      firstParamValue = isNaN(firstParamValue) ? null : firstParamValue
    }

    const checkpointProps = getPageData(firstParamValue)

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">QRnonerka</h1>
        </header>
        {(firstParamValue && checkpointProps) &&
        <Checkpoint {...checkpointProps}/>
        }
      </div>
    );
  }
}

export default withCookies(App);
