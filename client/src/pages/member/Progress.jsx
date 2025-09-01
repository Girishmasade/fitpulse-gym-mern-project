import React from "react";
import Chart from "react-apexcharts";
import { motion } from "framer-motion";
import { Target, TrendingUp, CircleCheckBig, Clock, Trophy } from "lucide-react";

const Progress = () => {
  // 📊 Example Bar Chart
  const barOptions = {
    chart: { type: "bar", toolbar: { show: false } },
    plotOptions: { bar: { horizontal: true, borderRadius: 6 } },
    xaxis: { categories: ["Goal A", "Goal B", "Goal C", "Goal D"] },
    colors: ["#22c55e"],
    dataLabels: { enabled: true, formatter: (val) => `${val}%` },
  };
  const barSeries = [{ name: "Progress", data: [70, 45, 90, 30] }];

  // 🍩 Example Donut Chart
  const donutOptions = {
    chart: { type: "donut" },
    labels: ["Completed", "In Progress", "Pending"],
    colors: ["#22c55e", "#f59e0b", "#ef4444"],
    legend: { position: "bottom" },
  };
  const donutSeries = [50, 30, 20];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
      {/* Row 1: Card + Bar Chart */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-2xl shadow-2xl text-white flex flex-col justify-between"
      >
        <div className="flex items-center gap-3">
          <Target className="w-10 h-10 text-white drop-shadow-md" />
          <h2 className="text-2xl font-bold">Overall Progress</h2>
        </div>
        <p className="text-sm text-green-100 mt-2">
          Tracking overall performance across all goals.
        </p>

        <div className="mt-6 space-y-2">
          <p className="text-4xl font-extrabold drop-shadow-lg">74%</p>
          <p className="text-green-200">Average Completion</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
          <div className="bg-white/20 p-3 rounded-lg text-center">
            <p className="text-lg font-bold">12</p>
            <p className="text-green-100">Total Goals</p>
          </div>
          <div className="bg-white/20 p-3 rounded-lg text-center">
            <p className="text-lg font-bold">9</p>
            <p className="text-green-100">Completed</p>
          </div>
          <div className="bg-white/20 p-3 rounded-lg text-center">
            <p className="text-lg font-bold">3</p>
            <p className="text-green-100">Ongoing</p>
          </div>
          <div className="bg-white/20 p-3 rounded-lg text-center">
            <p className="text-lg font-bold">2 days</p>
            <p className="text-green-100">Next Deadline</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900 p-6 rounded-2xl shadow-lg"
      >
        <Chart options={barOptions} series={barSeries} type="bar" height={300} />
      </motion.div>

      {/* Row 2: Donut Chart + Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gray-900 p-6 rounded-2xl shadow-lg"
      >
        <Chart options={donutOptions} series={donutSeries} type="donut" height={300} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-2xl shadow-2xl text-white flex flex-col justify-between"
      >
        <div className="flex items-center gap-3">
          <TrendingUp className="w-10 h-10 text-white drop-shadow-md" />
          <h2 className="text-2xl font-bold">Goal Breakdown</h2>
        </div>
        <p className="text-sm text-indigo-100 mt-2">
          Status of your current goals and achievements.
        </p>

        <div className="mt-6 space-y-3">
          <span className="flex items-center gap-2">
            <CircleCheckBig className="text-green-300" />{" "}
            <span className="font-bold">50% Completed</span>
          </span>
          <span className="flex items-center gap-2">
            <Clock className="text-yellow-300" />{" "}
            <span className="font-bold">30% In Progress</span>
          </span>
          <span className="flex items-center gap-2">
            <Trophy className="text-red-300" />{" "}
            <span className="font-bold">20% Pending</span>
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
          <div className="bg-white/20 p-3 rounded-lg text-center">
            <p className="text-lg font-bold">5</p>
            <p className="text-indigo-100">Weekly Streak</p>
          </div>
          <div className="bg-white/20 p-3 rounded-lg text-center">
            <p className="text-lg font-bold">88%</p>
            <p className="text-indigo-100">Consistency</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Progress;
