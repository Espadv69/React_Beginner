import React from 'react';
import ReactDOM from 'react-dom';
import { TwitterFollowCard } from './components/TwitterFollowCard.jsx';
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <section className='tw-followCard-container'>
      <TwitterFollowCard fName={'Espada diaz'} username={'aitor69'} />
      <TwitterFollowCard fName={'Domingo gonzalo'} username={'terminator'} />
      <TwitterFollowCard fName={'Paco salinas'} username={'salinas'} />
    </section>
  </React.StrictMode>
)