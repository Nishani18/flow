"use client";

import * as React from "react";
import {
  CalendarRange,
  ChartLine,
  ClipboardList,
  FolderKanban,
  LayoutDashboard,
} from "lucide-react";

import { NavMain } from "@/components/common/nav-main";
import { NavUser } from "@/components/common/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "../../public/Logo/flowLogo.svg";
import Image from "next/image";

// This is sample data.
const data = {
  user: {
    name: "Nishani",
    email: "nishani@email.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: {
    name: "Flow",
    logo: Logo,
  },

  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
    },
    {
      title: "Tasks",
      url: "#",
      icon: ClipboardList,
    },
    {
      title: "Projects",
      url: "#",
      icon: FolderKanban,
    },
    {
      title: "Calender",
      url: "#",
      icon: CalendarRange,
    },
    {
      title: "Analytics",
      url: "#",
      icon: ChartLine,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
            <Image
              src={data.teams.logo}
              alt={data.teams.name}
              className="size-7"
            />
          </div>

          <span className="truncate font-semibold text-left text-sm leading-tight">
            {data.teams.name}
          </span>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
