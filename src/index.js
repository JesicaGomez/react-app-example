import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Estoy seleccionando el elemento que deseo se muestre en mi index.html
ReactDOM.render(<App />, document.getElementById('cars'));
registerServiceWorker();
