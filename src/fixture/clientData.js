export default () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(fromClient)
  }, 1000)
})

const fromClient = [
  {
    fullDate: '2018-12-25',
    fromClient: 800000
  },
  {
    fullDate: '2018-12-28',
    fromClient: 350000
  },
  {
    fullDate: '2019-01-09',
    fromClient: 1000000
  },
  {
    fullDate: '2019-01-12',
    fromClient: 80000000
  },
  {
    fullDate: '2019-01-25',
    fromClient: 82000000
  },
  {
    fullDate: '2019-01-29',
    fromClient: 52654123
  },
  {
    fullDate: '2018-12-31',
    fromClient: 150145952
  },
  {
    fullDate: '2019-01-01',
    fromClient: 240850000
  },
  {
    fullDate: '2019-01-06',
    fromClient: 6520020
  },
  {
    fullDate: '2019-02-14',
    fromClient: 1255489
  }
]
