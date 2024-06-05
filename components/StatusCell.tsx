import { cn } from "@/lib/utils"
import { STATUS } from "@/type/type"
import { FC } from "react"

type StatusCellProps = {
  status: STATUS
}

export const StatusCell: FC<StatusCellProps> = ({ status }) => {
  return (
    <span
      className={cn(
        "px-2 py-1 rounded-lg text-sm",
        { "bg-green-300": status === STATUS.completed },
        { "bg-blue-300": status === STATUS.processing },
        { "bg-yellow-300": status === STATUS.onHold }
      )}
    >
      {status_details[status].nameFa}
    </span>
  )
}

export const status_details = {
  [STATUS.completed]: { id: STATUS.completed, nameFa: "تکمیل شده" },
  [STATUS.onHold]: { id: STATUS.onHold, nameFa: "در صف انتظار" },
  [STATUS.processing]: { id: STATUS.processing, nameFa: "در حال پردازش" },
}
