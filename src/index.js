import React from 'react';
import ReactDOM from 'react-dom'; //render ke DOM atau browser
import './index.css'; 
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); //root di folder public, component di render di root
registerServiceWorker();
