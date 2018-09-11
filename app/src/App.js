import React, { Component } from 'react'
import './App.css'
import Checkpoint from "./Components/Checkpoint"
import Success from "./Components/Success"
import {getPageData} from "./State/state"
import { withCookies, Cookies } from 'react-cookie'
import { Icon, Overlay } from "@blueprintjs/core"

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
          Object.assign({}, stationdata, 
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
                <p>Do you know about Kanonersky Island?
                Are you aware of its long history? <br /> <br />

                We invite you to play a game about this place. You will see many hidden spots and explore the island. Do you for example know the former name of Kanoniersky Island? Why is there a cat statue?  <br />
                For the quest, you only need your smartphone: All over the island, you will find QR codes. You scan these codes with your phone - then they will lead you to other places. <br /> Are you ready? Let's begin!</p>
                <h1>About Us</h1>
                <p> We are a team of students from Russia and Germany. This project was created as part of an international student exchange between St. Petersburg and German universities. It was funded by the Erasmus+ program of the European Union. </p>
              </div>
            </Overlay>
          </div>
        </header>
        {(this.state.pos && checkpointProps && this.state.stations) &&
        (this.state.stations.length == 7)? <Success /> :<Checkpoint {...checkpointProps}/>
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
