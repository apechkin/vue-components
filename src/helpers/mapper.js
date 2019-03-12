const checkParam = (param) => {
  if (!Array.isArray(param)) throw new TypeError('Param must be Array')
}

const checkSub = (date, subjects) => {
  return filterByDate(subjects, date).reduce(summValues, 0)
}

const mapData = (firstArray, secondArray, fn) => {
  return firstArray.map(first => {
    return secondArray.map(second => {
      return fn(first, second)
    })
  })
}

const filterByDate = (values, date) => {
  return values.filter(value => {
    return value.date === date
  })
}

const filterByDateLigth = ({ values }, date) => {
  return values.filter(value => {
    return value.date === date
  })
}

const summValues = (acc, cur) => {
  return Number(acc) + Number(cur.value)
}

export const mapEstToDate = (estimates, dates) => {
  try {
    checkParam(dates)
    checkParam(estimates)
    const cross = estimates.map(estimate => {
      const totals = dates.map(date => {
        const totalEstimate = checkSub(date.fullDate, estimate.values)
        return { ...date, total: totalEstimate }
      })
      return { id: estimate.id, name: estimate.name, totals }
    })
    return cross
  } catch (error) {
    throw error
  }
}

const test = ({ values }, date) => {
  // console.log(values)
  return date
}
/**
 * Calculate cashflow by day
 * @param {Array}
 * @param {Array}
 * @return {Array}
 */
export const cashFlowByDay = (estimates, dates) => {
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
    return { fromClient }
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
