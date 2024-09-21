import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import usersReducer from "./usersSlice"
import appReducer from "./appSlice"
export const rootReducer = combineReducers({
    auth : authReducer,
    users: usersReducer,
    app: appReducer
})
