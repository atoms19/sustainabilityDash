"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Jan", waste: 200 },
  { name: "Feb", waste: 150 },
  { name: "Mar", waste: 300 },
  { name: "Apr", waste: 400 },
  { name: "May", waste: 350 },
  { name: "Jun", waste: 500 },
];

const WasteReductionChart: React.FC = () => {
  return (
    <Card className="p-4 shadow-lg rounded-2xl">
      <CardHeader>
        <CardTitle>Waste Reduction</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="waste" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default WasteReductionChart;
