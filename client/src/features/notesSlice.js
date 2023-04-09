import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

export const fetchNotes = createAsyncThunk("notes/fetchNotes", () => {
    return fetch("/notes")
        .then((response) => response.json())
        .then((data) => data);
})

export const postNote = createAsyncThunk("notes/postNotes", (formData) => {
    // const navigate = useNavigate()
    return fetch("/notes", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)})
        .then((response) => response.json())
        .then((data) => noteAdded(data))
        // .then(navigate(`/bottles/${formData.bottle_id}`))
})

const notesSlice = createSlice({
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
            state.entities = action.payload;
            state.status = "idle";
          })  
    )
})

export const { noteAdded } = notesSlice.actions;

export default notesSlice.reducer;