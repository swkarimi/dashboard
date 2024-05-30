"use client"

import { cn } from "@/lib/utils"
import { FC, ReactNode } from "react"

export type TableHead = {
  key: string
  title: ReactNode
  className: string
}

export type TableData = Record<
  string,
  { content?: ReactNode; className?: string }
>[]

type TableProps = {
  head: TableHead[]
  data: Record<string, { content?: ReactNode; className?: string }>[]
  className?:string
}

export const Table: FC<TableProps> = ({ head, data, className }) => {
  const headKeys = head.map((h) => h.key)

  return (
    <div className="text-sm w-full m-auto p-2 border rounded-lg bg-white overflow-y-auto">
      {/* table head */}
      <div className={className}>
        {head.map((h,idx) => (
          <div key={`head-${h.key}${idx}`} className={cn("", h.className)}>
            {h.title}
          </div>
        ))}
      </div>

      {/* table rows */}
      {data.map((d, idx) =>{ 
      return (
        <div
          key={`row-${idx}`}
          className="bg-gray-50 hover:bg-gray-100 rounded-lg my-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-between cursor-pointer"
        >
          {headKeys.map((hKey) => (
            <div key={`data-${hKey}${idx}`} className={cn("", d[hKey]?.className)}>
              {d[hKey]?.content}
            </div>
          ))}
        </div>
      )})}
    </div>
  )
}
