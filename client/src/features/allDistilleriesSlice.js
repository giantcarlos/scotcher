import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllDistilleries = createAsyncThunk("allDistilleries/fetchAllDistilleries", () => {
    return fetch("/all")
        .then((response) => response.json())
        .then((data) => data);
})

export const postAllDistillery = createAsyncThunk("distilleries/postDistillery", (name) => {
    return fetch("/distilleries", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({name}),
    })
        .then((response) => response.json())
        .then((data) => (data));
})

const allDistilleriesSlice = createSlice({
    name: "allDistilleries",
    initialState: {
        entities: [], 
        errors: [],
        status: "idle",
    },
    reducers: {
    },
    extraReducers: (builder) => (
        builder
        .addCase(fetchAllDistilleries.pending, (state) => {
            state.status = "loading";
          })
        .addCase(fetchAllDistilleries.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.status = "idle";
          })
        .addCase(postAllDistillery.pending, (state) => {
            state.status = "loading";
          })
        .addCase(postAllDistillery.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.errors = action.payload.errors
                state.status = "idle"
            } else {
                state.entities.push(action.payload);
                state.status = "idle";
                state.errors = []
            }
          })
    )
})

export const { allDistilleryAdded } = allDistilleriesSlice.actions;

export default allDistilleriesSlice.reducer;