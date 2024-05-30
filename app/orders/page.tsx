import { BankCell } from "@/components/BankCell"
import { FormatCurrency } from "@/components/FormatCurrency"
import { Header } from "@/components/Header"
import { StatusCell } from "@/components/StatusCell"
import { Table, TableData, TableHead } from "@/components/Table"
import { data as ordersData } from "@/data/data"
import { formatPersianDate } from "@/lib/format"
import { FaShoppingBag } from "react-icons/fa"

export default function OrdersPage() {
  const data: TableData = ordersData.map((order) => ({
    order: {
      content: (
        <>
        <div className="bg-purple-100 rounded-lg p-2 me-2 hidden sm:block md:hidden lg:block">
          <FaShoppingBag className="text-purple-800" size={16} />
        </div>
        <div>
          <p className="text-gray-800">
            <FormatCurrency
              amount={order.amount}
              classNameNumber="font-bold me-1"
              classNameUnit="text-xs"
            />
          </p>
          <p className="text-gray-400 text-xs">{`${order.name.first} ${order.name.last}`}</p>
        </div>
      </>
      ),
      className: "p-2 flex items-center",
    },
    status: {
      content: <StatusCell status={order.status} />,
      className: "p-2 text-gray-600 text-end sm:text-center",
    },
    lastOrder: {
      content: formatPersianDate(order.date),
      className: "p-2 hidden md:flex text-sm justify-center",
    },
    payment: {
      content: <BankCell name={order.bank} />,
      className: "p-2 hidden sm:flex justify-start items-center",
    },
  }))

  return (
    <>
      <Header title="سفارش‌ها" name="محمد" />
      <div className="p-4">
        <Table
          head={head}
          data={data}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-between cursor-pointer"
        />
      </div>
    </>
  )
}

const head: TableHead[] = [
  {
    key: "order",
    title: "سفارش",
    className: "p-2",
  },
  {
    key: "status",
    title: "وضعیت",
    className: "p-2 text-end sm:text-center",
  },
  {
    key: "lastOrder",
    title: "آخرین سفارش",
    className: "p-2 hidden md:grid justify-center",
  },
  {
    key: "payment",
    title: "درگاه پرداخت",
    className: "p-2 hidden sm:grid sm:items-center sm:justify-start",
  },
]
