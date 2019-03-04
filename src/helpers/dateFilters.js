const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function DatePicker () {
  this.value = null
  this.unique = null
}
DatePicker.prototype.setValue = function (value) {
  if (!this.value) this.value = value
  return this
}
DatePicker.prototype.getValue = function () {
  return this.value
}
DatePicker.prototype.setUnique = function (value) {
  if (!this.unique) this.unique = value
  else {
    if (this.unique !== value) this.unique = value
  }
  return this
}
DatePicker.prototype.getUnique = function (value) {
  if (!this.unique) this.unique = value
}

const flatten = list => list.reduce(
  (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
)

export const filterByWeek = (data) => {
  const filtered = data.map(year => {
    const months = year.months.map(month => {
      const weeks = month.weeks.map(week => {
        const toogleDay = new DatePicker()
        const days = week.days.map((day, index) => {
          const d = new Date(day.fullDate)
          const headLine = index === 0 ? `week ${week.number}, ${day.number} ${monthNames[d.getMonth()]}` : ''
          toogleDay.setValue(day.number)
          return { ...day, headLine, dateValue: day.number }
        })
        return days
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
      const weeks = month.weeks.map((week, index) => {
        const fromClient = week.days.reduce((acc, cur) => {
          return Number(acc) + Number(cur.fromClient)
        }, 0)
        const headLine = index === 0 ? `${month.name}` : ''
        return { dateValue: week.number, headLine, fromClient }
      })
      return weeks
    })
    return months
  })
  return flatten(filtered)
}

export const filterByYear = (data) => {
  const filtered = data.map(year => {
    const months = year.months.map((month, index) => {
      const fromClient = month.weeks.reduce((acc, curW) => {
        return Number(acc) + Number(curW.days.reduce((accD, cur) => {
          return Number(accD) + Number(cur.fromClient)
        }, 0))
      }, 0)
      const headLine = index === 0 ? `${year.year}` : ''
      return { dateValue: month.name, headLine, fromClient }
    })
    return months
  })
  return flatten(filtered)
}
