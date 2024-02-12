import React from "react";

const DistributorMetrics = ({ distributor }) => {
  return (
    <div className="distributor-metrics">
      <h2>{distributor.name}</h2>
      <p>Last Month's Shipment: {distributor.lastMonthShipment}</p>
      <p>Forecasted Shipment: {distributor.forecastedShipment}</p>
      <p>YTD Average Shipment: {distributor.ytdAverageShipment}</p>
    </div>
  );
};

export default DistributorMetrics;
