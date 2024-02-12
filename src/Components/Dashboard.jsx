import React from "react";
import { distributors } from "../mockData";
import DistributorMetrics from "../Components/DistributorMetrics";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {distributors.map((distributor) => (
        <DistributorMetrics key={distributor.id} distributor={distributor} />
      ))}
    </div>
  );
};

export default Dashboard;
