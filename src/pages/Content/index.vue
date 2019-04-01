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
    <button>click on me</button>
    <hr>
    <e-table v-if="!isLoading" :selectedOption="selectedOption" />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import EdragInput from '~/containers/EDragInput/index.vue'
  import RSelect from '@/RSelect'
  import ETable from '~/containers/EFixedTable/index.vue'
  export default {
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
        }]
      }
    },
    async created () {
      await this.init()
    },
    methods: {
      async init () {
        await this.$store.dispatch('cashFlow/clientEstimate', { id: this.selectedOption })
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
      ...mapState({
        isLoading: state => state.cashFlow.isLoading
      })
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
