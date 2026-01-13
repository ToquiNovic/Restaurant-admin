import { type OrderStatus } from "./dataTable.types";

export type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "success"
  | "warning";

export const statusVariantMap: Record<OrderStatus, BadgeVariant> = {
  Active: "success",
  Pending: "warning",
  Cancel: "destructive",
};
