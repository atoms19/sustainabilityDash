import WasteCategoryChart from "@/components/custom/wasteCategoryChart";
import "/public/trash.svg";

import Image from "next/image";
import MonthlyWasteChart from "@/components/custom/monthlyWasteChart";

export default function carbonpage() {
  return (
    <div
      style={{
        backgroundImage: "url('/trash.svg')",
        backgroundSize: "cover",
      }}
      className="flex min-h-screen w-full flex-col bg-muted/40"
    >
      <div className="flex">
        <section className="flex gap-4 w-full h-full align-center">
          <WasteCategoryChart></WasteCategoryChart>
          <MonthlyWasteChart></MonthlyWasteChart>
        </section>
      </div>
    </div>
  );
}
