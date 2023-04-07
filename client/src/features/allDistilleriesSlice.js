import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllDistilleries = createAsyncThunk("allDistilleries/fetchAllDistilleries", () => {
    return fetch("/all")
        .then((response) => response.json())
        .then((data) => data);
})

const allDistilleriesSlice = createSlice({
    name: "allDistilleries",
    initialState: {
        entities: [], 
        status: "idle",
    },
    reducers: {
        allDistilleryAdded(state, action) {
            state.entities.push(action.payload);
        }
    },
    extraReducers: {
        [fetchAllDistilleries.pending](state) {
            state.status = "loading";
        },
        [fetchAllDistilleries.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "idle"
        },
    },
})

export const { allDistilleryAdded } = allDistilleriesSlice.actions;

export default allDistilleriesSlice.reducer;