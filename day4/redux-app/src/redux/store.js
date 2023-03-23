import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import themeSlice from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    theme: themeSlice,
  },
});
