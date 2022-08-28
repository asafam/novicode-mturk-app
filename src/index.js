import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css';
// import reportWebVitals from './reportWebVitals';
// import { forOfStatement } from '@babel/types';


function importBuildTarget() {
	if (process.env.REACT_APP_BUILD_TARGET === 'UTTERANCE4') {
		return import('./utterances4')
	} else if (process.env.REACT_APP_BUILD_TARGET === 'UTTERANCE5') {
		return import('./utterances5')
	} else if (process.env.REACT_APP_BUILD_TARGET === 'PARAPHRASE') {
		return import('./paraphrase')
	} else {
		return Promise.reject(
			new Error('No such build target: ' + process.env.REACT_APP_BUILD_TARGET)
		)
	}
}

importBuildTarget().then(({ default: Environment }) =>
	ReactDOM.render(
		<React.StrictMode>
			<Environment />
		</React.StrictMode>,
		document.getElementById('root')
	)
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
