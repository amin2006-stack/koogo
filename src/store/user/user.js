/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk for registering a user
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/users", arg); // Updated endpoint
      if (res.status !== 201) {
        throw new Error("Unexpected response status");
      }
      return res.data;
    } catch (err) {
      console.error("Error response:", err.response?.data);
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Thunk for logging in a user
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/login", arg); // Standard JSON-server-auth endpoint
      if (res.status !== 200) {
        throw new Error("Unexpected response status");
      }
      return res.data;
    } catch (err) {
      console.error("Error response:", err.response?.data);
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// User slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload || "Registration failed.";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload || "Login failed.";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      });
  },
});

// Export actions and reducer
export const { logOut } = userSlice.actions;
export default userSlice.reducer;
