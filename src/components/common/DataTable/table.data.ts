import { type Order } from "./dataTable.types";

export const tableData: Order[] = [
  {
    id: 1,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Lindsey Curtis",
      role: "Web Designer",
    },
    projectName: "Agency Website",
    team: {
      images: ["/images/user/user-17.jpg", "/images/user/user-18.jpg"],
    },
    status: "Active",
    budget: "3.9K",
  },
  {
    id: 2,
    user: {
      image: "/images/user/user-18.jpg",
      name: "Kaiya George",
      role: "Project Manager",
    },
    projectName: "Technology",
    team: {
      images: ["/images/user/user-25.jpg"],
    },
    status: "Pending",
    budget: "24.9K",
  },
];
