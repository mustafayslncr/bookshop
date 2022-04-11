import React from 'react'
import Promotion from '../components/Promotion'
import Urunler from '../components/Urunler'
import './Home.css'


const Home = () => {
  return (
    
   <div className='home'>
      
          <Promotion />
          <Urunler /> 
      </div>
    
  )
}

export default Home