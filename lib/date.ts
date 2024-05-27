const diffMinute = (d1: Date, d2: Date) => {
  const minute:number = Math.round((d1.getTime() - d2.getTime()) / (60 * 1000))
  return minute
}

export const dateAgo = (date: Date) => {
  const minute:number = diffMinute(new Date(), date)
  if (minute < 60) {
    return { amount: minute, unit: "minute" }
  } else if (minute < 24 * 60) {
    return { amount: Math.round(minute / 60), unit: "hour" }
  } else return { amount: Math.round(minute / (24 * 60)), unit: "day" }
}
