<template>
  <div>
    <r-header ref="headerTable" :fundsAndDates="fundsAndDates" :isScrollTop="isScrollTop" />
    <r-income ref="incomeTable" :fundsAndDates="fundsAndDates" :isScrollTop="isScrollTop" />
    <r-estimate @userScroll="handleUserScroll" ref="estimateTable" :estimates="estimates" :estTotalContent="estTotalContent" />
    <r-flow ref="flowTable" :cashByDay="cashByDay" />
    <r-cumflow ref="cumflowTable" :fundsAndDates="fundsAndDates" />
  </div>
</template>

<script>
  import RHeader from '@/RFixedTable/header.vue'
  import RIncome from '@/RFixedTable/income.vue'
  import REstimate from '@/RFixedTable/estimate.vue'
  import RFlow from '@/RFixedTable/cashflow.vue'
  import RCumflow from '@/RFixedTable/cumCashFlow.vue'
  export default {
    components: {
      RHeader,
      RIncome,
      REstimate,
      RFlow,
      RCumflow
    },
    props: {
      fundsAndDates: Array,
      estimates: Array,
      estTotalContent: Array,
      cashByDay: Array
    },
    data () {
      return {
        income: null,
        header: null,
        items: null,
        flow: null,
        cumflow: null,
        isScrollTop: false
      }
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
      handleUserScroll (evt) {
        evt.preventDefault()
        const scrollLeft = evt.target.scrollLeft
        const scrollTop = evt.target.scrollTop
        if (scrollTop) this.isScrollTop = true
        else this.isScrollTop = false
        this.income.scrollLeft = scrollLeft
        this.header.scrollLeft = scrollLeft
        this.flow.scrollLeft = scrollLeft
        this.cumflow.scrollLeft = scrollLeft
        this.items.scrollTop = scrollTop
      }
    }
  }
</script>
