import {configureStore} from "@reduxjs/toolkit";
import exp from "constants";
import {countReducer} from "./slices/countSlice";
import {userReducer} from "./slices/userSlice";

const store = configureStore({
    reducer: {
        count: countReducer,
        users: userReducer
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}

export {
    store
}