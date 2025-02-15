import WaterConsumptionChart from "@/components/custom/waterCharts/waterConsumption";
import "/public/river.svg";

import Image from "next/image";
import WaterSavingsChart from "@/components/custom/waterCharts/waterSavings";

export default function rainpage() {
  return (
    <div
      style={{
        backgroundImage: "url('/river.svg')",
        backgroundSize: "cover",
      }}
      className="flex min-h-screen w-full flex-col bg-muted/40"
    >
      <div className="flex gap-8">
        <WaterConsumptionChart></WaterConsumptionChart>
        <WaterSavingsChart></WaterSavingsChart>
      </div>
    </div>
  );
}
