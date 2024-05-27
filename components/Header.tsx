"use client"

import { FC } from "react"

type HeaderProps = {
  title: string
  name: string
}

export const Header: FC<HeaderProps> = ({ title, name }) => {
  return (
    <div className="flex justify-between px-4 pt-4">
      <h2>{title}</h2>
      <h2>{`خوش آمدی، ${name}`}</h2>
    </div>
  )
}
