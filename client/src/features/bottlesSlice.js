import createSlice from "@reduxjs/toolkit";

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

export const { bottleAdded, bottleUpdated } = bottleSlice.actions;

export default bottlesSlice.reducer;