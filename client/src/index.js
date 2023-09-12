import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Auth0Provider
    domain="dev-3dna34xw5f38i3mm.us.auth0.com"
    clientId="F6I6iJfbGsVKoYltCbuGdqzGB3hk345o"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
