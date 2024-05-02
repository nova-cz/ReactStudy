import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

import { CounterApp } from './CounterApp';

//Insertar el componenete App en el div llamnado root
//? Todo lo que se esta definiendo posterior a tittle son porperties
ReactDOM.createRoot(document.getElementById('root' )).render(
  <React.StrictMode>
    <CounterApp  value = {0}/>
  </React.StrictMode>
);