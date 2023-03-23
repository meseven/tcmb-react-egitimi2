import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useThemeStore = (set) => ({
  theme: 'dark',
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
});

export default create(devtools(persist(useThemeStore, { name: 'ThemeStore' })));
