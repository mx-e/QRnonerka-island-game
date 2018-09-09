import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import App from './App.js'
import { withCookies, Cookies } from 'react-cookie'


const Router = (props) => (
	<Switch>
	  <Route path='/:number(\d+)' render={(props) => <App {...props}/>}/>
	</Switch>
	)

export default Router