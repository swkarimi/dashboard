import { formatPersianNumber } from "@/lib/format"
import { FC } from "react"

type FormatCurrencyProps = {
  number: number
  className?: string
  classNameNumber?: string
  classNameUnit?: string
}

export const FormatCurrency: FC<FormatCurrencyProps> = ({
  number,
  className,
  classNameNumber,
  classNameUnit,
}) => {
  return (
    <span className={className}>
      <span className={classNameNumber}>{formatPersianNumber(number)}</span>
      <span className={classNameUnit}>تومان</span>
    </span>
  )
}
