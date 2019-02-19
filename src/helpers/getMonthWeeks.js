/* export default (day) => {
  // необходимо взять все оставшиеся дни недели этого месяца + все дни следующего месяца
  let inDate = '01012019'
  let toDay = new Date().getDate
}
*/
const calendar = () => {
  return [
    {
      year: 2019,
      month: [{
        monthName: 'January',
        weeks: [{
          weekNumber: 1,
          days: [{
            day: 31,
            fullDate: '31.12.2018'
          }, {
            day: 1,
            fullDate: '01.01.2019'
          }, {
            day: 2,
            fullDate: '02.01.2019'
          }, {
            day: 3,
            fullDate: '03.01.2019'
          }, {
            day: 4,
            fullDate: '04.01.2019'
          }, {
            day: 5,
            fullDate: '05.01.2019'
          }, {
            day: 6,
            fullDate: '06.01.2019'
          }]
        },
        {
          weekNumber: 2,
          days: [
            {
              day: 7,
              fullDate: '07.01.2019'
            }, {
              day: 8,
              fullDate: '08.01.2019'
            }, {
              day: 9,
              fullDate: '09.01.2019'
            }, {
              day: 10,
              fullDate: '10.01.2019'
            }, {
              day: 11,
              fullDate: '11.01.2019'
            }, {
              day: 12,
              fullDate: '12.01.2019'
            }, {
              day: 13,
              fullDate: '13.01.2019'
            }]
        },
        {
          weekNumber: 3,
          days: [
            {
              day: 14,
              fullDate: '14.01.2019'
            }, {
              day: 15,
              fullDate: '15.01.2019'
            }, {
              day: 16,
              fullDate: '16.01.2019'
            }, {
              day: 17,
              fullDate: '17.01.2019'
            }, {
              day: 18,
              fullDate: '18.01.2019'
            }, {
              day: 19,
              fullDate: '19.01.2019'
            }, {
              day: 20,
              fullDate: '20.01.2019'
            }]
        },
        {
          weekNumber: 4,
          days: [
            {
              day: 21,
              fullDate: '21.01.2019'
            }, {
              day: 22,
              fullDate: '22.01.2019'
            }, {
              day: 23,
              fullDate: '23.01.2019'
            }, {
              day: 24,
              fullDate: '24.01.2019'
            }, {
              day: 25,
              fullDate: '25.01.2019'
            }, {
              day: 26,
              fullDate: '26.01.2019'
            }, {
              day: 27,
              fullDate: '27.01.2019'
            }]
        },
        {
          weekNumber: 5,
          days: [
            {
              day: 28,
              fullDate: '28.01.2019'
            }, {
              day: 29,
              fullDate: '29.01.2019'
            }, {
              day: 30,
              fullDate: '30.01.2019'
            }, {
              day: 31,
              fullDate: '31.01.2019'
            }, {
              day: 1,
              fullDate: '01.02.2019'
            }, {
              day: 2,
              fullDate: '02.02.2019'
            }, {
              day: 3,
              fullDate: '03.02.2019'
            }]
        }]
      },
      {
        monthName: 'February',
        weeks: [{
          weekNumber: 1,
          days: [
            {
              day: 4,
              fullDate: '04.02.2019'
            }, {
              day: 5,
              fullDate: '05.02.2019'
            }, {
              day: 6,
              fullDate: '06.02.2019'
            }, {
              day: 7,
              fullDate: '07.02.2019'
            }, {
              day: 8,
              fullDate: '08.02.2019'
            }, {
              day: 9,
              fullDate: '09.02.2019'
            }, {
              day: 10,
              fullDate: '10.02.2019'
            }]
        },
        {
          weekNumber: 2,
          days: [
            {
              day: 11,
              fullDate: '11.02.2019'
            }, {
              day: 12,
              fullDate: '12.02.2019'
            }, {
              day: 13,
              fullDate: '13.02.2019'
            }, {
              day: 14,
              fullDate: '14.02.2019'
            }, {
              day: 15,
              fullDate: '15.02.2019'
            }, {
              day: 16,
              fullDate: '16.02.2019'
            }, {
              day: 17,
              fullDate: '17.02.2019'
            }]
        },
        {
          weekNumber: 3,
          days: [
            {
              day: 18,
              fullDate: '18.02.2019'
            }, {
              day: 19,
              fullDate: '19.02.2019'
            }, {
              day: 20,
              fullDate: '20.02.2019'
            }, {
              day: 21,
              fullDate: '21.02.2019'
            }, {
              day: 22,
              fullDate: '22.02.2019'
            }, {
              day: 23,
              fullDate: '23.02.2019'
            }, {
              day: 24,
              fullDate: '24.02.2019'
            }]
        },
        {
          weekNumber: 4,
          days: [
            {
              day: 25,
              fullDate: '25.02.2019'
            }, {
              day: 26,
              fullDate: '26.02.2019'
            }, {
              day: 27,
              fullDate: '27.02.2019'
            }, {
              day: 28,
              fullDate: '28.02.2019'
            }, {
              day: 1,
              fullDate: '01.03.2019'
            }, {
              day: 2,
              fullDate: '02.03.2019'
            }, {
              day: 3,
              fullDate: '03.03.2019'
            }]
        }]
      }]
    }
  ]
}
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
