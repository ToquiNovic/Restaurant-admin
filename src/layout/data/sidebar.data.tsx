import { LayoutDashboard, Users, Shield } from "lucide-react";

import { type NavItem } from "@/types";

const iconClass = "h-5 w-5";

export const mainNavItems: NavItem[] = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard className={iconClass} />,
    path: "/dashboard",
  },
  {
    name: "Usuarios",
    icon: <Users className={iconClass} />,
    path: "/users",
  },
  {
    name: "Roles",
    icon: <Shield className={iconClass} />,
    path: "/roles",
  },
];

export const otherNavItems: NavItem[] = [];
