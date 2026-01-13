export type NavSubItem = {
  name: string;
  path: string;
  badge?: "new" | "pro";
};

export type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  items?: NavSubItem[];
};
