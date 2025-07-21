import React from "react";
import ReactApexChart from "react-apexcharts";

const Charts = () => {
  const users = [
    { id: 1, name: "John Doe", joinedAt: "2025-01", membership: "Premium" },
    { id: 2, name: "Sarah Johnson", joinedAt: "2025-02", membership: "Basic" },
    { id: 3, name: "Mike Chen", joinedAt: "2025-03", membership: "Elite" },
    { id: 4, name: "Emma Davis", joinedAt: "2025-03", membership: "Premium" },
    { id: 5, name: "Alex Kim", joinedAt: "2025-04", membership: "Basic" },
    { id: 6, name: "David Patel", joinedAt: "2025-05", membership: "Premium" },
    { id: 7, name: "Nina Gupta", joinedAt: "2025-06", membership: "Elite" },
    { id: 8, name: "Liam Lee", joinedAt: "2025-06", membership: "Premium" },
    { id: 9, name: "Zoe Thomas", joinedAt: "2025-07", membership: "Basic" }
  ];

  const trainers = [
    { id: 1, name: "Trainer A", joinedAt: "2024-11", specialization: "Yoga" },
    { id: 2, name: "Trainer B", joinedAt: "2025-01", specialization: "Strength" },
    { id: 3, name: "Trainer C", joinedAt: "2025-03", specialization: "Cardio" },
    { id: 4, name: "Trainer D", joinedAt: "2025-05", specialization: "CrossFit" },
    { id: 5, name: "Trainer E", joinedAt: "2025-06", specialization: "HIIT" }
  ];

  // Chart 1: Users vs Trainers Count
  const userTrainerOptions = {
    chart: { type: "bar" },
    xaxis: { categories: ["Users", "Trainers"] },
    colors: ["#00E396", "#008FFB"],
    title: { text: "Users vs Trainers", align: "center" }
  };
  const userTrainerSeries = [
    {
      name: "Count",
      data: [users.length, trainers.length]
    }
  ];

  // Chart 2: Membership Distribution (Donut)
  const membershipCounts = users.reduce(
    (acc, user) => {
      acc[user.membership] = (acc[user.membership] || 0) + 1;
      return acc;
    },
    {}
  );

  const donutOptions = {
    labels: Object.keys(membershipCounts),
    colors: ["#FEB019", "#00E396", "#FF4560"],
    title: { text: "Membership Distribution", align: "center" },
    legend: { position: "bottom" }
  };
  const donutSeries = Object.values(membershipCounts);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      <div className="bg-[#0F172A] p-4 rounded-xl shadow text-black">
        <ReactApexChart
          options={userTrainerOptions}
          series={userTrainerSeries}
          type="bar"
          height={300}
        />
      </div>

      <div className="bg-[#0F172A] p-4 rounded-xl shadow">
        <ReactApexChart
          options={donutOptions}
          series={donutSeries}
          type="donut"
          height={300}
        />
      </div>
    </div>
  );
};

export default Charts;
