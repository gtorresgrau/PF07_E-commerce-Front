import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './Store/index.js';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history.js'

//axios.defaults.baseURL='http://localhost:3001';
//https://pf07e-commerce-back-production.up.railway.app/

axios.defaults.baseURL = 'https://pf07e-commerce-back-production.up.railway.app/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain='dev-frontpf08.us.auth0.com'
    clientId='tRlgJELqzjkbfv2YlwKylgjL8jlAPDDa'
    redirectUri={"http://localhost:3000/sneakers"||"https://pf-07-e-commerce-front-e03qnrsav-gtorresgrau.vercel.app/"}
    audience="https://dev-frontpf08.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <Provider store={store}>
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </BrowserRouter>,
    </Provider>
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
