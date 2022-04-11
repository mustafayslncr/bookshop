/* eslint-disable no-lone-blocks */
import { TYPES } from "../constants/type";

export const searchReducer = (state = {search:''} , action) => {
    switch (action.type) {
        case TYPES.SEARCH_INPUT:
         return {
            search: action.payload
          }
    
        default:
            return state;
    }
} 