import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
	<BrowserRouter>
		<CookiesProvider>
			<Router />
		</CookiesProvider>
	</BrowserRouter>
, document.getElementById('root'));
