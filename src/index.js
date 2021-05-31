import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const id = document.getElementById('root').getAttribute('data-id');
const context = document.getElementById('root').getAttribute('data-context');
const intents = document.getElementById('root').getAttribute('data-intents').split("|").map(intent => intent.trim());
const icons = document.getElementById('root').getAttribute('data-icons').split("|").map(icon => icon.trim());
const minIntents = parseInt(document.getElementById('root').getAttribute('data-min-intents'));
const linkWords = document.getElementById('root').getAttribute('data-link-words').split("|").map(icon => icon.trim());
const linkWordIdx = parseInt(document.getElementById('root').getAttribute('data-link-word-idx'));
const quantifiers = document.getElementById('root').getAttribute('data-quantifiers').split("|").map(icon => icon.trim());
const quantifierIdx = parseInt(document.getElementById('root').getAttribute('data-quantifier-idx'));
const strategy = document.getElementById('root').getAttribute('data-strategy');
const maxLength = parseInt(document.getElementById('root').getAttribute('data-max-length'));
const maxLengthPerIntent = parseInt(document.getElementById('root').getAttribute('data-max-length-per-intent'));

ReactDOM.render(
  <React.StrictMode>
    <App id={id} context={context} intents={intents} icons={icons} 
      minIntents={minIntents} strategy={strategy}
      linkWords={linkWords} linkWordIdx={linkWordIdx} 
      quantifiers={quantifiers} quantifierIdx={quantifierIdx}
      maxLength={maxLength} maxLengthPerIntent={maxLengthPerIntent} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
