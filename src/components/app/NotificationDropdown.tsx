import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const NotificationDropdown = () => {
  const [notifying, setNotifying] = useState(true);

  return (
    <DropdownMenu onOpenChange={() => setNotifying(false)}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative h-11 w-11 rounded-full"
        >
          <Bell className="h-5 w-5" />

          {notifying && (
            <Badge className="absolute right-1 top-1 h-2 w-2 rounded-full p-0 bg-orange-500 animate-ping" />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-90 rounded-xl p-3">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-2 mb-2">
          <h4 className="text-sm font-semibold">Notifications</h4>
        </div>

        {/* List */}
        <ScrollArea className="h-95">
          <DropdownMenuItem className="gap-3 items-start rounded-lg p-3 cursor-pointer">
            <Avatar>
              <AvatarImage src="/images/user/user-02.jpg" />
              <AvatarFallback>TF</AvatarFallback>
            </Avatar>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  Terry Franci
                </span>{" "}
                requests permission to change{" "}
                <span className="font-medium text-foreground">
                  Project – Nganter App
                </span>
              </p>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Project</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                <span>5 min ago</span>
              </div>
            </div>
          </DropdownMenuItem>
        </ScrollArea>

        {/* Footer */}
        <Link
          to="/notifications"
          className="mt-3 block text-center text-sm font-medium text-primary hover:underline"
        >
          View all notifications
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
