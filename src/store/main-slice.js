import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCarVisible: false,
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        toggleCarVisibility(state) {
            state.isCarVisible = !state.isCarVisible;
        }
    }
});

export const mainActions = mainSlice.actions;

export default mainSlice;