import React, { Component } from 'react';
import './App.css';
import Checkpoint from "./Components/Checkpoint";
import {getPageData} from "./State/state";
import { withCookies, Cookies } from 'react-cookie';
import { Icon, Overlay } from "@blueprintjs/core";

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
        maxId: 0,
        overlayIsOpen: false
      }

      cookies.set('QRnonerka', JSON.stringify({}))

      this.toggleOverlay = this.toggleOverlay.bind(this)
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
          <div className={'infoOverlayWrapper'}>
            <Icon icon={'info-sign'} icon-size={24} onClick={this.toggleOverlay}/>
            <Overlay isOpen={this.state.overlayIsOpen} onClose={this.toggleOverlay}>
              <div className={'overlayContentWrapper'} onClick={this.toggleOverlay}>
                <h1>About This Project</h1>
                <p>Some information about this Project</p>
              </div>
            </Overlay>
          </div>
        </header>
        {(firstParamValue && checkpointProps) &&
        <Checkpoint {...checkpointProps}/>
        }
      </div>
    )
  }

  toggleOverlay() {
      this.setState(state => Object.assign({}, state, {
        overlayIsOpen: !state.overlayIsOpen
      }))
  }
}

export default withCookies(App);
