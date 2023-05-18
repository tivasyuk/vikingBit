import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from 'redux-saga'
import createRootReducer from "./modules/reducers";
// import rootSaga from "./sagas/rootSaga";

// const sagaMiddleware = createSagaMiddleware()

export const storeContainer = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    reducer: createRootReducer,
});

// sagaMiddleware.run(rootSaga);