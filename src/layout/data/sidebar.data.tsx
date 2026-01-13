import { LayoutDashboard, Users, Shield } from "lucide-react";

import { type NavItem } from "@/types";

const iconClass = "h-5 w-5";

export const mainNavItems: NavItem[] = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard className={iconClass} />,
    path: "/",
  },
  {
    name: "Usuarios",
    icon: <Users className={iconClass} />,
    path: "/usuarios",
  },
  {
    name: "Roles",
    icon: <Shield className={iconClass} />,
    path: "/roles",
  },
];

export const otherNavItems: NavItem[] = [];
