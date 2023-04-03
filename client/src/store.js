import { configureStore } from '@reduxjs/toolkit';

import bottlesReducer from './features/bottles/bottlesSlice'

const store = configureStore({
    reducer: {
        bottles: bottlesReducer,
    },
});

export default store;