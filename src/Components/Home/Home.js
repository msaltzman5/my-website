import React from 'react';

import "./Home.css";
//import { Button } from '@mui/material'

function Home() {

  function debugging() {
    let p = []
    for(let i = 0; i<1000; i++) {
      p.push(<p>p {i+1}</p>)
    }
    
    return p
  }

  return (
    <div className='home-content'>
      <h1>
        Home Page
      </h1>
      {debugging()}
    </div>
  );
}

export default Home;