/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, useNavigate } from 'react-router-dom';
import {MdDarkMode} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { TYPES } from '../redux/constants/type';

const Header = () => {
  const [searchName, setSearchName] = useState('');
  const [themee, setThemee] = useState(false);
  const {theme} = useSelector(state=>state.theme)

    const card=useSelector(state=>state.card)
    const {cardItems}= card;

  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch({type:TYPES.SEARCH_INPUT,payload:searchName})
  },[searchName])

  console.log("searchName",searchName)
  const modeChange = () => {
    setThemee(!themee)
    dispatch({type:TYPES.THEME_COLOR, payload:themee})
  }
  return (
    <>
        <img style={{width:"100%",height:"100%",objectFit:'cover'}} src="/resimler/kargobedava.jpg" alt="" />
        <div style={theme ? {background:'#202125'} : {background:'white'}} className='header'>
            <Link to="/"><img className='logo' src="/resimler/booklogo.jpg" alt="" /></Link>
            <div className='center'>
                <SearchIcon/>
                <input placeholder="Kitap Ara..." onChange={e => setSearchName(e.target.value)}/>
                <button onClick={()=>dispatch({type:TYPES.SEARCH_INPUT,payload:searchName})}>Ara</button>
            </div>
            <div className="header-right">
            <button onClick={()=>navigate('/login')}>Giriş Yap</button>
            <button onClick={()=>navigate('/register')}>Kayıt Ol</button>
                
                <Link to="/card"><ShoppingBasketIcon className="shopıcon"/>
                <span>{cardItems.length}</span></Link>
            </div>
            
              <div onClick={modeChange}>
                  <MdDarkMode color={theme ? 'white': 'black'}  style={{fontSize:'30px',cursor:'pointer'}}/>
              </div>
              
            
        </div>

        
        
    </>
  )
}

export default Header