import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/styles.css';


//sending the app rendering in the div with the id root in the "index.html".
ReactDOM.render(<App/>, document.querySelector('#root'));