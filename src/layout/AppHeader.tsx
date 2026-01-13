import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSidebar } from "@/context";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

import { ThemeToggleButton } from "@/components/common";
import { NotificationDropdown, UserDropdown } from "@/components/app";

export const AppHeader = () => {
  const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSidebarToggle = () => {
    if (window.innerWidth >= 1024) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        {/* LEFT */}
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={handleSidebarToggle}
            aria-label="Toggle sidebar"
          >
            {isMobileOpen ? "✕" : "☰"}
          </Button>

          <Link to="/" className="lg:hidden">
            <img
              src="/images/logo/logo.svg"
              alt="Logo"
              className="h-6 dark:hidden"
            />
            <img
              src="/images/logo/logo-dark.svg"
              alt="Logo"
              className="hidden h-6 dark:block"
            />
          </Link>
        </div>

        {/* SEARCH */}
        <div className="hidden lg:flex w-105 relative">
          <Input
            ref={inputRef}
            placeholder="Search or type command..."
            className="pr-16"
          />
          <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded border bg-muted px-2 py-1 text-xs text-muted-foreground">
            ⌘ K
          </kbd>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2">
          <ThemeToggleButton />
          <NotificationDropdown />

          {/* MOBILE MENU */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="lg:hidden">
              <Button size="icon" variant="ghost">
                ⋮
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
              <UserDropdown />
            </DropdownMenuContent>
          </DropdownMenu>

          {/* DESKTOP */}
          <div className="hidden lg:block">
            <UserDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};
