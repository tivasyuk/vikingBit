// import { takeEvery, put } from 'redux-saga';
// import { PUT_ORDER_EXCHANGE_DATA } from '../modules/exchange/types';
// import { setLoadingAnimation } from '../modules/state/actions';
// import axios from 'axios';
// import { SERVER_URL } from '../../constants/Constants';

// async function putOrderData(data) {
//     axios.put(`${SERVER_URL}/orders`, data)
// }

// function* exchangeWorker() {
//     yield put(setLoadingAnimation);
// }

// export default function* exchangeSaga() {
//     yield takeEvery(PUT_ORDER_EXCHANGE_DATA, exchangeWorker);
// }