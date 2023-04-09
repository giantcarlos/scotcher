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
        distilleryAdded(state, action) {
            state.entities.push(action.payload);
        },
        distilleryDeleted(state, action) {
            return state.entities.filter((d) => d.id !== action.payload);
        },
    },
    extraReducers: (builder) => (
        builder
        .addCase(fetchDistilleries.pending, (state) => {
            state.status = "loading";
          })
        .addCase(fetchDistilleries.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.status = "idle";
          })
    )
})

export const { distilleryAdded, distilleryDeleted } = distilleriesSlice.actions;

export default distilleriesSlice.reducer;