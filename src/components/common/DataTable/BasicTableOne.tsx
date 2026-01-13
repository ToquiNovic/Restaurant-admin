import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { tableData } from "./table.data";
import { statusVariantMap } from "./table.utils";
import { type Order } from "./dataTable.types.ts";

export const BasicTableOne = () => {
  return (
    <div className="rounded-xl border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Budget</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableData.map((order: Order) => (
            <TableRow key={order.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={order.user.image} />
                    <AvatarFallback>
                      {order.user.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="font-medium">{order.user.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {order.user.role}
                    </p>
                  </div>
                </div>
              </TableCell>

              <TableCell>{order.projectName}</TableCell>

              <TableCell>
                <div className="flex -space-x-2">
                  {order.team.images.map((img: string, i: number) => (
                    <Avatar key={i} className="h-6 w-6 border">
                      <AvatarImage src={img} />
                    </Avatar>
                  ))}
                </div>
              </TableCell>

              <TableCell>
                <Badge variant={statusVariantMap[order.status]}>
                  {order.status}
                </Badge>
              </TableCell>

              <TableCell className="text-right">{order.budget}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
