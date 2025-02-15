"use client"; // Only for Next.js 13+ App Router

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
  { month: "Jan", energy: 450 },
  { month: "Feb", energy: 420 },
  { month: "Mar", energy: 460 },
  { month: "Apr", energy: 500 },
  { month: "May", energy: 480 },
];

const EnergyConsumption = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-lg mx-auto w-[70%]">
      <h2 className="text-xl font-bold text-center mb-4">
        Energy Consumption Over Time
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
            dataKey="energy"
            stroke="#007BFF"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnergyConsumption;
