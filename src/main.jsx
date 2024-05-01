import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

import { FirstApp } from './FirstApp';

//Insertar el componenete App en el div llamnado root
ReactDOM.createRoot(document.getElementById('root' )).render(
  <React.StrictMode>
    <FirstApp />
  </React.StrictMode>
);