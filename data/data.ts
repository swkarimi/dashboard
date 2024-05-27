enum STATUS {
  onHold = "onHold",
  processing = "processing",
  completed = "completed",
}

enum BANK {
  meli = "meli",
  mellat = "mellat",
  tejarat = "tejarat",
  saderat = "saderat",
}

type OrderType = {
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

export const data: OrderType[] = [
  {
    id: 1,
    name: {
      first: "نادر",
      last: "ابراهیمی",
    },
    amount: 56700,
    status: STATUS.onHold,
    bank: BANK.meli,
    date: new Date(Date.now() - 10000),
  },
  {
    id: 2,
    name: {
      first: "کمال",
      last: "محمودی",
    },
    amount: 174000,
    status: STATUS.onHold,
    bank: BANK.mellat,
    date: new Date(Date.now() - 1000 * 60 * Math.floor(Math.random() * 10 + 0)),
  },
  {
    id: 3,
    name: {
      first: "سارا",
      last: "کنعانی",
    },
    amount: 65800,
    status: STATUS.processing,
    bank: BANK.tejarat,
    date: new Date(
      Date.now() - 1000 * 60 * Math.floor(Math.random() * 50 + 10)
    ),
  },
  {
    id: 4,
    name: {
      first: "مهسا",
      last: "امیری",
    },
    amount: 98500,
    status: STATUS.completed,
    bank: BANK.saderat,
    date: new Date(
      Date.now() - 1000 * 60 * 60 * Math.floor(Math.random() * 6 + 0)
    ),
  },
  {
    id: 5,
    name: {
      first: "فریدون",
      last: "جوادی",
    },
    amount: 160500,
    status: STATUS.processing,
    bank: BANK.meli,
    date: new Date(
      Date.now() - 1000 * 60 * 60 * Math.floor(Math.random() * 6 + 6)
    ),
  },
  {
    id: 6,
    name: {
      first: "نیلوفر",
      last: "حسینی",
    },
    amount: 271000,
    status: STATUS.processing,
    bank: BANK.saderat,
    date: new Date(
      Date.now() - 1000 * 60 * 60 * Math.floor(Math.random() * 6 + 12)
    ),
  },
  {
    id: 7,
    name: {
      first: "کاظم",
      last: "کریمی",
    },
    amount: 194500,
    status: STATUS.completed,
    bank: BANK.tejarat,
    date: new Date(
      Date.now() - 1000 * 60 * 60 * Math.floor(Math.random() * 6 + 18)
    ),
  },
  {
    id: 8,
    name: {
      first: "نازنین",
      last: "دهنوی",
    },
    amount: 35400,
    status: STATUS.completed,
    bank: BANK.saderat,
    date: new Date(
      Date.now() - 1000 * 60 * 60 * Math.floor(Math.random() * 6 + 24)
    ),
  },
  {
    id: 9,
    name: {
      first: "موسی",
      last: "مهدوی",
    },
    amount: 79900,
    status: STATUS.completed,
    bank: BANK.mellat,
    date: new Date(
      Date.now() - 1000 * 60 * 60 * Math.floor(Math.random() * 6 + 30)
    ),
  },
  {
    id: 10,
    name: {
      first: "حسین",
      last: "جعفری",
    },
    amount: 128000,
    status: STATUS.completed,
    bank: BANK.meli,
    date: new Date(
      Date.now() - 1000 * 60 * 60 * Math.floor(Math.random() * 6 + 36)
    ),
  },
  {
    id: 11,
    name: {
      first: "مرتضی",
      last: "غریب",
    },
    amount: 242900,
    status: STATUS.completed,
    bank: BANK.mellat,
    date: new Date(
      Date.now() - 1000 * 60 * 60 * Math.floor(Math.random() * 6 + 42)
    ),
  },
  {
    id: 12,
    name: {
      first: "یعقوب",
      last: "فردوسی",
    },
    amount: 359000,
    status: STATUS.completed,
    bank: BANK.tejarat,
    date: new Date(
      Date.now() - 1000 * 60 * 60 * Math.floor(Math.random() * 6 + 48)
    ),
  },
]
