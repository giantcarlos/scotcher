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
        .then((data) => bottleAdded(data))
})

export const patchBottle = createAsyncThunk("bottles/patchBottle", ({formData, id}) => {
    return fetch(`/bottles/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)})
        .then((response) => response.json())
        .then((data) => bottleUpdated(data))
})

export const deleteBottle = createAsyncThunk("bottles/deleteBottle", (id) => {
    return fetch(`/bottles/${id}`, { method: "DELETE" })
        .then((response) => response.json())
        .then((data) => bottleDeleted(data))
})

const bottlesSlice = createSlice({
    name: "bottles",
    initialState: {
        entities: [], 
        status: "idle",
    },
    reducers: {
        bottleAdded(state, action) {
            state.entities.push(action.payload);
        },
        bottleUpdated(state, action) {
            state.entities = state.entities.map(b => b.id === action.payload.id ? {...b, ...action.payload} : b);
        },
        bottleDeleted(state, action) {
            state.entities = state.entities.filter((b) => b.id !== action.payload);
        },
    },
    extraReducers: {
        [fetchBottles.pending](state) {
            state.status = "loading";
        },
        [fetchBottles.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "idle";
        },
        [postBottle.pending](state) {
            state.status = "loading";
        },
        [postBottle.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "idle";
        },
        [patchBottle.pending](state) {
            state.status = "loading";
        },
        [patchBottle.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "idle";
        },
        [deleteBottle.pending](state) {
            state.status = "loading";
        },
        [deleteBottle.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "idle";
        },
    },
})

export const { bottleAdded, bottleUpdated, bottleDeleted } = bottlesSlice.actions;

export default bottlesSlice.reducer;