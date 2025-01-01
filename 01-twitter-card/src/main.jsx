import React from 'react';
import createRoot from 'react-dom/client'
import { TwitterFollowCard } from './components/TwitterFollowCard.jsx';
import './main.css';

createRoot.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <section className='tw-followCard-container'>
      <TwitterFollowCard isFollowing fName={'Espada diaz'} username={'aitor69'} />
      <TwitterFollowCard isFollowing fName={'Domingo gonzalo'} username={'terminator'} />
      <TwitterFollowCard isFollowing fName={'Paco salinas'} username={'salinas'} />
    </section>
  </React.StrictMode>
)
