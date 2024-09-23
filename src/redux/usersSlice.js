import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
  total: 0,        
  limit: 8,   
  skip:0,
  pages: null  
};


//thunk to fetch users' data
export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async ({ limit, skip }, { rejectWithValue }) => {
    try {   
      const response = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || "Failed to fetch users");
      }
      const data = await response.json();
      console.log(data)
      return data;

    } catch (error) {
      console.error("Network Error:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.users;
        state.total = action.payload.total;
        state.limit = action.payload.limit;
        state.skip = action.payload.skip;
        state.pages = Math.floor(action.payload.total / action.payload.limit)
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Failed to fetch users";
        state.users = [];
      });
  },
});

export default usersSlice.reducer;
