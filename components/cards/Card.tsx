"use client"

import { formatPersianPercentage } from "@/lib/format"
import { FC } from "react"
import { FormatCurrency } from "../FormatCurrency"
import { cn } from "@/lib/utils"

type CardProps = {
  amount: number
  title: string
  percentage: number
}

export const Card: FC<CardProps> = ({ amount, title, percentage }) => {
  return (
    <div className="bg-white flex justify-between items-center w-full border p-4 rounded-lg">
      <p
        className={cn(
          "h-14 w-14  flex justify-center items-center p-2 rounded-lg",
          { "bg-green-200": percentage > 0 },
          { "bg-red-200": percentage < 0 },
          { "bg-gray-200": percentage === 0 }
        )}
      >
        <span
          className={cn(
            "text-base",
            { "text-green-700": percentage > 0 },
            { "text-red-700": percentage < 0 },
            { "text-gray-700": percentage === 0 }
          )}
        >
          {formatPersianPercentage(percentage)}
        </span>
      </p>
      <div className="flex flex-col gap-1 items-end pb-4">
        <FormatCurrency
          amount={amount}
          className="flex items-center gap-[1px]"
          classNameNumber="font-bold"
          classNameUnit="text-xs"
        />
        <p className="text-gray-600 text-sm">{title}</p>
      </div>
    </div>
  )
}
