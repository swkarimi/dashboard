import { BANK, OrderType, STATUS, TabType } from "@/type/type"

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

export const tabsData: TabType[] = [
  {
    id: "caoiwempao",
    header: "انبار یک",
    title: "فروش انبار یک",
    data: [34, 21, 56, 12, 67, 82, 51],
  },
  {
    id: "smdhfaldfh",
    header: "انبار دو",
    title: "فروش انبار دو",
    data: [25, 65, 42, 31, 24, 52, 41],
  },
  {
    id: "pmkjhaksjd",
    header: "انبار سه",
    title: "فروش انبار سه",
    data: [12, 21, 42, 12, 58, 62, 71],
  },
  {
    id: "oajffkeelq",
    header: "انبار چهار",
    title: "فروش انبار چهار",
    data: [25, 65, 12, 14, 45, 35, 52],
  },
]
