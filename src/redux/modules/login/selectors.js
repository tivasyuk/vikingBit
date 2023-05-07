import { createSelector } from 'reselect';

const selectLoginDomain = (state) => state.login;

export const selectSignInPopup = createSelector(
    selectLoginDomain,
    (loginDomain) => loginDomain.isSignInPopupVisible
);
export const selectRegistrationPopup = createSelector(
    selectLoginDomain,
    (loginDomain) => loginDomain.isRegistrationPopupVisible
);
export const selectForgotPasswordPopup = createSelector(
    selectLoginDomain,
    (loginDomain) => loginDomain.isForgotPasswordPopupVisible
);
export const selectIsLoggedIn = createSelector(
    selectLoginDomain,
    (loginDomain) => loginDomain.isLoggedIn
);
export const selectUserData = createSelector(
    selectLoginDomain,
    (loginDomain) => loginDomain.userData
);
export const selectExchangeHistoryData = createSelector(
    selectLoginDomain,
    (loginDomain) => loginDomain.userExchangeHistoryData
);