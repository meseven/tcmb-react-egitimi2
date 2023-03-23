import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    activeTheme: 'dark',
  },
  reducers: {
    toggleTheme: (state) => {
      state.activeTheme = state.activeTheme === 'dark' ? 'light' : 'dark';
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
