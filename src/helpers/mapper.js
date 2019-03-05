const checkParam = (param) => {
  if (!Array.isArray(param)) throw new TypeError('Param must be Array')
}

const checkSub = (date, subjects) => {
  return subjects.filter(subject => {
    return subject.date === date
  }).reduce((acc, cur) => {
    return Number(acc) + Number(cur.value)
  }, 0)
}

export const mapEstToDate = (estimates, dates) => {
  try {
    checkParam(dates)
    checkParam(estimates)
    const cross = estimates.map(estimate => {
      const totals = dates.map(date => {
        const total = checkSub(date.fullDate, estimate.values)
        return { ...date, total }
      })
      return { id: estimate.id, name: estimate.name, totals }
    })
    return cross
  } catch (error) {
    throw error
  }
}
