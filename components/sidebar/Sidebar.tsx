"use client"

import type { FC } from "react"
import { FiSettings } from "react-icons/fi"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { RxDashboard, RxPerson } from "react-icons/rx"
import { SidebarLink } from "./SidebarLink"

export const Sidebar: FC = () => {
  return (
    <div className="fixed w-20 h-screen p-4 bg-white border-e flex flex-col justify-between">
      <div className="flex flex-col items-center">
        <SidebarLink href="/" icon={<RxDashboard size={20} />} />
        <SidebarLink href="/customers" icon={<RxPerson size={20} />} />
        <SidebarLink href="/orders" icon={<HiOutlineShoppingBag size={20} />} />
        <SidebarLink href="/setting" disable icon={<FiSettings size={20} />} />
      </div>
    </div>
  )
}
