import {SERVER_URL} from "../constants/Constants";

export const getCurrencyList = async () => {
    return await fetch(`${SERVER_URL}/currencyList`).then(response => {
        return response.json();
    }).then(responseData => {
        return responseData;
    });
}

export const setOrderExchangeData = async (data) => {
    // const orderResponse = await fetch(`${SERVER_URL}/order`, {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // }).then(response => {
    //     return response.json();
    // }).then(responseData => {
    //     return responseData;
    // })
}