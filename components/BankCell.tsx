import { BANKNAME } from "@/type/type"
import Image from "next/image"
import { FC } from "react"

type BankCellProps = {
  name: BANKNAME
}

export const BankCell: FC<BankCellProps> = ({ name }) => {
  return (
    <div className="flex items-center gap-1">
      <Image src={bank_details[name].img} alt={bank_details[name].nameFa} width={24} height={24}/>
      <div>{bank_details[name].nameFa}</div>
    </div>
  )
}

export const bank_details = {
  [BANKNAME.melli]: {
    id: BANKNAME.melli,
    nameFa: "ملی",
    img: "/image/banks/melli.png",
  },
  [BANKNAME.mellat]: {
    id: BANKNAME.mellat,
    nameFa: "ملت",
    img: "/image/banks/mellat.png",
  },
  [BANKNAME.saderat]: {
    id: BANKNAME.saderat,
    nameFa: "صادرات",
    img: "/image/banks/saderat.png",
  },
  [BANKNAME.tejarat]: {
    id: BANKNAME.tejarat,
    nameFa: "تجارت",
    img: "/image/banks/tejarat.png",
  },
}
