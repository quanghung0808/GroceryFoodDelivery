import * as ActionTypes from './ActionTypes';
import { INITIAL_STATE } from './ConfigureStore';


export const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ActionTypes.HANDLE_INPUT_CHANGE:
            const a = action.name;
            return {
                ...state,
                [a]: action.value
            }
        case ActionTypes.HANDLE_BLUR:
            const field = action.name;
            return {
                ...state,
                touched: {
                    ...state.touched,
                    [field]: true
                }
            }
        case ActionTypes.ADD_TO_CART:
            const item = state.food.find(fd => fd.id === action.payload.id);
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false);
            return {
                ...state,
                cart: inCart ? state.cart.map(item => item.id === action.payload.id
                    ? { ...item, qty: item.qty + Number(action.payload.qty) }
                    : item
                )
                    : [...state.cart, { ...item, qty: Number(action.payload.qty) }],
            }
        case ActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
            }
        case ActionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id
                    ? { ...item, qty: Number(action.payload.qty) }
                    : item)
            }
        case ActionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }
        default:
            return state;
    }
}