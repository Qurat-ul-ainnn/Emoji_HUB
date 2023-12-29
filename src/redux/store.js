import { configureStore } from "@reduxjs/toolkit";
import metricsReducer from "./slices/MetricSlices";

const store = configureStore({
  reducer: {
    metrics: metricsReducer,
  },
});

export default store;
