import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    user: {
        name: null,
        phoneNumber: null
    },
    isLoading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLoginRequest(state) {
            state.isLoading = true;
            state.error = null;
        },
        userLoginSuccess(state, action) {
            const user = action.payload
            state.isLoading = false;
            state.user = {...state.user, ...user}
        },
        userLoginFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        userLogout(state) {
            state.user = null;
        },
    },
});


export const selectUser = (state) => state.user.user
export const selectUserLoading = (state) => state.user.isLoading;
export const selectUserError = (state) => state.user.error;

export const { userLoginSuccess } = userSlice.actions;

export default userSlice.reducer;