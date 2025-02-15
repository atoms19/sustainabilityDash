"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Feb 1", usage: 120 },
  { date: "Feb 2", usage: 110 },
  { date: "Feb 3", usage: 130 },
  { date: "Feb 4", usage: 90 },
  { date: "Feb 5", usage: 100 },
  { date: "Feb 6", usage: 80 },
  { date: "Feb 7", usage: 95 },
];

const WaterConsumptionChart = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-xl w-[70%]">
      <h2 className="text-lg font-semibold mb-4">
        Water Consumption Over Time
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="usage"
            stroke="#3498db"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WaterConsumptionChart;
