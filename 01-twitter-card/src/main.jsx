import React from 'react';
import ReactDom from 'react-dom/client';
import { App } from './components/App.jsx';
import './main.css';

ReactDom.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
