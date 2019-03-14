<template>
  <div class="container-fluid">
    <h3>Draggable elements with draggable block</h3>
    <div class="d-flex flex-row flex-wrap">
      <edrag-input
        v-for="item in items" :key="item.id"
        :value="item.value"
        @accepted="data => {handleAccept(data, item.id)}"
        currency="RUR"/>
      <edrag-input
        v-for="item in items" :key="`ne_${item.id}`"
        :value="item.value"
        @accepted="data => {handleAccept(data, item.id)}"
        currency="RUR"/>
    </div>
    <hr>
    <div class="row">
      123
    </div>
    <hr>
    <r-select
      :options="listOptions"
      v-model="selectedOption"
      label="weeks"
      @change="handleWeekOption"
    />
    <!-- <rfixed-table/> -->
    <hr>
    <button @click.prevent="handleGenCalendar">click on me</button>
    <hr>
    <e-table v-if="initiated"
             :calendar="computeCalendar"
             :incomeClient="computeIncome"
             :estimates="estimates"
             :estTotalContent="estTotalContent"
             :flowData="flowData" />
  </div>
</template>

<script>
  import EdragInput from '~/containers/EDragInput/index.vue'
  import RSelect from '@/RSelect'
  import { clientData, calendar, costItems } from './fakeData.js'
  import { filterByWeek, filterByMonth, filterByYear } from '~/helpers/dateFilters.js'
  import { mapIncomeToDate, mapEstToDate, cashFlow } from '~/helpers/mapper.js'
  import { analize, initWeekCalendar } from '~/helpers/calendar.js'
  import ETable from '~/containers/EFixedTable/index.vue'
  export default {
    directives: {
      scroll: {
        inserted: function (el, binding) {
          let f = function (evt) {
            if (binding.value(evt, el)) {
              window.removeEventListener('scroll', f)
            }
          }
          window.addEventListener('scroll', f)
        }
      }
    },
    props: {},
    components: {
      EdragInput,
      RSelect,
      ETable
    },
    data () {
      let initiated = false
      let gCalendar = {
        weeks: null,
        months: null,
        years: null
      }
      let incomeFromClient = null
      return {
        dates: [29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        items: [
          {
            id: 1,
            value: 15000
          },
          {
            id: 2,
            value: 25000
          },
          {
            id: 3,
            value: 35000
          },
          {
            id: 4,
            value: 45000
          },
          {
            id: 5,
            value: 55000
          },
          {
            id: 6,
            value: 65000
          }
        ],
        selectedOption: 'weeks',
        listOptions: [{
          label: 'Weeks',
          value: 'weeks'
        }, {
          label: 'Months',
          value: 'months'
        }, {
          label: 'Years',
          value: 'years'
        }],
        est: [],
        initiated,
        gCalendar,
        incomeFromClient,
        wCalendar: {
          data: [],
          firstWeekDay: null,
          lastWeekDay: null
        }
      }
    },
    async created () {
      this.est = costItems()
      await this.init()
    },
    mounted () {
      /*
      const headerTable = this.$refs.headerTable.$refs.header
      const contentTable = this.$refs.contentTable.$refs.content
      contentTable.addEventListener('scroll', function () {
        headerTable.scrollLeft = this.scrollLeft
        headerTable.scrollTop = this.scrollTop
      }, { passive: true })
      */
    },
    methods: {
      async init () {
        this.initiated = false
        this.incomeFromClient = await clientData()
        const { minDate, maxDate } = await analize(this.incomeFromClient)
        this.gCalendar['weeks'] = initWeekCalendar(this.wCalendar, minDate, maxDate)
        console.log('init weeks:', this.gCalendar['weeks'])
        this.initiated = true
      },
      handleGenCalendar () {
        console.log('handle:', initWeekCalendar())
      },
      hadleScroll (e) {
        console.log(e)
      },
      checkState (e) {
        e.preventDefault()
      },
      handleAccept (data, id) {
        const { status, value } = data
        if (status === 'changed') {
          this.initialState['items'] = this.initialState['items'].map(item => {
            return item.id === id ? { ...item, ...{ value: value } } : item
          })
        }
      },
      handleWeekOption (val) {
        this.selectedOption = val
      }
    },
    computed: {
      computeCalendar () {
        const { selectedOption } = this
        return this.gCalendar[selectedOption]
      },
      computeIncome () {
        const { selectedOption, incomeFromClient, gCalendar } = this
        const data = mapIncomeToDate(gCalendar[selectedOption], incomeFromClient, selectedOption)
        return data
      },
      fundsAndDates () {
        const { selectedOption } = this
        let data = []
        switch (selectedOption) {
          case 'weeks':
            data = filterByWeek(calendar())
            break
          case 'months':
            data = filterByMonth(calendar())
            break
          case 'years':
            data = filterByYear(calendar())
            break
          default:
            break
        }
        return data
      },
      estimates () {
        return costItems()
      },
      estTotalContent () {
        const data = mapEstToDate(this.est, this.fundsAndDates, this.selectedOption)
        console.log('maptodate:', data)
        return data
      },
      flowData () {
        const data = cashFlow(this.est, this.fundsAndDates)
        return data
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "../../assets/mixins.scss";
@import "../../assets/style.scss";
.drag-example {
  background-color: $gray_4;
}
 .drag-orange {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: $orange_3;
  }
</style>
