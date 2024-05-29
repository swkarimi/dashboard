"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import { BarChart } from "./BarChart"
import { cn } from "@/lib/utils"
import { TabType } from "@/type/type"

export const TabSwitcher = ({ tabs }: { tabs: TabType[] }): ReactNode => {
  const [selectedId, setSelectedId] = useState(tabs[0].id)
  const selectedTab = tabs.find((tab) => tab.id === selectedId) ?? tabs[0]
  return (
    <div className="w-full h-[50vh] lg:h-[65vh] relative m-auto p-4 border rounded-lg bg-white z-0">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={cn(
            "p-2 text-sm bg-red-300 me-2 rounded-t-lg",
            { "bg-purple-400 text-white": tab.id === selectedId },
            { "bg-gray-200": tab.id !== selectedId }
          )}
          onClick={() => setSelectedId(tab.id)}
        >
          {tab.header}
        </button>
      ))}
      {/* <hr /> */}
      <div key={selectedId} className="border rounded outline-none">
        <BarChart title={selectedTab.title} data={selectedTab.data} />
      </div>
    </div>
  )
}
