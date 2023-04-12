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
        loggedIn: false,
        updated: false,
        error: null,
        status: "idle",
    },
    reducers: {
        sessionsAdded(state, action) {
            state.loggedIn = true;
            state.entities = action.payload;
        },
        sessionsDeleted(state) {
            state.entities = null;
            state.loggedIn = false;
        },
        stateUpdateReset(state) {
            state.updated = false;
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
            state.loggedIn = true;
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
                state.loggedIn = true;
                state.updated = true;
                state.status = "idle";
                state.errors = []
            }
          })
    )
});

export const { sessionsAdded, sessionsDeleted, stateUpdateReset } = sessionsSlice.actions;

export default sessionsSlice.reducer;