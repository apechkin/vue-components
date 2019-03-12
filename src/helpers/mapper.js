const checkParam = (param) => {
  if (!Array.isArray(param)) throw new TypeError('Param must be Array')
}

const weeks = (date, subjects) => {
  return filterByWeeks(subjects, date).reduce(summValues, 0)
}

const filterByWeeks = (values, date) => {
  return values.filter(value => {
    return value.date === date
  })
}

const months = (weekNum, subjects) => {
  return filterByMonths(subjects, weekNum).reduce(summValues, 0)
}

const filterByMonths = (values, weekNum) => {
  return values.filter(value => {
    return getWeek(value.date) === weekNum
  })
}

const summValues = (acc, cur) => {
  return Number(acc) + Number(cur.value)
}

const getWeek = (dateIN) => {
  let date = new Date(dateIN)
  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7)
  const week1 = new Date(date.getFullYear(), 0, 4)
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7)
}

export const mapEstToDate = (estimates, dates, filter) => {
  try {
    checkParam(dates)
    checkParam(estimates)
    switch (filter) {
      case 'weeks':
        return estimates.map(estimate => {
          const totals = dates.map(date => {
            const totalEstimate = weeks(date.fullDate, estimate.values)
            return { ...date, total: totalEstimate, weekNum: getWeek(date.fullDate) }
          })
          return { id: estimate.id, name: estimate.name, totals }
        })
      case 'months':
        return estimates.map(estimate => {
          const totals = dates.map(date => {
            const totalEstimate = months(date.dateValue, estimate.values)
            return { ...date, total: totalEstimate }
          })
          return { id: estimate.id, name: estimate.name, totals }
        })
      default:
        break
    }
  } catch (error) {
    throw error
  }
}

/**
 * Calculate cashflow by day
 * @param {Array}
 * @param {Array}
 * @return {Array}
 */
export const cashFlow = (estimates, dates) => {
  let cache = 0
  const cash = dates.map(date => {
    let { fromClient, fullDate } = date
    estimates.forEach(estimate => {
      const { values: estValues } = estimate
      estValues.forEach(est => {
        if (fullDate === est.date) {
          fromClient = fromClient - est.value
        }
      })
    })
    if (!cache) cache = fromClient
    else cache = Number(cache) + Number(fromClient)
    return { cashFlow: fromClient, cumulative: cache }
  })
  return cash
}

/**
 * Calculate cumulative cashflow
 * @param {Array}
 * @return {Array}
 */
export const cummulative = (data) => {
  return data
}
