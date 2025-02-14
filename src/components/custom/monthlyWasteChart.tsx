"use client"; // Only for Next.js 13+ App Router

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", waste: 500 },
  { month: "Feb", waste: 450 },
  { month: "Mar", waste: 600 },
  { month: "Apr", waste: 700 },
  { month: "May", waste: 650 },
];

const MonthlyWasteChart = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-lg mx-auto w-[70%] ">
      <h2 className="text-xl font-bold text-center mb-4">
        Monthly Waste Generation
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="waste" fill="#FF5733" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyWasteChart;
