import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import fetchReducer from './slices/fetchSlice';
import taskReducer from './slices/taskSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fetch: fetchReducer,
    task: taskReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
