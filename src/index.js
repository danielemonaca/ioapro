import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <script src="/__/firebase/7.22.0/firebase-app.js"></script>
        <script src="/__/firebase/7.22.0/firebase-analytics.js"></script>
        <script src="/__/firebase/init.js"></script>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
