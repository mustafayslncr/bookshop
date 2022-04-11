import { TYPES } from "../constants/type";

export const cardReducer=(state={cardItems:[]},action)=>{
    switch(action.type){

        case TYPES.ADD_CARD:
            const item = action.payload
            const allProducts=state.cardItems.find(x=>x.id===item.id)
            if(allProducts){
                    return{
                        ...state,
                        cardItems:state.cardItems.map(x=>x.id===allProducts.id ? item : x)
                    }
            }else{
                    return{
                        ...state,
                        cardItems:[...state.cardItems,item]
                    }
                }
                
        case TYPES.REMOVE_CARD:
                    return{
                        ...state,cardItems:state.cardItems.filter(x=>x.id !== action.payload)
                    }

            default:
                   return state     
            }
    }
