import { SET_ADD_REVIEW_POPUP_STATE} from "./actions";
import {GET_CURRENCY_LIST_COMPLEATE, GET_WALLETS_LIST_COMPLEATE, HIDE_LOADING, SHOW_LOADING} from "../exchange/types";

const initialState = {
    isAddReviewPopupVisible: false,
    loading: true
}

const StateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADD_REVIEW_POPUP_STATE:
            return {
                ...state,
                isAddReviewPopupVisible: action.value
            };
        case GET_CURRENCY_LIST_COMPLEATE:
            return {
                ...state,
                currencyList: action.data
            };
        case GET_WALLETS_LIST_COMPLEATE:
            return {
                ...state,
                walletsList: action.data
            };
        case SHOW_LOADING:
            return {
                ...state,
                loading: true
            };
        case HIDE_LOADING:
            return {
                ...state,
                loading: false
            };
        default: {
            return state;
        }
    }
};

export default StateReducer;