import React from 'react'
import './CardMessage.css'
import { Link } from 'react-router-dom'

const CardMessage = () => {
  return (
    <div className='cardmsg'>
            <span>Sepetiniz'de Ürün Bulunmamaktadır... <Link style={{textDecoration:'none',color:'#2B417E',fontWeight:'bolder'}} to="/">AnaSayfa</Link> </span>
            <img src="https://media.istockphoto.com/vectors/worried-vector-cartoon-emoji-frustrated-distressed-disappointed-angry-vector-id856969562?k=20&m=856969562&s=170667a&w=0&h=_63rLj31mPFS5AdqxVvH6PMkBQ6uDHRCHLCCojLa1sA=" alt=""/>
        </div>
  )
}

export default CardMessage