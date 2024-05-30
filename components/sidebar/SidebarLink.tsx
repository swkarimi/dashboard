"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { FC, ReactNode } from "react"

type SidebarLinkProps = {
  href: string
  icon: ReactNode
  disable?: boolean
}

export const SidebarLink: FC<SidebarLinkProps> = ({ href, icon, disable }) => {
  const pathname = usePathname()

  return (
    <>
      {!disable ? (
        <Link
          href={href}
          className={cn(
            "my-4 p-3 rounded-lg block",
            {
              "bg-purple-800 text-white cursor-pointer": pathname === href,
            },
            {
              "bg-gray-100 text-gray-800 hover:bg-purple-300 cursor-pointer":
                pathname !== href,
            }
          )}
        >
          {icon}
        </Link>
      ) : (
        <div
          className={
            "my-4 p-3 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed"
          }
        >
          {icon}
        </div>
      )}
    </>
  )
}
