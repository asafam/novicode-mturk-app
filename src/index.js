import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const getData = (attribute, id='root') => {
  return document.getElementById(id).getAttribute(attribute);
};

const id = getData('data-id');
const context = getData('data-context');
const contexts = getData('data-contexts') ? getData('data-contexts').split("|").map(context => context.trim()) : [];
const intents = getData('data-intents') ? getData('data-intents').split("|").filter(x => x && x.length > 0).map(intent => intent.trim()) : [];
const icons = getData('data-intent-icons') ? getData('data-intent-icons').split("|").filter(x => x && x.length > 0).map(icon => icon.trim()) : [];
const minIntents = getData('data-min-intents') && parseInt(getData('data-min-intents'));
const constraintIntents = getData('data-constraints') ? getData('data-constraints').split("|").filter(x => x && x.length > 0).map(intent => intent.trim()) : [];
const constraintIcons = getData('data-constraint-icons') ? getData('data-constraint-icons').split("|").filter(x => x && x.length > 0).map(icon => icon.trim()) : [];
const minConstraints = getData('data-min-constraints') && parseInt(getData('data-min-constraints'));
const linkWords = getData('data-link-words') ? getData('data-link-words').split("|").map(word => ({display: word.trim().split(":")[0], verification: word.trim().split(":")[1].split(",")})) : [];
const minWords = getData('min-words') && parseInt(getData('min-words'));
const quantifiers = getData('data-quantifiers') ? getData('data-quantifiers').split("|").map(icon => icon.trim()) : [];
const maxLength = getData('data-max-length') && parseInt(getData('data-max-length'));
const maxLengthPerIntent = getData('data-max-length-per-intent') && parseInt(getData('data-max-length-per-intent'));

ReactDOM.render(
  <React.StrictMode>
    <App id={id} context={context} contexts={contexts}
      intents={intents} icons={icons} minIntents={minIntents}
      constraintIntents={constraintIntents} constraintIcons={constraintIcons} minConstraints={minConstraints}
      linkWords={linkWords} minWords={minWords} quantifiers={quantifiers} 
      maxLength={maxLength} maxLengthPerIntent={maxLengthPerIntent} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
