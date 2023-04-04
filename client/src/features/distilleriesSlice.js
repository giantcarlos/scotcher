import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDistilleries = createAsyncThunk("distilleries/fetchDistilleries", () => {
    return fetch("/distilleries")
        .then((response) => response.json())
        .then((data) => data);
})

const distilleriesSlice = createSlice({
    name: "distilleries",
    initialState: {
        entities: [], 
        status: "idle",
    },
    reducer: {
        distilleryAdded(state, action) {
            state.entities.push(action.payload);
        }
    },
})

export const { distilleryAdded } = distilleriesSlice.actions;

export default distilleriesSlice.reducer;