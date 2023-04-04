import createSlice from "@reduxjs/toolkit";

const distillerySlice = createSlice({
    name: "distilleries",
    initialState: {
        entities: [], 
        status: "idle",
    },
    reducer: {
        distilleryAdded(state, action) {
            state.entities.push(action.payload);
        }
    },
})

export const { distilleryAdded } = distillerySlice.actions;

export default distillerySlice.reducer;