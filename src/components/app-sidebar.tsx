"use client";

import * as React from "react";
import {
  AudioWaveform,
  BarChart2,
  BarChart4,
  Bolt,
  BookOpen,
  Bot,
  Brain,
  Briefcase,
  Command,
  DropletIcon,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Leaf,
  LeafIcon,
  Map,
  PieChart,
  PieChartIcon,
  Settings2,
  SquareTerminal,
  Trash2,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { title } from "process";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Company Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Residual Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Energy Usage",
      url: "#",
      icon: Bolt,
    },
    {
      title: "Waste Management",
      url: "#",
      icon: Trash2,
    },
    {
      title: "Carbon Footprint",
      url: "#",
      icon: Leaf,
    },

    {
      title: "Reports & Analytics",
      url: "#",
      icon: BarChart2,
    },

    {
      title: "AI Insights",
      url: "#",
      icon: Brain,
    },

    {
      title: "Goals & Targets",
      url: "#",
      icon: Briefcase,
    },

    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
