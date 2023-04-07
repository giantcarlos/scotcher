import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchNotes = createAsyncThunk("notes/fetchNotes", () => {
    return fetch("/notes")
        .then((response) => response.json())
        .then((data) => data);
})

const distilleriesSlice = createSlice({
    name: "notes",
    initialState: {
        entities: [], 
        status: "idle",
    },
    reducers: {
        noteAdded(state, action) {
            state.entities.push(action.payload);
        }
    },
    extraReducers: {
        [fetchNotes.pending](state) {
            state.status = "loading";
        },
        [fetchNotes.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "idle"
        },
    },
})

export const { noteAdded } = notesSlice.actions;

export default notesSlice.reducer;