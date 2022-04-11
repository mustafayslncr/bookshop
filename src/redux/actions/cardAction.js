import { TYPES } from "../constants/type"
import data from '../../data'

export const cardAction=(productId)=> (dispatch) => {
    const product=data.products.find(x=>x._id===productId)
    dispatch({
        type:TYPES.ADD_CARD,
        payload:{
            id:product._id,
            name:product.name ,
            image:product.image,
            price:product.price
        }
    })
}

export const removeAction=(productId) => (dispatch)=>{
    dispatch({
        type:TYPES.REMOVE_CARD,
        payload:productId
    })
}