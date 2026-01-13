import { NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { type NavItem } from "@/types";
import { useSidebar } from "@/context";

type Props = {
  title: string;
  items: NavItem[];
};

export const SidebarSection = ({ title, items }: Props) => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const showText = isExpanded || isHovered || isMobileOpen;

  return (
    <div>
      <h2 className="mb-4 text-xs uppercase text-muted-foreground text-center lg:text-left">
        {showText ? title : "•••"}
      </h2>

      <Accordion type="single" collapsible className="space-y-1">
        {items.map((item) =>
          item.items ? (
            <AccordionItem
              key={item.name}
              value={item.name}
              className="border-none"
            >
              <AccordionTrigger
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-muted",
                  !showText && "justify-center"
                )}
              >
                {item.icon}
                {showText && <span>{item.name}</span>}
              </AccordionTrigger>

              <AccordionContent className="pl-9">
                {item.items.map((sub) => (
                  <NavLink
                    key={sub.path}
                    to={sub.path}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-muted",
                        isActive && "bg-muted font-medium"
                      )
                    }
                  >
                    {sub.name}
                    {sub.badge && (
                      <span className="ml-auto rounded bg-primary/10 px-2 py-0.5 text-xs text-primary">
                        {sub.badge}
                      </span>
                    )}
                  </NavLink>
                ))}
              </AccordionContent>
            </AccordionItem>
          ) : (
            <NavLink
              key={item.name}
              to={item.path!}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-muted",
                  isActive && "bg-muted font-medium",
                  !showText && "justify-center"
                )
              }
            >
              {item.icon}
              {showText && <span>{item.name}</span>}
            </NavLink>
          )
        )}
      </Accordion>
    </div>
  );
};
