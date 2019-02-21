const currentDay = (day) => {
  // если из базы пришло начальное значение дня недели
  if (typeof day === 'string' && day.length === 8) {
    return day.slice(0, 2)
  } else {
    // в базе нет дня недели, берем текущий день
    return day.getDate() < 10 ? `0${day.getDate()}` : `${day.getDate()}`
  }
}

const getWeek = (day) => {
  let onejan = new Date(new Date().getFullYear())
  return Math.ceil((((new Date() - onejan) / 86400000) + onejan.getDay() + 1) / 7)
}

// получаем в качестве параметра день недели
function getMonth (day = new Date()) {
  console.log(typeof currentDay(day))
}

function DatePeeker () {
  this.value = null
}
DatePeeker.prototype.setValue = function (value) {
  if (!this.value) this.value = value
}
DatePeeker.prototype.getValue = function () {
  return this.value
}

const flatten = list => list.reduce(
  (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
)

export const filterByWeek = (data) => {
  const filtered = data.map(year => {
    const months = year.months.map(month => {
      const weeks = month.weeks.map(week => {
        const toogleDay = new DatePeeker()
        const days = week.days.map(day => {
          toogleDay.setValue(day.number)
          return day
        })
        const headLine = `week ${week.number}, ${toogleDay.getValue()} ${month.name}`
        return {
          headLine,
          headFiled: days
        }
      })
      return weeks
    })
    return months
  })
  return flatten(filtered)
}

export const filterByMonth = (data) => {
  const filtered = data.map(year => {
    const months = year.months.map(month => {
      const weeks = month.weeks.map(week => {
        return week.number
      })
      const headLine = `${month.name}`
      return {
        headLine,
        headFiled: weeks
      }
    })
    return months
  })
  return flatten(filtered)
}

export const filterByYear = (data) => {
  const filtered = data.map(year => {
    const months = year.months.map((months) => {
      return months.name
    })
    return {
      headLine: year.year,
      headFiled: months
    }
  })
  return filtered
}
