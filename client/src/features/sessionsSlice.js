import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSessions = createAsyncThunk("sessions/fetchSessions", () => {
    return fetch("/me")
        .then((response) => response.json())
        .then((data) => data);
})

export const postSession = createAsyncThunk("sessions/postSession", ({ username, password }) => {
    return fetch("/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ username, password })})
        .then((response) => response.json())
        .then((data) => (data))
})

const sessionsSlice = createSlice({
    name: "sessions",
    initialState: {
        entities: null, 
        error: null,
        status: "idle",
    },
    reducers: {
        sessionsAdded(state, action) {
            state.entities = action.payload;
        },
        sessionsDeleted(state) {
            state.entities = null;
        },
    },
    extraReducers: (builder) => (
        builder
        .addCase(fetchSessions.pending, (state) => {
            state.status = "loading";
          })
        .addCase(fetchSessions.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.status = "idle";
          })
        .addCase(postSession.pending, (state) => {
            state.status = "loading";
          })
        .addCase(postSession.fulfilled, (state, action) => {
            if (action.payload.error) {
                state.error = action.payload.error
                state.status = "idle"
            } else {
                state.entities = action.payload;
                state.status = "idle";
                state.errors = []
            }
          })
    )
});

export const { sessionsAdded, sessionsDeleted } = sessionsSlice.actions;

export default sessionsSlice.reducer;