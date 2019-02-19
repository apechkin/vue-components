/* export default (day) => {
  // необходимо взять все оставшиеся дни недели этого месяца + все дни следующего месяца
  let inDate = '01012019'
  let toDay = new Date().getDate
}
*/
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

getMonth()
getMonth('01012019')
console.log(getWeek(new Date()))
