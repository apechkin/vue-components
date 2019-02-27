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
          const headLine = index === 0 ? `week ${week.number}, ${day.number} ${month.name}` : ''
          toogleDay.setValue(day.number)
          return { ...day, headLine, dateValue: day.number }
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
      const weeks = month.weeks.map((week, index) => {
        const headLine = index === 0 ? `${month.name}` : ''
        return { dateValue: week.number, headLine }
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
