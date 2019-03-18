export const clientData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fromClient)
    }, 2000)
  })
}
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

export const calendar = () => {
  return [{
    year: 2019,
    months: [
      {
        name: 'January',
        weeks: [
          {
            number: 1,
            days: [{
              number: 31,
              fullDate: '2018-12-31',
              fromClient: 150145952
            }, {
              number: 1,
              fullDate: '2019-01-01',
              fromClient: 240850000
            }, {
              number: 2,
              fullDate: '2019-01-02',
              fromClient: 40850000
            }, {
              number: 3,
              fullDate: '2019-01-03',
              fromClient: 850000
            }, {
              number: 4,
              fullDate: '2019-01-04',
              fromClient: 50000
            }, {
              number: 5,
              fullDate: '2019-01-05',
              fromClient: 82850000
            }, {
              number: 6,
              fullDate: '2019-01-06',
              fromClient: 6520020
            }]
          },
          {
            number: 2,
            days: [
              {
                number: 7,
                fullDate: '2019-01-07',
                fromClient: 6510020
              }, {
                number: 8,
                fullDate: '2019-01-08',
                fromClient: 651285
              }, {
                number: 9,
                fullDate: '2019-01-09',
                fromClient: 325894
              }, {
                number: 10,
                fullDate: '2019-01-10',
                fromClient: 3652147
              }, {
                number: 11,
                fullDate: '2019-01-11',
                fromClient: 125896
              }, {
                number: 12,
                fullDate: '2019-01-12',
                fromClient: 6665874
              }, {
                number: 13,
                fullDate: '2019-01-13',
                fromClient: 1255489
              }]
          },
          {
            number: 3,
            days: [
              {
                number: 14,
                fullDate: '2019-01-14',
                fromClient: 4512542
              }, {
                number: 15,
                fullDate: '2019-01-15',
                fromClient: 984574
              }, {
                number: 16,
                fullDate: '2019-01-16',
                fromClient: 663254
              }, {
                number: 17,
                fullDate: '2019-01-17',
                fromClient: 99958
              }, {
                number: 18,
                fullDate: '2019-01-18',
                fromClient: 3325587
              }, {
                number: 19,
                fullDate: '2019-01-19',
                fromClient: 1478552
              }, {
                number: 20,
                fullDate: '2019-01-20',
                fromClient: 99967412
              }]
          },
          {
            number: 4,
            days: [
              {
                number: 21,
                fullDate: '2019-01-21',
                fromClient: 1255489
              }, {
                number: 22,
                fullDate: '2019-01-22',
                fromClient: 1255489
              }, {
                number: 23,
                fullDate: '2019-01-23',
                fromClient: 1255489
              }, {
                number: 24,
                fullDate: '2019-01-24',
                fromClient: 1255489
              }, {
                number: 25,
                fullDate: '2019-01-25',
                fromClient: 1255489
              }, {
                number: 26,
                fullDate: '2019-01-26',
                fromClient: 1255489
              }, {
                number: 27,
                fullDate: '2019-01-27',
                fromClient: 1255489
              }]
          },
          {
            number: 5,
            days: [
              {
                number: 28,
                fullDate: '2019-01-28',
                fromClient: 1255489
              }, {
                number: 29,
                fullDate: '2019-01-29',
                fromClient: 1255489
              }, {
                number: 30,
                fullDate: '2019-01-30',
                fromClient: 1255489
              }, {
                number: 31,
                fullDate: '2019-01-31',
                fromClient: 1255489
              }, {
                number: 1,
                fullDate: '2019-02-01',
                fromClient: 1255489
              }, {
                number: 2,
                fullDate: '2019-02-02',
                fromClient: 1255489
              }, {
                number: 3,
                fullDate: '2019-02-03',
                fromClient: 1255489
              }]
          }]
      },
      {
        name: 'February',
        weeks: [{
          number: 6,
          days: [
            {
              number: 4,
              fullDate: '2019-02-04',
              fromClient: 1255489
            }, {
              number: 5,
              fullDate: '2019-02-05',
              fromClient: 1255489
            }, {
              number: 6,
              fullDate: '2019-02-06',
              fromClient: 1255489
            }, {
              number: 7,
              fullDate: '2019-02-07',
              fromClient: 1255489
            }, {
              number: 8,
              fullDate: '2019-02-08',
              fromClient: 1255489
            }, {
              number: 9,
              fullDate: '2019-02-09',
              fromClient: 1255489
            }, {
              number: 10,
              fullDate: '2019-02-10',
              fromClient: 1255489
            }]
        },
        {
          number: 7,
          days: [
            {
              number: 11,
              fullDate: '2019-02-11',
              fromClient: 1255489
            }, {
              number: 12,
              fullDate: '2019-02-12',
              fromClient: 1255489
            }, {
              number: 13,
              fullDate: '2019-02-13',
              fromClient: 1255489
            }, {
              number: 14,
              fullDate: '2019-02-14',
              fromClient: 1255489
            }, {
              number: 15,
              fullDate: '2019-02-15',
              fromClient: 1255489
            }, {
              number: 16,
              fullDate: '2019-02-16',
              fromClient: 1255489
            }, {
              number: 17,
              fullDate: '2019-02-17',
              fromClient: 1255489
            }]
        },
        {
          number: 8,
          days: [
            {
              number: 18,
              fullDate: '2019-02-18',
              fromClient: 1255489
            }, {
              number: 19,
              fullDate: '2019-02-19',
              fromClient: 1255489
            }, {
              number: 20,
              fullDate: '2019-02-20',
              fromClient: 1255489
            }, {
              number: 21,
              fullDate: '2019-02-21',
              fromClient: 1255489
            }, {
              number: 22,
              fullDate: '2019-02-22',
              fromClient: 1255489
            }, {
              number: 23,
              fullDate: '2019-02-23',
              fromClient: 1255489
            }, {
              number: 24,
              fullDate: '2019-02-24',
              fromClient: 1255489
            }]
        },
        {
          number: 9,
          days: [
            {
              number: 25,
              fullDate: '2019-02-25',
              fromClient: 1255489
            }, {
              number: 26,
              fullDate: '2019-02-26',
              fromClient: 1255489
            }, {
              number: 27,
              fullDate: '2019-02-27',
              fromClient: 1255489
            }, {
              number: 28,
              fullDate: '2019-02-28',
              fromClient: 1255489
            }, {
              number: 1,
              fullDate: '2019-03-01',
              fromClient: 1255489
            }, {
              number: 2,
              fullDate: '2019-03-02',
              fromClient: 1255489
            }, {
              number: 3,
              fullDate: '2019-03-03',
              fromClient: 1255489
            }]
        }]
      }]
  }]
}

export const costItems = () => {
  return [
    {
      id: 1514,
      name: '1Do excepteur est culpa et commodo duis.',
      values: [{
        date: '2018-12-31',
        value: 15000
      }, {
        date: '2019-01-01',
        value: 300000
      }, {
        date: '2019-01-02',
        value: 35000000
      }, {
        date: '2019-01-03',
        value: 29000000
      }, {
        date: '2019-01-31',
        value: 150000000
      }]
    },
    {
      id: 2256,
      name: '2Do excepteur est culpa et commodo duis.',
      values: [{
        date: '2018-12-25',
        value: 18000
      }, {
        date: '2019-01-02',
        value: 22000
      }, {
        date: '2019-01-01',
        value: 45120000
      }, {
        date: '2019-01-02',
        value: 35000000
      }, {
        date: '2019-01-03',
        value: 129000000
      } ]
    },
    {
      id: 4587,
      name: '3Do excepteur est culpa et commodo duis.',
      values: [{
        date: '2018-12-31',
        value: 5000
      }, {
        date: '2019-01-31',
        value: 6000
      }, {
        date: '2019-01-01',
        value: 45421254
      }, {
        date: '2019-01-02',
        value: 23651258.21
      }, {
        date: '2019-01-03',
        value: 95554126
      }]
    },
    {
      id: 9512,
      name: '4Do excepteur est culpa et commodo duis.',
      values: [{
        date: '2019-01-20',
        value: 95230
      }, {
        date: '2019-01-26',
        value: 95743
      }, {
        date: '2019-02-02',
        value: 35741
      }]
    },
    {
      id: 95147,
      name: '5Do excepteur est culpa et commodo duis.',
      values: [{
        date: '2019-02-03',
        value: 85413
      }, {
        date: '2019-02-15',
        value: 65893
      }]
    },
    {
      id: 65684,
      name: '6Amet est dolore velit magna proident nostrud ipsum ad occaecat laboris dolore irure ipsum.',
      values: [{
        date: '2019-02-03',
        value: 4512
      }, {
        date: '2019-02-15',
        value: 6521
      }]
    },
    {
      id: 65685,
      name: '7Amet est dolore velit magna proident nostrud ipsum ad occaecat laboris dolore irure ipsum.',
      values: [{
        date: '2019-02-03',
        value: 45122
      }, {
        date: '2019-02-15',
        value: 68521
      }]
    },
    {
      id: 65686,
      name: '8Amet est dolore velit magna proident nostrud ipsum ad occaecat laboris dolore irure ipsum.',
      values: [{
        date: '2019-02-03',
        value: 4512
      }, {
        date: '2019-02-15',
        value: 6521
      }]
    },
    {
      id: 65687,
      name: '9Amet est dolore velit magna proident nostrud ipsum ad occaecat laboris dolore irure ipsum.',
      values: [{
        date: '2019-02-03',
        value: 4512
      }, {
        date: '2019-02-15',
        value: 6521
      }]
    },
    {
      id: 65688,
      name: '10Amet est dolore velit magna proident nostrud ipsum ad occaecat laboris dolore irure ipsum.',
      values: [{
        date: '2019-02-03',
        value: 4512
      }, {
        date: '2019-02-15',
        value: 6521
      }]
    },
    {
      id: 65689,
      name: '11Amet est dolore velit magna proident nostrud ipsum ad occaecat laboris dolore irure ipsum.',
      values: [{
        date: '2019-02-03',
        value: 4512
      }, {
        date: '2019-02-15',
        value: 6521
      }]
    }
  ]
}
