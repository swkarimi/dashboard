"use client"

import Link from "next/link"
import { FC, ReactNode } from "react"

type SidebarLinkProps = {
  href: string
  icon: ReactNode
  className?: string
}

export const SidebarLink: FC<SidebarLinkProps> = ({
  href,
  icon,
  className,
}) => {
  return (
    <Link href={href}>
      <div
        className={
          className ??
          "bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block"
        }
      >
        {icon}
      </div>
    </Link>
  )
}
