import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBottles = createAsyncThunk("bottles/fetchBottles", () => {
    return fetch("/bottles")
        .then((response) => response.json())
        .then((data) => data);
})

export const postBottle = createAsyncThunk("bottles/postBottle", (formData) => {
    return fetch("/bottles", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)})
        .then((response) => response.json())
        .then((data) => (data))
})

export const patchBottle = createAsyncThunk("bottles/patchBottle", ({formData, id}) => {
    return fetch(`/bottles/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)})
        .then((response) => response.json())
        .then((data) => (data))
})

export const deleteBottle = createAsyncThunk("bottles/deleteBottle", (id) => {
    return fetch(`/bottles/${id}`, { method: "DELETE" })
})

const bottlesSlice = createSlice({
    name: "bottles",
    initialState: {
        entities: [],
        errors: null,
        status: "idle",
    },
    reducers: {
        // bottleDeleted(state, action) {
        //     state.entities = state.entities.filter((b) => b.id !== action.meta.arg);
        // },
    },
    extraReducers: (builder) => (
        builder
        .addCase(fetchBottles.pending, (state) => {
            state.status = "loading";
          })
        .addCase(fetchBottles.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.status = "idle";
          })
        .addCase(postBottle.pending, (state) => {
            state.status = "loading";
          })
        .addCase(postBottle.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.errors = action.payload.errors
                state.status = "idle"
            } else {
                state.entities.push(action.payload);
                state.status = "idle";
                state.errors = []
            }
          })
        .addCase(patchBottle.pending, (state) => {
            state.status = "loading";
          })
        .addCase(patchBottle.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.errors = action.payload.errors
                state.status = "idle"
            } else {
                state.entities = state.entities.map(b => b.id === action.payload.id ? {...b, ...action.payload} : b);
                state.status = "idle";
                state.errors = []
            }
          })
        .addCase(deleteBottle.pending, (state) => {
            state.status = "loading";
          })
        .addCase(deleteBottle.fulfilled, (state, action) => {
            state.status = "idle";
            state.entities.filter((b) => b.id !== action.meta.arg);
          })
    )
})

export const { bottleDeleted } = bottlesSlice.actions;

export default bottlesSlice.reducer;