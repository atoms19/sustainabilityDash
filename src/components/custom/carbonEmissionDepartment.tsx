"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Manufacturing", value: 50, color: "#FF5733" },
  { name: "IT Operations", value: 20, color: "#007BFF" },
  { name: "Transport", value: 15, color: "#FFC107" },
  { name: "Office Facilities", value: 10, color: "#28A745" },
  { name: "Others", value: 5, color: "#6C757D" },
];

const CarbonEmissionDepartment = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-lg mx-auto w-[70%]">
      <h2 className="text-xl font-bold text-center mb-4">
        Carbon Emissions by Department
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

export default CarbonEmissionDepartment;
