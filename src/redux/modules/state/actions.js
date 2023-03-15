export const SET_ACTIVE_PAGE = 'state/SET_ACTIVE_PAGE';
export const setActivePage = value => {
    return {
        type: SET_ACTIVE_PAGE,
        value
    };
};

export const SET_ADD_REVIEW_POPUP_STATE = 'state/SET_ADD_REVIEW_POPUP_STATE';
export const setAddReviewPopupState = value => {
    return {
        type: SET_ADD_REVIEW_POPUP_STATE,
        value
    };
};