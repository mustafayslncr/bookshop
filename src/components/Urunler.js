import React from 'react'
import './Urunler.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import data from '../data'

const Urunler = () => {
    //console.log("data", data.products)
    //console.log('selector', useSelector(state=>state))
    const {search} = useSelector(state=>state.search)
    console.log(search.split(''));
    // charAt(0)

    function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        // Directly return the joined string
        return splitStr.join(' '); 
     }
     
  return (
    <div className='urunler'>
      <div className='urunlerbir'>
     {
       data.products.filter(prd => prd.name.includes(titleCase(search))).map(prd => (
           <div className='urunleriki' key={prd._id}>
              <Link to={`/detail/${prd._id}`}><img src={prd.image} alt="" /></Link>
                    <span className="urunadi">{prd.name}</span>
                    <p>{prd.yayinevi}</p>
                    <p style={{color:'red'}}>{prd.price} ₺</p>
                    <div>
                    <Link to={`/detail/${prd._id}`}><button>İncele</button></Link>
                    <Link to={`/card/${prd._id}`}><button>Sepete Ekle</button></Link>
                    </div>
                    
           </div>
       ))
     }
     </div>
    </div>
  )
}

export default Urunler


