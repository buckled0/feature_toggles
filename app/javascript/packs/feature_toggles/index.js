import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { injectGlobal } from 'styled-components'

injectGlobal`
  {
    @import url('https://fonts.googleapis.com/css?family=Roboto');

    body {
        font-family: 'Roboto', sans-serif;
        background: #fafafa;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 1.1em;
        font-weight: 300;
        line-height: 1.7em;
        color: #999;
    }

    a, a:hover, a:focus {
        color: inherit;
        text-decoration: none;
        transition: all 0.3s;
    }

    ul ul a {
        font-size: 0.9em !important;
        padding-left: 30px !important;
        background: #0066cc;
    }
  }
`

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Routes />, document.getElementById('feature-toggles'),
  )
});
