import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
      console.log(data);
      return data;
    } catch (error) {
      console.error("Network Error:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

//thunk to initialize token check/ cached user
export const initializeAuth = createAsyncThunk(
  "auth/initializeAuth",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          // credentials: 'include'
        });
        console.log(response);
        return {
          isAuthenticated: true,
          user: data.user,
          role: data.user.role,
          storedToken: token,
        };
      } else {
        return {
          isAuthenticated: false,
          user: null,
          role: null,
        };
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue({
        isAuthenticated: false,
        user: null,
        role: null,
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
      .addCase(initializeAuth.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(initializeAuth.fulfilled, (state, action) => {
        state.isAuthenticated = true
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;

      })
      .addCase(initializeAuth.rejected, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.isLoading = false;
        state.error = null;
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
