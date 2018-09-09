import React, { Component } from 'react';
import './App.css';
import Checkpoint from "./Components/Checkpoint";
import {getPageData} from "./State/state";

class App extends Component {


  render() {
    const pageProps = getPageData(1)

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">QRnonerka</h1>
        </header>
        <Checkpoint {...pageProps}/>
      </div>
    );
  }
}

export default App;
