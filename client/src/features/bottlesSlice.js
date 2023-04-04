import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBottles = createAsyncThunk("bottles/fetchBottles", () => {
    return fetch("/bottles")
        .then((response) => response.json())
        .then((data) => data);
})

const bottlesSlice = createSlice({
    name: "bottles",
    initialState: {
        entities: [], 
        status: "idle",
    },
    reducer: {
        bottleAdded(state, action) {
            state.entities.push(action.payload);
        },
        bottleUpdated(state, action) {
            const bottle = state.entities.find((bottle) => bottle.id === action.payload.id);
            bottle.url = action.payload.url;
        }
    },
})

export const { bottleAdded, bottleUpdated } = bottlesSlice.actions;

export default bottlesSlice.reducer;