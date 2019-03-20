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
             :estTotalContent="computeEstimate"
             :flowData="computeCashFlow"
             :getNextDates="getNextDates" />
  </div>
</template>

<script>
  import EdragInput from '~/containers/EDragInput/index.vue'
  import RSelect from '@/RSelect'
  import { clientData, calendar, costItems } from './fakeData.js'
  import {
    filterByWeek,
    filterByMonth,
    filterByYear } from '~/helpers/dateFilters.js'
  import {
    mapIncomeToDate,
    mapEstToDate,
    mapEstToClient,
    cashFlow } from '~/helpers/mapper.js'
  import {
    analize,
    analizeEstimate,
    initWeekCalendar,
    minMaxDate,
    nextWeek } from '~/helpers/calendar.js'
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
        this.est = await costItems()
        const { minDate: minDateClient, maxDate: maxDateClient } = analize(this.incomeFromClient)
        const { minDate: minDateEst, maxDate: maxDateEst } = analizeEstimate(this.est)
        const { min, max } = minMaxDate([minDateClient, minDateEst, maxDateClient, maxDateEst])
        this.gCalendar['weeks'] = initWeekCalendar(this.wCalendar, min, max)
        this.initiated = true
      },
      handleGenCalendar () {
        const { wCalendar } = this
        const next = nextWeek(this.wCalendar)
        wCalendar['lastWeekDay'] = next[0]['lastWeekDay']
        this.gCalendar['weeks'] = this.gCalendar['weeks'].concat(next)
        //  = [...data, ...next]
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
      },
      getNextDates () {
        const { wCalendar } = this
        const next = nextWeek(this.wCalendar)
        wCalendar['lastWeekDay'] = next[0]['lastWeekDay']
        this.gCalendar['weeks'] = this.gCalendar['weeks'].concat(next)
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
      computeCashFlow () {
        const { computeIncome, computeEstimate } = this
        const data = mapEstToClient(computeIncome, computeEstimate)
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
      computeEstimate () {
        const { selectedOption, est, gCalendar } = this
        const data = mapEstToDate(gCalendar[selectedOption], est, selectedOption)
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
