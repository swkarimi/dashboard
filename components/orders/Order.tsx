import React, { FC } from "react"
import { FaShoppingBag } from "react-icons/fa"
import { FormatCurrency } from "../FormatCurrency"
import { formatPersianDate, formatPersianNumber } from "@/lib/format"
import { dateAgo } from "@/lib/date"

type OrderType = {
  name: string
  amount: number
  date: Date
}

export const Order: FC<OrderType> = ({ name, amount, date }) => {
  let dateStrAgo = undefined
  const ddate = dateAgo(date)
  if (ddate.amount === 0) {
    dateStrAgo = "اکنون"
  } else {
    dateStrAgo = ` ${formatPersianNumber(ddate.amount)} ${
      ddate.unit === "minute" ? "دقیقه" : ddate.unit === "hour" ? "ساعت" : "روز"
    } قبل`
  }
  return (
    <li className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 mx-4 p-2 flex items-center justify-between cursor-pointer">
      <div className="flex flex-row items-center justify-start">
        <div className="bg-purple-100 rounded-lg p-3">
          <FaShoppingBag className="text-purple-800" />
        </div>
        <div className="ps-4">
          <p className="text-gray-800">
            <FormatCurrency
              amount={amount}
              classNameNumber="font-bold me-1"
              classNameUnit="text-xs"
            />
          </p>
          <p className="text-gray-400 text-xs">{name}</p>
        </div>
      </div>
      <p className="text-sm">{dateStrAgo}</p>
    </li>
  )
}
