import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchNotes = createAsyncThunk("notes/fetchNotes", () => {
    return fetch("/notes")
        .then((response) => response.json())
        .then((data) => data);
})

export const postNote = createAsyncThunk("notes/postNotes", async (formData) => {
    return fetch("/notes", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)})
        .then((response) => response.json())
        .then((data) => (data))
})

const notesSlice = createSlice({
    name: "notes",
    initialState: {
        entities: [], 
        errors: null,
        updated: false,
        status: "idle",
    },
    reducers: {
        stateUpdateReset(state) {
            state.updated = false;
        },
    },
    extraReducers: (builder) => (
        builder
        .addCase(fetchNotes.pending, (state) => {
            state.status = "loading";
          })
        .addCase(fetchNotes.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.status = "idle";
          })
        .addCase(postNote.pending, (state) => {
            state.status = "loading";
          })
        .addCase(postNote.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.errors = action.payload.errors
                state.status = "idle"
            } else {
                state.entities.push(action.payload);
                state.status = "idle";
                state.updated = true;
                state.errors = null;
            }
          })  
    )
})

export const { stateUpdateReset } = notesSlice.actions;

export default notesSlice.reducer;