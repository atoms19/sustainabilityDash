import WasteCategoryChart from "@/components/custom/wasteCharts/wasteCategoryChart";
import "/public/smoke.svg";

import Image from "next/image";
import MonthlyWasteChart from "@/components/custom/wasteCharts/monthlyWasteChart";
import EnergyConsumption from "@/components/custom/energyCharts/energyConsumption";
import EnergySourceChart from "@/components/custom/energyCharts/energySourceCharts";
import CarbonEmissionChart from "@/components/custom/carbonCharts/carbonEmissionChart";
import CarbonEmissionDepartment from "@/components/custom/carbonCharts/carbonEmissionDepartment";

export default function carbonpage() {
  return (
    <div
      style={{
        backgroundImage: "url('smoke.svg')",
        backgroundSize: "cover",
      }}
      className="flex min-h-screen w-full flex-col bg-muted/40"
    >
      <div className="flex">
        <section className="flex gap-4 w-full ">
          <CarbonEmissionChart></CarbonEmissionChart>
          <CarbonEmissionDepartment></CarbonEmissionDepartment>
        </section>
      </div>
    </div>
  );
}
