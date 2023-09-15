import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCarVisible: false,
    statusMessage: null,
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        toggleCarVisibility(state) {
            state.isCarVisible = !state.isCarVisible;
        },
        showStatusMessage(state, action) {
            state.statusMessage = {
               status: action.payload.status,
               title: action.payload.title,
               message: action. payload.message,
            };
        }
    }
});

export const mainActions = mainSlice.actions;

export default mainSlice;