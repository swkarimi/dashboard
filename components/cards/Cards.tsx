"use client"

import { FC } from "react"
import { Card } from "./Card"

export const Cards: FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <Card amount={54914655} title="فروش انبار یک" percentage={18}/>
      <Card amount={23545698} title="فروش انبار دو" percentage={0}/>
      <Card amount={3917824} title="فروش انبار سه" percentage={-15}/>
      <Card amount={236899975} title="فروش انبار چهار" percentage={+32}/>
    </div>
  )
}
