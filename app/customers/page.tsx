import { BankCell } from "@/components/BankCell"
import { Header } from "@/components/Header"
import { Table, TableData, TableHead } from "@/components/Table"
import { data as customersData } from "@/data/data"
import { formatPersianDate } from "@/lib/format"
import { BsPersonFill } from "react-icons/bs"

export default function CustomersPage() {
  const data: TableData = customersData.map((cd) => ({
    fullName: {
      content: (
        <>
          <div className="bg-purple-100 p-2 rounded-md">
            <BsPersonFill className="text-purple-800" size={16} />
          </div>
          <p className="ps-2">{`${cd.name.first} ${cd.name.last}`}</p>
        </>
      ),
      className: "p-2 flex items-center",
    },
    email: {
      content: cd.email,
      className: "p-2 hidden md:flex text-sm justify-end",
    },
    lastOrder: {
      content: formatPersianDate(cd.date),
      className: "p-2 text-gray-600 text-end sm:text-center",
    },
    payment: {
      content: <BankCell name={cd.bank} />,
      className: "p-2 hidden sm:flex justify-start items-center",
    },
  }))

  return (
    <>
      <Header title="مشتریان" name="محمد" />
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
    key: "fullName",
    title: "نام و نام خانوادگی",
    className: "p-2",
  },
  {
    key: "email",
    title: "ایمیل",
    className: "p-2 hidden md:grid justify-end",
  },
  {
    key: "lastOrder",
    title: "آخرین سفارش",
    className: "p-2 text-end sm:text-center",
  },
  {
    key: "payment",
    title: "درگاه پرداخت",
    className: "p-2 hidden sm:grid sm:items-center sm:justify-start",
  },
]
