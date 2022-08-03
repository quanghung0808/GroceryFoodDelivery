import * as ActionTypes from './ActionTypes'

export const handleInputChange = (value, name) => {
    return {
        type: ActionTypes.HANDLE_INPUT_CHANGE,
        name: name,
        value: value
    }
};
export const handleBlur = (name) => {
    return {
        type: ActionTypes.HANDLE_BLUR,
        name: name
    }
};

export const addToCart = (itemID, value) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
            qty: value
        }
    }
};
export const removeFromCart = (itemID) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
};
export const adjustQty = (itemID, value) => {
    return {
        type: ActionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value
        }
    }
};
export const loadCurrentItem = (item) => {
    return {
        type: ActionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
};

export const clearSearch = () => {
    return {
        type: ActionTypes.CLEAR_SEARCH,
    }
};
