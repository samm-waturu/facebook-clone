import {createSlice} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface UserState {
    user: any
}
const initialState: UserState = {
    user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       login: (state,action) => {
           state.user = action.payload
       },

       logout: (state) => {
           state.user = null
       }
    },
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.auth,
            };
        },
    },
})

export const { login, logout } = userSlice.actions;

// selectors - pull a user from the data layer

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;