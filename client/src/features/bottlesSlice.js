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
    reducers: {
        bottleAdded(state, action) {
            state.entities.push(action.payload);
        },
        bottleUpdated(state, action) {
            const bottle = state.entities.find((bottle) => bottle.id === action.payload.id);
            bottle = action.payload;
        },
        bottleDeleted(state, action) {
            const { id } = action.payload;
            state.entities = state.entities.find((bottle) => bottle.id !== id);
        }
    },
    extraReducers: {
        [fetchBottles.pending](state) {
            state.status = "loading";
        },
        [fetchBottles.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "idle"
        },
    },
})

export const { bottleAdded, bottleUpdated, bottleDeleted } = bottlesSlice.actions;

export default bottlesSlice.reducer;