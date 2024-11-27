/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "post/registerUser",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/users", arg);
      if (res.status !== 201) {
        throw new Error("Unexpected response status");
      }
      return res.data; // Adjust based on actual server response
    } catch (err) {
      console.error("Error response:", err.response?.data);
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const user = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default user.reducer;
