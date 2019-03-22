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

const postProcess = (data) => {
  if (Array.isArray(data) && data.length < 10) {
    data.push({
      value: 0
    })
  }
}

export const mapIncomeToDate = (calendar, income, filter) => {
  let incSnap = [...income]
  switch (filter) {
    case 'weeks':
      return calendar.map((elem) => {
        let inx = []
        const fromClient = incSnap.filter((inc, index) => {
          if (String(elem.fullDate) === String(inc.fullDate)) {
            inx.push(index)
            return inc
          }
        }).reduce((acc, cur) => {
          return Number(acc) + Number(cur.fromClient)
        }, 0)
        if (inx.length) {
          inx.forEach(i => {
            incSnap.splice(i, 1)
          })
        }
        return { fullDate: elem.fullDate, fromClient }
      })
    default:
      break
  }
}
/*
      values: [{
        date: '2018-12-31',
        value: 15000
      }, {
        date: '2019-01-01',
        value: 300000
      }, {
        date: '2019-01-02',
        value: 35000000
      }
*/
export const mapEstToDate = (calendar, estimate, filter) => {
  checkParam(calendar)
  checkParam(estimate)
  let mapper = []
  let calendarData = []
  switch (filter) {
    case 'weeks':
      for (let index = 0; index < estimate.length; index++) {
        const est = estimate[index]
        const { values } = est
        calendarData = calendar.map(elem => {
          const total = values.filter(val => {
            return String(val.date) === String(elem.fullDate)
          }).reduce((acc, cur) => {
            return Number(acc) + Number(cur.value)
          }, 0)
          return { fullDate: elem.fullDate, total }
        })
        mapper.push({
          id: est.id,
          name: est.name,
          calendar: calendarData || []
        })
      }
      return mapper
    default:
      break
  }
}

export const mapEstToClient = (income, est) => {
  checkParam(income)
  let cumulative = 0
  return income.map((elem, inx) => {
    let cashFlow = 0
    let estTotal = 0
    for (const prop in est) {
      estTotal += Number(est[prop]['calendar'][inx]['total'])
    }
    cashFlow = Number(elem.fromClient) - Number(estTotal)
    cumulative = cumulative + cashFlow
    return { fullDate: elem.fullDate, cashFlow, cumulative }
  })
}

/*
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
*/

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
