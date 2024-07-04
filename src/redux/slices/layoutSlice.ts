"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLayout = createAsyncThunk(
  "layout/fetchNavItems",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.BACKEND_URL}/layout/get-layout`,
        {
          params: {
            type: "navItems",
          },
        }
      );
      return response.data.layout.navItems;
    } catch (error: any) {
      console.error(error.message);
      throw error;
    }
  }
);

const initialState: any = {
  entities: {},
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLayout.fulfilled, (state, action) => {
      state.entities = action.payload;
    });
  },
});

export const {} = layoutSlice.actions;
export default layoutSlice.reducer;
