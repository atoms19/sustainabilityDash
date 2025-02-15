"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", emissions: 500 },
  { month: "Feb", emissions: 480 },
  { month: "Mar", emissions: 450 },
  { month: "Apr", emissions: 430 },
  { month: "May", emissions: 400 },
];

const CarbonEmissionChart = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-lg mx-auto w-[70%]">
      <h2 className="text-xl font-bold text-center mb-4">
        Carbon Emissions Over Time
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="emissions"
            stroke="#FF5733"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CarbonEmissionChart;
