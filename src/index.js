import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// context api
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* wrap the entire app component in the state provider data layout  */}
    {/* to grant app and every component access to data layout */}
 <StateProvider  initialState={initialState} reducer={reducer} >
  <App />
 </StateProvider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
