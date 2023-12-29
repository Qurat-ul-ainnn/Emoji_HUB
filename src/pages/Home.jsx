import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMetrics } from "../redux/slices/MetricSlices";

const HomePage = () => {
  const dispatch = useDispatch();
  const metricsList = useSelector((state) => state.metrics.metricsList);
  const loading = useSelector((state) => state.metrics.loading);
  const error = useSelector((state) => state.metrics.error);

  useEffect(() => {
    dispatch(fetchMetrics());
  }, [dispatch]);

  return (
    <div>
      <h2>Metrics List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          {metricsList.map((metric) => (
            <div key={metric.name}>
              <h3>{metric.name}</h3>
              <p>Category: {metric.category}</p>
              <p>Group: {metric.group}</p>
              <p>HTML Code: {metric.htmlCode}</p>
              <p>Unicode: {metric.unicode}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
