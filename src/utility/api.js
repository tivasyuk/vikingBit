import {SERVER_URL} from "../constants/Constants";

export const getCurrencyList = async () => {
    return await fetch(`${SERVER_URL}/currencyList`)
    .then(response => {
        return response.json();
    }).then(responseData => {
        return responseData;
    });
}