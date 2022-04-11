import React, { useEffect } from 'react'
import './Card.css'
import CardMessage from '../components/CardMessage'
import { useNavigate, useParams } from 'react-router-dom'
import { cardAction, removeAction } from '../redux/actions/cardAction'
import { useDispatch, useSelector } from 'react-redux'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Card = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const card = useSelector(state=> state.card)
  const {cardItems} = card

  const navigate = useNavigate()

   console.log("productId", useParams())

  useEffect(()=>{
    if(id){
        dispatch(cardAction(id))
    }
   },[dispatch,id])

   const removeCard=(id)=>{
    dispatch(removeAction(id))
}

var total = cardItems.reduce((a, b)=>{
  a += b['price'];
  return a;
},0)



  return (
  
    <div className="card">
    {
    cardItems.length === 0 ? (
        <CardMessage/>
    ) :
    (
           cardItems.map(card=>(
             <div key={card.id} className="card-detail">
                 <img src={card.image} alt=""/>
                  <p>{card.name}</p>
                  <p>{card.price} TL</p>
                  <div>
                  <button onClick={()=>removeCard(card.id)}><DeleteForeverIcon/></button>
                  </div>
             </div>
         ))
        )
    }

   
     { cardItems.length>0 &&
     <div className="total-genel">
     <div className="total">
        <h5>Ürün Miktarı : <strong>{cardItems.length}</strong> </h5>
        <h5>Toplam Tutar : <strong>{total} TL</strong> </h5>
        <h5>{total > 49 ? <span>Kargo Tutarı : <strong> 0 TL</strong> </span> : <span>Kargo Tutarı :<strong> 17.99 TL</strong></span>}</h5>
        <h5>Ödenecek Tutar : <strong>{total > 49 ? total : total+17.99} TL</strong> </h5>
        <button>Ödeme Yap</button>
        <button onClick={()=>navigate('/')}>Alışverişe Devam Et</button>
     </div>
     </div>
     }
   
      
</div>

)
}

   
     
   
      




export default Card