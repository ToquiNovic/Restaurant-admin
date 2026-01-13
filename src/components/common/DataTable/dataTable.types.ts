export type OrderStatus = "Active" | "Pending" | "Cancel"

export interface Order {
  id: number
  user: {
    image: string
    name: string
    role: string
  }
  projectName: string
  team: {
    images: string[]
  }
  status: OrderStatus
  budget: string
}
