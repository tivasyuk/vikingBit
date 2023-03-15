import {SET_ACTIVE_PAGE, SET_ADD_REVIEW_POPUP_STATE, SET_EXCHANGE_RATE, SET_EXCHANGE_VALUE} from "./actions";
import Constants from "../../../constants/Constants";

const initialState = {
    activePage: Constants.PAGE_MAIN,
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
        default: {
            return state;
        }
    }
};

export default StateReducer;