import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSessions = createAsyncThunk("sessions/fetchSessions", () => {
    return fetch("/me")
        .then((response) => response.json())
        .then((data) => data);
})

const sessionsSlice = createSlice({
    name: "sessions",
    initialState: {
        entities: {}, 
        status: "idle",
    },
    reducer: {
        sessionsAdded(state, action) {
            state.entities = action.payload;
        },
        sessionsDeleted(state) {
            state.entities = {};
        }
    },
    extraReducers: {
        [fetchSessions.pending](state) {
            state.status = "loading";
        },
        [fetchSessions.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "idle"
        },
    },
});

export const { sessionsAdded, sessionsDeleted } = sessionsSlice.actions;

export default sessionsSlice.reducer;