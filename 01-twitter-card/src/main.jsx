import React from 'react';
import ReactDOM from 'react-dom';
import { TwitterFollowCard } from './components/TwitterFollowCard.jsx';
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <TwitterFollowCard />
  </React.StrictMode>
)