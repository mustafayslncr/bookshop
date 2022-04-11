import { TYPES } from "../constants/type";


export const themeReducer = (state={theme: false},action) => {
    switch (action.type) {
        case TYPES.THEME_COLOR :
            return {
              theme:action.payload
            }
        default:
            return state;
    }
}