import React from 'react'
import './Detail.css'
import data from '../data'
import { Link, useParams } from 'react-router-dom'



const Detail = () => {
    //const id = props.match.params.id
    const {id} = useParams();
    
    const product = data.products.find(prd=>prd._id === id)


    return (
        <div className="detail">
             <img src={product.image} alt="" />
            <div className="right">
                <span style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>{product.name}</span>
                <span style={{marginLeft:10,marginTop:5,fontWeight:'bold',color:'red'}}>{product.yazar}</span>
                <span style={{marginLeft:10,marginTop:5,fontWeight:'bold'}}>{product.yayinevi}</span>
                <span style={{marginLeft:10,fontWeight:'bold',marginTop:10}}>{product.description}</span>
                <span className='price'>{product.price} ₺</span>
                <Link to={`/card/${product._id}`}><button>
                    <div>
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    </div>
                    <span>Sepete Ekle</span>
                </button></Link>
                

                <Link to={'/'}><button style={{marginTop:10,backgroundColor:'rgb(31, 206, 31)'}}>
                  <span>Anasayfaya Dön</span>
            </button></Link>

            </div> 
        </div>
    )
}

export default Detail
