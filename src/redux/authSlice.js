import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  error: null,
};

//thunk for user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || "Login failed");
      }
      const data = await response.json();
      localStorage.setItem("token", data.accessToken);
      console.log(data);
      return data;
    } catch (error) {
      console.error("Network Error:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

//thunk to initialize token check or cached user
export const initializeAuth = createAsyncThunk(
  "auth/initializeAuth",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const error = await response.json();
          return rejectWithValue(error.message || "Failed to fetch user info");
        }

        const data = await response.json();
        console.log(data);

        return {
          isAuthenticated: true,
          user: data,
        };
      } else {
        return {
          isAuthenticated: false,
          user: null,
        };
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue({
        isAuthenticated: false,
        user: null,
      });
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeAuth.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = true;

      })
      .addCase(initializeAuth.fulfilled, (state, action) => {
        state.isAuthenticated = action.payload.isAuthenticated;
        state.user = action.payload.user;
        state.isLoading = false;
      })
      .addCase(initializeAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
