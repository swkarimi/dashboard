export const formatPersianNumber = (number: number) => {
  return new Intl.NumberFormat("fa-IR").format(number)
}

export const formatPersianPercentage = (number: number) => {
  const num = new Intl.NumberFormat("fa-IR").format(number)
  if (number > 0) return `${num}٪+`
  if (number < 0) return `${num}٪`
  if (number === 0) return `${num}٪`
}
