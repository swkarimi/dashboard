import { data } from "@/data/data"
import { FC } from "react"
import { Order } from "./Order"

export const RecentOrders: FC = () => {
  return (
    <div className="w-full h-[50vh] lg:h-[65vh] m-auto border rounded-lg bg-white">
      <h1 className="p-4">سفارش‌های اخیر</h1>
      <ul className="h-[calc(50vh-64px)] lg:h-[calc(65vh-64px)] overflow-auto">
        {data.map((order, idx) => (
          <Order
            key={idx}
            name={`${order.name.first} ${order.name.last}`}
            amount={order.amount}
            date={order.date}
          />
        ))}
      </ul>
    </div>
  )
}
