import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import usersReducer from "./usersSlice"
export const rootReducer = combineReducers({
    auth : authReducer,
    users: usersReducer
})
