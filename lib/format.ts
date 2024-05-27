export const formatPersianNumber = (number: number) => {
  return new Intl.NumberFormat("fa-IR").format(number)
}

export const formatPersianPercentage = (number: number) => {
  const num = new Intl.NumberFormat("fa-IR").format(number)
  if (number > 0) return `${num}٪+`
  if (number < 0) return `${num}٪`
  if (number === 0) return `${num}٪`
}

export const formatPersianDate = (date: Date) => {
  return new Intl.DateTimeFormat("fa-IR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date)
}
