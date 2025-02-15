"use client";

import * as React from "react";
import {
  AtomIcon,
  Bolt,
  Brain,
  Briefcase,
  DropletIcon,
  LayoutDashboard,
  Leaf,
  Settings2,
  Trash2,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.

const data = {
  user: {
    name: "smotium-core",
    email: "atoms@atoms.com",
    avatar: "something",
  },
  company: {
    name: "aw-weorkforce",
    logo: AtomIcon,
    registerno: "203434343",
  },

  NavMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Energy Usage",
      url: "/energy",
      icon: Bolt,
    },
    {
      title: "Waste Management",
      url: "/waste",
      icon: Trash2,
    },
    {
      title: "Carbon Footprint",
      url: "/carbon",
      icon: Leaf,
    },
    {
      title: "Water Usage",
      url: "/water",
      icon: DropletIcon,
    },

    {
      title: "Goals & Targets",
      url: "/goals",
      icon: Briefcase,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <data.company.logo className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{data.company.name}</span>
            <span className="truncate text-xs">{data.company.registerno}</span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.NavMain} />

        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

// const data = {
//   user: {
//     name: "shadcn",
//     email: "m@example.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   teams: [
//     {
//       name: "Company Inc",
//       logo: GalleryVerticalEnd,
//       plan: "Enterprise",
//     },
//     {
//       name: "Residual Corp.",
//       logo: AudioWaveform,
//       plan: "Startup",
//     },
//     {
//       name: "Evil Corp.",
//       logo: Command,
//       plan: "Free",
//     },
//   ],
//   navMain: [
//     {
//       title: "Dashboard",
//       url: "/dashboard",
//       icon: LayoutDashboard,
//       isActive: true,
//     },
//     {
//       title: "Energy Usage",
//       url: "#",
//       icon: Bolt,
//     },
//     {
//       title: "Waste Management",
//       url: "#",
//       icon: Trash2,
//     },
//     {
//       title: "Carbon Footprint",
//       url: "#",
//       icon: Leaf,
//     },

//     {
//       title: "Reports & Analytics",
//       url: "#",
//       icon: BarChart2,
//     },

//     {
//       title: "AI Insights",
//       url: "#",
//       icon: Brain,
//     },

//     {
//       title: "Goals & Targets",
//       url: "#",
//       icon: Briefcase,
//     },

//     {
//       title: "Settings",
//       url: "#",
//       icon: Settings2,
//     },
//   ],
//   projects: [
//     {
//       name: "Design Engineering",
//       url: "#",
//       icon: Frame,
//     },
//     {
//       name: "Sales & Marketing",
//       url: "#",
//       icon: PieChart,
//     },
//     {
//       name: "Travel",
//       url: "#",
//       icon: Map,
//     },
//   ],
// };
