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
      v-model="selectedOption2"
      label="weeks"
      @change="handleWeekOption"
    />
    <hr>
    <rfixed-table>
      <template v-slot:header>
        <div>123</div>
      </template>
      <template v-slot:values>
        <div>321</div>
      </template>
    </rfixed-table>
  </div>
</template>

<script>
  import EdragInput from '~/containers/EDragInput/index.vue'
  import RSelect from '@/RSelect'
  import { calendar, costItems } from './fakeData.js'
  import { filterByWeek, filterByMonth, filterByYear } from '~/helpers/dateFilters.js'
  import RfixedTable from '@/RFixedTable'
  export default {
    props: {},
    components: {
      EdragInput,
      RSelect,
      RfixedTable
    },
    data () {
      return {
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
        selectedOption2: 'subscribe',
        listOptions: [{
          label: 'Weeks',
          value: 'weeks'
        }, {
          label: 'Months',
          value: 'months'
        }, {
          label: 'Years',
          value: 'years'
        }]
      }
    },
    methods: {
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
        console.log(val)
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "../../assets/mixins.scss";
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
