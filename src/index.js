import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
// import reportWebVitals from './reportWebVitals';
// import { sendToVercelAnalytics } from './vitals';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

// reportWebVitals(sendToVercelAnalytics);
