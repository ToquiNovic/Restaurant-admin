// AppSidebar.tsx
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { SidebarSection } from "./SidebarSection";
import { mainNavItems, otherNavItems } from "./data";
import { useSidebar } from "../context/SidebarContext";

export const AppSidebar = () => {
  const { isExpanded, isHovered, isMobileOpen, setIsHovered } = useSidebar();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-50 border-r bg-background transition-all",
        isExpanded || isHovered || isMobileOpen ? "w-72" : "w-20",
        isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4">
        <Link to="/">
          <img src="/images/logo/logo.svg" className="h-8 dark:hidden" />
          <img
            src="/images/logo/logo-dark.svg"
            className="h-8 hidden dark:block"
          />
        </Link>
      </div>

      <nav className="space-y-6 px-2">
        <SidebarSection title="Menu" items={mainNavItems} />
        <SidebarSection title="Others" items={otherNavItems} />
      </nav>
    </aside>
  );
};
