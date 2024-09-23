// I created this slice for general app states like sidemenu state, etc.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = appSlice.actions;

export default appSlice.reducer;
