import { useState } from "react";
import { createStore } from "redux"
// import { Food } from "../shared/food";
import { fetchCategory, fetchFood } from "../utils/FetchFood";
import { Reducer } from './Reducer'
const Food = [];
fetchFood().then(value => value.map((i) => {
    Food.push(i);
}));
const Category = [];
fetchCategory().then(value => value.map((i) =>{
    Category.push(i);
}));
export const INITIAL_STATE = {
    name: '',
    telnum: '',
    email: '',
    address: '',
    touched: {
        name: false,
        telnum: false,
        email: false,
        address: false,
    },
    category: Category,
    food: Food,
    cart: [],
    currentItem: null,
    search: ''
}
export const configureStore = () => {
    const store = createStore(Reducer, INITIAL_STATE);
    return store;
}       