export enum STATUS {
  onHold = "onHold",
  processing = "processing",
  completed = "completed",
}

export enum BANK {
  meli = "meli",
  mellat = "mellat",
  tejarat = "tejarat",
  saderat = "saderat",
}

export type OrderType = {
  id: number
  name: {
    first: string
    last: string
  }
  amount: number
  status: STATUS
  bank: BANK
  date: Date
}

export type TabType = {
  id: string
  header: string
  title: string
  data: number[]
}
