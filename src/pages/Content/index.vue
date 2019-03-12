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
    <e-table
      :fundsAndDates="fundsAndDates"
      :estimates="estimates"
      :estTotalContent="estTotalContent"
      :cashByDay="cashByDay" />
  </div>
</template>

<script>
  import EdragInput from '~/containers/EDragInput/index.vue'
  import RSelect from '@/RSelect'
  import { calendar, costItems } from './fakeData.js'
  import { filterByWeek, filterByMonth, filterByYear } from '~/helpers/dateFilters.js'
  import { mapEstToDate, cashFlowByDay, cummulative } from '~/helpers/mapper.js'
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
        est: []
      }
    },
    created () {
      this.est = costItems()
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
        const data = mapEstToDate(this.est, this.fundsAndDates)
        return data
      },
      cashByDay () {
        const data = cashFlowByDay(this.est, this.fundsAndDates)
        console.log(data)
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
