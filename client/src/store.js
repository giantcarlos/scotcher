import { configureStore } from '@reduxjs/toolkit';

import bottlesReducer from './features/bottlesSlice'
import distilleriesReducer from './features/distilleriesSlice'
import sessionsReducer from './features/sessionsSlice'

const store = configureStore({
    reducer: {
        bottles: bottlesReducer,
        distilleries: distilleriesReducer,
        sessions: sessionsReducer,
    },
});

export default store;