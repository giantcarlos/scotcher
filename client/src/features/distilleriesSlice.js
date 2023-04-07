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
    reducers: {
    },
    extraReducers: {
        [fetchDistilleries.pending](state) {
            state.status = "loading";
        },
        [fetchDistilleries.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "idle"
        },
    },
})

export const { distilleryAdded } = distilleriesSlice.actions;

export default distilleriesSlice.reducer;