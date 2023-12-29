// slices/metricsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMetrics = createAsyncThunk(
  "metrics/fetchMetrics",
  async (country) => {
    const response = await axios.get(` https://emojihub.yurace.pro/api/all`);
    return response.data;
  }
);

export const fetchMetricsByCategory = createAsyncThunk(
  "metrics/fetchMetricsByCategory",
  async (category) => {
    try {
      const response = await axios.get(
        `https://emojihub.yurace.pro/api/category/${"grinning-face"}`
      );
      return response.data;
    } catch (error) {
      throw Error(`Failed to fetch metrics for category: ${category}`);
    }
  }
);

const metricsSlice = createSlice({
  name: "metrics",
  initialState: {
    metricsList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMetrics.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMetrics.fulfilled, (state, action) => {
        state.loading = false;
        state.metricsList = action.payload;
      })
      .addCase(fetchMetrics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default metricsSlice.reducer;
