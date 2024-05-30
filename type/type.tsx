export enum STATUS {
  onHold = "onHold",
  processing = "processing",
  completed = "completed",
}

export enum BANKNAME {
  melli = "melli",
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
  email:string
  amount: number
  status: STATUS
  bank: BANKNAME
  date: Date
}

export type TabType = {
  id: string
  header: string
  title: string
  data: number[]
}
