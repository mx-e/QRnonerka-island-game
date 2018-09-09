import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App.js'

const Router = (props) => (
	<Switch>
	  <Route path='/:number(\d)' render={(props) => <App {...props}/>}/>
	</Switch>
)

export default Router