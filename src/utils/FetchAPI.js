
import { baseUrl } from "../shared/baseUrl";
export const fetchFood = async () => {
    const food = fetch(baseUrl + 'food')
        .then(response => response.json());
    return await food;
};

export const fetchCategory = async () => {
    const category = fetch(baseUrl + 'categories')
        .then(response => response.json());
    return await category;
};

export const fetchComment = async () => {
    const comment = fetch(baseUrl + 'comments')
        .then(response => response.json());
    return await comment;
};