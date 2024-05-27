import { formatPersianNumber } from "@/lib/format"
import { FC } from "react"

type FormatCurrencyProps = {
  amount: number
  className?: string
  classNameNumber?: string
  classNameUnit?: string
}

export const FormatCurrency: FC<FormatCurrencyProps> = ({
  amount,
  className,
  classNameNumber,
  classNameUnit,
}) => {
  return (
    <span className={className}>
      <span className={classNameNumber}>{formatPersianNumber(amount)}</span>
      <span className={classNameUnit}>تومان</span>
    </span>
  )
}
