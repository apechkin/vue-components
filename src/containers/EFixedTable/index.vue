<template>
  <div>
    <r-header ref="headerTable" :calendar="calendar" :isScrollTop="isScrollTop" />
    <r-income ref="incomeTable" :income="incomeClient" :isScrollTop="isScrollTop" />
    <r-estimate @userScroll="handleUserScroll" ref="estimateTable" :estimates="estimates" :estTotalContent="estTotalContent" />
    <r-flow ref="flowTable" :flowData="flowData" />
    <r-cumflow ref="cumflowTable" :flowData="flowData" />
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
      calendar: Array,
      incomeClient: Array,
      estimates: Array,
      estTotalContent: Object,
      flowData: Array
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
      /* this.income.scrollLeft = 900
      this.header.scrollLeft = 900
      this.flow.scrollLeft = 900
      this.cumflow.scrollLeft = 900
      */
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
