import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const id = document.getElementById('root').getAttribute('data-id');
const context = document.getElementById('root').getAttribute('data-context');
const contexts = document.getElementById('root').getAttribute('data-contexts').split("|").map(context => context.trim());
const intents = document.getElementById('root').getAttribute('data-intents').split("|").map(intent => intent.trim());
const icons = document.getElementById('root').getAttribute('data-intent-icons').split("|").map(icon => icon.trim());
const minIntents = parseInt(document.getElementById('root').getAttribute('data-min-intents'));
const constraintIntents = document.getElementById('root').getAttribute('data-constraints').split("|").map(intent => intent.trim());
const constraintIcons = document.getElementById('root').getAttribute('data-constraint-icons').split("|").map(icon => icon.trim());
const minConstraints = parseInt(document.getElementById('root').getAttribute('data-min-constraints'));
const linkWords = document.getElementById('root').getAttribute('data-link-words').split("|").map(icon => icon.trim());
const quantifiers = document.getElementById('root').getAttribute('data-quantifiers').split("|").map(icon => icon.trim());
const maxLength = parseInt(document.getElementById('root').getAttribute('data-max-length'));
const maxLengthPerIntent = parseInt(document.getElementById('root').getAttribute('data-max-length-per-intent'));

ReactDOM.render(
  <React.StrictMode>
    <App id={id} context={context} contexts={contexts}
      intents={intents} icons={icons} minIntents={minIntents}
      constraintIntents={constraintIntents} constraintIcons={constraintIcons} minConstraints={minConstraints}
      linkWords={linkWords} quantifiers={quantifiers} 
      maxLength={maxLength} maxLengthPerIntent={maxLengthPerIntent} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
