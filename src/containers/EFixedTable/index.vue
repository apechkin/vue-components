<template>
  <div>
    <div class="scrolled">
      <r-header
        ref="headerTable"
        :calendar="$store.getters['cashFlow/calendarByType'](selectedOption)" />
      <r-income
        ref="incomeTable"
        :income="$store.getters['cashFlow/incomeByType'](selectedOption)" />
    </div>
    <r-estimate
      @userScroll="handleUserScroll"
      @xReachEnd="addNewDates"
      ref="estimateTable"
      :estimates="estimates"
      :estTotalContent="$store.getters['cashFlow/computeEstimate'](selectedOption)" />
    <r-flow ref="flowTable" :flowData="$store.getters['cashFlow/computeCashFlow'](selectedOption)" />
    <r-cumflow ref="cumflowTable" :flowData="$store.getters['cashFlow/computeCashFlow'](selectedOption)" />
  </div>
</template>

<script>
  import RHeader from '@/RFixedTable/header.vue'
  import RIncome from '@/RFixedTable/income.vue'
  import REstimate from '@/RFixedTable/estimate.vue'
  import RFlow from '@/RFixedTable/cashflow.vue'
  import RCumflow from '@/RFixedTable/cumCashFlow.vue'
  import { mapState } from 'vuex'
  export default {
    components: {
      RHeader,
      RIncome,
      REstimate,
      RFlow,
      RCumflow
    },
    props: {
      getNextDates: Function,
      selectedOption: String
    },
    data () {
      return {
        income: null,
        header: null,
        items: null,
        flow: null,
        cumflow: null,
        isScrollTop: false,
        wait: false
      }
    },
    computed: {
      ...mapState({
        calendar: state => state.cashFlow.calendar,
        estimates: state => state.cashFlow.estimates
      })
    },
    mounted () {
      this.income = this.$refs.incomeTable.$refs.income
      this.header = this.$refs.headerTable.$refs.header
      this.items = this.$refs.estimateTable.$refs.items
      this.flow = this.$refs.flowTable.$refs.flow
      this.cumflow = this.$refs.cumflowTable.$refs.flow
    },
    beforeDestroy () {
      this.income = null
      this.header = null
      this.items = null
      this.flow = null
      this.cumflow = null
    },
    methods: {
      async handleUserScroll (evt) {
        evt.preventDefault()
        const scrollLeft = evt.target.scrollLeft
        const scrollTop = evt.target.scrollTop
        if (scrollTop > 0) {
          this.$nextTick(function () {
            this.isScrollTop = true
          })
        } else {
          this.$nextTick(function () {
            this.isScrollTop = false
          })
        }
        this.income.scrollLeft = scrollLeft
        this.header.scrollLeft = scrollLeft
        this.flow.scrollLeft = scrollLeft
        this.cumflow.scrollLeft = scrollLeft
        this.items.scrollTop = scrollTop
      },
      async addNewDates (evt) {
        const { selectedOption } = this
        this.$store.dispatch('cashFlow/addNextDates', selectedOption)
      }
    }
  }
</script>
