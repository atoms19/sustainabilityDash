"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define the data type for better TypeScript support
interface DataPoint {
  name: string;
  energy: number;
  waste: number;
}

// Sample sustainability data
const data: DataPoint[] = [
  { name: "Jan", energy: 400, waste: 200 },
  { name: "Feb", energy: 300, waste: 150 },
  { name: "Mar", energy: 500, waste: 300 },
  { name: "Apr", energy: 700, waste: 400 },
  { name: "May", energy: 600, waste: 350 },
  { name: "Jun", energy: 800, waste: 500 },
];

const SustainabilityChart: React.FC = () => {
  return (
    <Card className="p-4 shadow-lg rounded-2xl">
      <CardHeader>
        <CardTitle>Sustainability Time-line</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="energy"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="waste"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SustainabilityChart;
