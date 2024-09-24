// I created this slice for general app states like sidemenu state, etc.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  miniMenu: false
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleMini: (state) => {
      state.miniMenu = !state.miniMenu;
    },
  },
});

export const { toggleMenu, toggleMini } = appSlice.actions;

export default appSlice.reducer;
