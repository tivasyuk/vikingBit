// import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
// import thunk from "redux-thunk";
//
// import rootReducers from "./modules/reducers";
//
// const configureStore = (reducers = {}, preloadedState = {}, middlewares = []) => createStore(
//     combineReducers(
//         ...rootReducers,
//         ...reducers
//     ),
//     preloadedState,
//     compose(
//         applyMiddleware(
//             ...middlewares,
//             thunk
//         ),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );
//
// export default configureStore;

import {createStore, compose} from 'redux';
import createReducer from "./modules/reducers";


function configureStore() {
    const composeEnhancers = compose;

    return createStore(
        createReducer(),
        composeEnhancers()
    );
}

export default configureStore;