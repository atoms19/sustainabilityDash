import Image from "next/image";
import PanelCards from "@/components/custom/dashboard/panelcards";
import { File, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import AIoverview from "@/components/custom/aioverview";
import SustainabilityChart from "@/components/custom/sustainabilityChart";
import WasteReductionChart from "@/components/custom/wasteReductionChart";

export default function Dashboard() {
   return (
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
         <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
               <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                  {/* pamels */}
                  <PanelCards />

                  <div className="flex items-center ">
                     <div className="ml-auto flex items-center gap-2">
                        <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                           <File className="h-3.5 w-3.5" />
                           <span className="sr-only sm:not-sr-only">Export</span>
                        </Button>
                     </div>
                  </div>

                  <SustainabilityChart/>
                  <WasteReductionChart/>
               </div>
               <div>
                  <AIoverview/>
               </div>
            </main>
         </div>
      </div>
   );
}
