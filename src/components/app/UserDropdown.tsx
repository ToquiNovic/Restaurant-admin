import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { User, Settings, HelpCircle, LogOut, ChevronDown } from "lucide-react";

export const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2 px-2">
          <Avatar className="h-11 w-11">
            <AvatarImage src="/images/user/owner.jpg" />
            <AvatarFallback>QT</AvatarFallback>
          </Avatar>

          <span className="hidden md:block font-medium text-sm">Toqui</span>

          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64 rounded-xl p-2">
        {/* User info */}
        <div className="px-2 py-2">
          <p className="text-sm font-medium">Daniel Toquica</p>
          <p className="text-xs text-muted-foreground">danieltoquica@pinga.com</p>
        </div>

        <DropdownMenuSeparator />

        {/* Menu items */}
        <DropdownMenuItem asChild>
          <Link to="/profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Edit profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link to="/settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Account settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link to="/support" className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4" />
            Support
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Logout */}
        <DropdownMenuItem asChild>
          <Link
            to="/signin"
            className="flex items-center gap-2 text-red-600 focus:text-red-600"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
