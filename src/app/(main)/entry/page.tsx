"use client";

import { useForm } from "react-hook-form";

export default function MachineSustainabilityForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle API submission here
  };

  return (
    <div className="max-w-2xl mx-auto p-6 shadow-xl border border-gray-200 rounded-2xl bg-white w-[80%] mb-8">
      <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
        Machine Sustainability Entry
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-gray-600">Voltage (V)</label>
          <input
            type="number"
            {...register("voltage", { valueAsNumber: true })}
            placeholder="Enter voltage in Volts"
            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-600">Water Usage (Liters)</label>
          <input
            type="number"
            {...register("waterUsage", { valueAsNumber: true })}
            placeholder="Enter water usage in Liters"
            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-600">Carbon Emissions (kg CO₂)</label>
          <input
            type="number"
            {...register("carbonEmissions", { valueAsNumber: true })}
            placeholder="Enter CO₂ emissions in kg"
            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-600">Waste Produced (kg)</label>
          <input
            type="number"
            {...register("wasteProduced", { valueAsNumber: true })}
            placeholder="Enter waste in kg"
            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-primary/80 hover:bg-primary/100 text-white font-semibold py-2 rounded-lg transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
