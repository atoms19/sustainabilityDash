"use client"; // Only for Next.js 13+ App Router

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Plastic", value: 120, color: "#FF5733" },
  { name: "Organic", value: 200, color: "#28A745" },
  { name: "Metal", value: 50, color: "#007BFF" },
  { name: "Glass", value: 80, color: "#FFC107" },
  { name: "Paper", value: 150, color: "#6C757D" },
];

const WastePieChart = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-lg mx-auto w-[70%]">
      <h2 className="text-xl font-bold text-center mb-4">
        Waste Composition (Pie Chart)
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WastePieChart;
