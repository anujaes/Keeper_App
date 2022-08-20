import React                from 'react';
import { Provider }         from 'react-redux';
import ReactDOM             from 'react-dom/client';
import store                from  './redux/store';
import App                  from './App';
import reportWebVitals      from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
);
reportWebVitals();