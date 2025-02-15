"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", saved: 500, used: 3000 },
  { month: "Feb", saved: 700, used: 2800 },
  { month: "Mar", saved: 650, used: 2900 },
  { month: "Apr", saved: 800, used: 2700 },
];

const WaterSavingsChart = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-xl w-[70%]">
      <h2 className="text-lg font-semibold mb-4">Water Usage vs Savings</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="used" fill="#3498db" name="Water Used" />
          <Bar dataKey="saved" fill="#2ecc71" name="Water Saved" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WaterSavingsChart;
