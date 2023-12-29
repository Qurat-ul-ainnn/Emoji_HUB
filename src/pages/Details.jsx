import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMetricsByCategory } from "../redux/slices/MetricSlices";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const metricsList = useSelector((state) => state.metrics.metricsList);
  const loading = useSelector((state) => state.metrics.loading);
  const error = useSelector((state) => state.metrics.error);

  useEffect(() => {
    dispatch(fetchMetricsByCategory(category));
  }, [dispatch, category]);

  const selectedMetrics = metricsList.filter(
    (metric) => metric.category === category
  );

  return (
    <div>
      <h2>Details for Category: {category}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : selectedMetrics.length === 0 ? (
        <p>No data available for {category}</p>
      ) : (
        <div>
          {selectedMetrics.map((metric) => (
            <div key={metric.name}>
              <h3>{metric.name}</h3>
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

export default DetailsPage;
