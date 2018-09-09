import React, { Component } from 'react';
import './App.css';
import Checkpoint from "./Components/Checkpoint";
import {getPageData} from "./State/state";
import { withCookies, Cookies } from 'react-cookie';
import { Icon, Overlay } from "@blueprintjs/core";

class App extends Component {
   
    constructor(props) {
      super(props)
      console.log(props)
      const { cookies } = props
      
      let stationdata = {}
      try {
        console.log(cookies.get('QRnonerka'))
        stationdata = cookies.get('QRnonerka')
      }
      catch(e) {
      }

      // url parameter
      cookies.set('QRnonerka', 
          Object.assign(stationdata, 
            {[props.match.params.number]: (new Date()).getTime()}
          )
        )

      this.state = {
        pos: parseInt(props.match.params.number),
        stations: stationdata,
        maxId: 0,
        overlayIsOpen: false
      }


      this.toggleOverlay = this.toggleOverlay.bind(this)
    }


  render() {
    const checkpointProps = getPageData(this.state.pos)
    console.log(checkpointProps)
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
        {(this.state.pos && checkpointProps) &&
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
