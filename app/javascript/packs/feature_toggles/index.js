import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './../feature_toggles.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Routes />, document.getElementById('feature-toggles'),
  )
});
