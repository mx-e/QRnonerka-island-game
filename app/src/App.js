import React, { Component } from 'react';
import './App.css';
import Checkpoint from "./Components/Checkpoint";
import {getPageData} from "./State/state";
import { withCookies, Cookies } from 'react-cookie';

class App extends Component {
   
    constructor(props) {
      super(props)
   
      const { cookies } = props;
      
      let stationdata = {}
      try {
        console.log(cookies.get('QRnonerka'))
        stationdata = cookies.get('QRnonerka')
      }
      catch(e) {
      }

        // url parameter
      const currentUrl = window.location.href
      const urlParams = currentUrl ? currentUrl.split('?')[1] : null

      let firstParamValue = null
      if(urlParams) {
        let firstParam = urlParams.split('&')[0].split('#')[0]
        firstParamValue = parseInt(firstParam.split('=')[1])
        firstParamValue = isNaN(firstParamValue) ? null : firstParamValue
        cookies.set('QRnonerka', 
          Object.assign(stationdata, 
            {[firstParamValue]: (new Date()).getTime()}
          )
        )
      }

      this.state = {
        pos: firstParamValue,
        stations: stationdata,
        maxId: 0
      }
  }

  render() {
    const checkpointProps = getPageData(this.state.pos)

    return (
      <div className="App">
        <header className="App-header">
        {JSON.stringify(this.state.stations)}
          <h1 className="App-title">QRnonerka</h1>
        }
        </header>
        {(this.state.pos && checkpointProps) &&
        <Checkpoint {...checkpointProps}/>
        }
      </div>
    );
  }
}

export default withCookies(App);
