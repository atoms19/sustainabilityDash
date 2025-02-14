import WasteCategoryChart from "@/components/custom/wasteCategoryChart";
import "/public/windmill.svg";

import Image from "next/image";
import MonthlyWasteChart from "@/components/custom/monthlyWasteChart";
import EnergyConsumption from "@/components/custom/energyConsumption";
import EnergySourceChart from "@/components/custom/energySourceCharts";

export default function carbonpage() {
  return (
    <div
      style={{
        backgroundImage: "url('windmill.svg')",
        backgroundSize: "cover",
      }}
      className="flex min-h-screen w-full flex-col bg-muted/40"
    >
      <div className="flex">
        <section className="flex gap-4 w-full">
          <EnergyConsumption></EnergyConsumption>
          <EnergySourceChart></EnergySourceChart>
        </section>
      </div>
    </div>
  );
}
