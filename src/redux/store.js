import { configureStore } from "@reduxjs/toolkit";
import createRootReducer from "./modules/reducers";

export const storeContainer = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    reducer: createRootReducer,
});