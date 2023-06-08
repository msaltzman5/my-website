import {debugging} from '../../App.js'

import "./Home.css";
//import { Button } from '@mui/material'

function Home() {

  return (
    <div id='home' className='home-content'>
      <h1>Home Page</h1>
      {debugging()}
    </div>
  );
}

export default Home;