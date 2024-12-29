import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './useProjectSlice';

const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});

export default store;
