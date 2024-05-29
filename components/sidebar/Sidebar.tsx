"use client"

import { FC } from "react"
import { FiSettings } from "react-icons/fi"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { RxDashboard, RxPerson, RxSketchLogo } from "react-icons/rx"
import { SidebarLink } from "./SidebarLink"

export const Sidebar: FC = () => {
  return (
      <div className="fixed w-20 h-screen p-4 bg-white border-e flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <SidebarLink
            href="/"
            icon={<RxSketchLogo size={20} />}
            className="bg-purple-800 text-white p-3 rounded-lg inline-block"
          />
          <span className="border-b border-gray-200 w-full p-2"></span>
          <SidebarLink href="/" icon={<RxDashboard size={20} />} />
          <SidebarLink href="/customers" icon={<RxPerson size={20} />} />
          <SidebarLink
            href="/orders"
            icon={<HiOutlineShoppingBag size={20} />}
          />
          <SidebarLink href="/" icon={<FiSettings size={20} />} />
        </div>
      </div>
  )
}
