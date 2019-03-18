import moment from 'moment'
import { flatten } from './dateFilters'

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const currentWeek = (inDate = null) => {
  const firstWeekDay = inDate ? moment(inDate).startOf('isoWeek') : moment().startOf('isoWeek')
  const lastWeekDay = inDate ? moment(inDate).endOf('isoWeek') : moment().endOf('isoWeek')
  return Array.from({ length: 7 }, (v, k) => {
    const nextDay = moment(firstWeekDay).add(k, 'd')
    const headLine = k === 0 ? `week ${moment(nextDay).isoWeek()}, ${moment(nextDay).date()} ${monthNames[moment(nextDay).month()]}` : ``
    return {
      fullDate: `${moment(nextDay).format('YYYY-MM-DD')}`,
      dateValue: moment(nextDay).date(),
      week: moment(nextDay).isoWeek(),
      month: monthNames[moment(nextDay).month()],
      year: moment(nextDay).year(),
      lastWeekDay,
      firstWeekDay,
      headLine
    }
  })
}

export const nextWeek = ({ lastWeekDay: lastDay }) => {
  const firstWeekDay = moment(lastDay).add(1, 'd')
  const lastWeekDay = moment(firstWeekDay).endOf('isoWeek')
  return Array.from({ length: 7 }, (v, k) => {
    const nextDay = moment(firstWeekDay).add(k, 'd')
    const headLine = k === 0 ? `week ${moment(nextDay).isoWeek()}, ${moment(nextDay).date()} ${monthNames[moment(nextDay).month()]}` : ``
    return {
      fullDate: `${moment(nextDay).format('YYYY-MM-DD')}`,
      dateValue: moment(nextDay).date(),
      week: moment(nextDay).isoWeek(),
      month: monthNames[moment(nextDay).month()],
      year: moment(nextDay).year(),
      lastWeekDay,
      firstWeekDay,
      headLine
    }
  })
}

export const prevWeek = ({ firstWeekDay: firstDay }) => {
  const lastWeekDay = moment(firstDay).subtract(1, 'd')
  const firstWeekDay = moment(lastWeekDay).startOf('isoWeek')
  return Array.from({ length: 7 }, (v, k) => {
    const nextDay = moment(firstWeekDay).add(k, 'd')
    const headLine = k === 0 ? `week ${moment(nextDay).isoWeek()}, ${moment(nextDay).date()} ${monthNames[moment(nextDay).month()]}` : ``
    return {
      fullDate: `${moment(nextDay).format('YYYY-MM-DD')}`,
      dateValue: moment(nextDay).date(),
      week: moment(nextDay).isoWeek(),
      month: monthNames[moment(nextDay).month()],
      year: moment(nextDay).year(),
      lastWeekDay,
      firstWeekDay,
      headLine
    }
  })
}

export const initWeekCalendar = (wCalendar, start = null, finish = null) => {
  if (start && finish) {
    const current = currentWeek(start)
    wCalendar.data.push(current)
    wCalendar['firstWeekDay'] = current[0]['firstWeekDay']
    wCalendar['lastWeekDay'] = current[0]['lastWeekDay']
    let s = 0
    let next = null
    while (moment(wCalendar['lastWeekDay']).isBefore(finish)) {
      if (!s) {
        next = nextWeek(current[0])
        wCalendar['lastWeekDay'] = next[0]['lastWeekDay']
        wCalendar.data.push(next)
        s++
      } else {
        next = nextWeek(next[0])
        wCalendar['lastWeekDay'] = next[0]['lastWeekDay']
        wCalendar.data.push(next)
      }
    }
    return flatten(wCalendar['data'])
  } else {
    const current = currentWeek()
    const prev = prevWeek(current[0])
    const next = nextWeek(current[0])
    wCalendar.data.push(current)
    wCalendar['firstWeekDay'] = current[0]['firstWeekDay']
    wCalendar['lastWeekDay'] = current[0]['lastWeekDay']
    wCalendar['firstWeekDay'] = prev[0]['firstWeekDay']
    wCalendar['lastWeekDay'] = next[0]['lastWeekDay']
    wCalendar.data.unshift(prev)
    wCalendar.data.push(next)
    return flatten(wCalendar['data'])
  }
}

export const analize = (data = []) => {
  if (Array.isArray(data) && data.length > 0) {
    const dates = data.map(elem => {
      return moment(elem.fullDate, 'YYYY-MM-DD')
    })
    return { minDate: moment.min(dates), maxDate: moment.max(dates) }
  } else {
    return { minDate: null, maxDate: null }
  }
}

export const analizeEstimate = (data = []) => {
  if (Array.isArray(data) && data.length > 0) {
    let min = null
    let max = null
    data.forEach((elem, index) => {
      const { values } = elem
      values.forEach((v, inx) => {
        if (index === 0 && inx === 0) min = max = moment(v.date, 'YYYY-MM-DD')
        if (moment(v.date, 'YYYY-MM-DD').isBefore(min)) min = moment(v.date, 'YYYY-MM-DD')
        if (moment(v.date, 'YYYY-MM-DD').isAfter(max)) max = moment(v.date, 'YYYY-MM-DD')
      })
    })
    return { minDate: min, maxDate: max }
  } else {
    return { minDate: null, maxDate: null }
  }
}

export const minMaxDate = (dates) => {
  if (Array.isArray(dates)) {
    if (dates.length > 0) {
      return {
        min: moment.min(dates),
        max: moment.max(dates)
      }
    } else {
      return {
        min: moment(), max: moment()
      }
    }
  } else {
    return {
      min: null, max: null
    }
  }
}

export const calendar = (key = 'weeks') => {
  const date = moment().date() // дата в месяце число от 1 до 31
  const day = moment().day()
  const week = moment().isoWeek()
  const year = moment().year()
  const month = monthNames[moment().month()]

  const weekStart = moment().subtract((day - 1), 'days')
  const dateStart = moment(weekStart).date() // дата в месяце число от 1 до 31
  const dayStart = moment(weekStart).day()
  const yearStart = moment(weekStart).year()
  const currentW = currentWeek()
  const nextW = nextWeek(currentW[0])
  const prevW = prevWeek(currentW[0])
  console.log(`Today: ${date} ${month}, it's a ${day} day of week - week num: ${week} - ${year}`)
  console.log(`Week start at: ${dateStart} ${month}, it's a ${dayStart} day of week - week num: ${week} - ${yearStart}`)
  console.log(`Days of prev week:`, prevW)
  console.log(`Days of current week:`, currentW)
  console.log(`Days of next week:`, nextW)
  console.log('3 weeks:', initWeekCalendar())
}
