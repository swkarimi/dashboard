"use client"

import { FC } from "react"
import { Card } from "./Card"

export const Cards: FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <Card amount={54914600} title="فروش انبار یک" percentage={18}/>
      <Card amount={23545000} title="فروش انبار دو" percentage={0}/>
      <Card amount={39178900} title="فروش انبار سه" percentage={-15}/>
      <Card amount={26898000} title="فروش انبار چهار" percentage={+32}/>
    </div>
  )
}
