import {SET_ACTIVE_PAGE, SET_ADD_REVIEW_POPUP_STATE} from "./actions";
import {PAGES} from "../../../constants/Constants";
import { GET_CURRENCY_LIST_COMPLEATE } from "../exchange/types";

const initialState = {
    activePage: PAGES.PAGE_MAIN,
    isAddReviewPopupVisible: false
}

const StateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_PAGE:
            return {
                ...state,
                activePage: action.value
            };
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
        default: {
            return state;
        }
    }
};

export default StateReducer;