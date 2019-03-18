<template>
  <div>
    <r-header ref="headerTable" :calendar="calendar" :isScrollTop="isScrollTop" />
    <r-income ref="incomeTable" :income="incomeClient" :isScrollTop="isScrollTop" />
    <r-estimate :setScrollLeft="prevScroll" @userScroll="handleUserScroll" ref="estimateTable" :estimates="estimates" :estTotalContent="estTotalContent" />
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
  import debounce from 'debounce-promise'
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
      flowData: Array,
      getNextDates: Function
    },
    data () {
      const blockWidth = 127
      const visibleWidth = 1143
      return {
        income: null,
        header: null,
        items: null,
        flow: null,
        cumflow: null,
        isScrollTop: false,
        blockWidth,
        visibleWidth,
        prevScroll: 0,
        wait: false
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
      async handleNextDates() {
        await this.getNextDates()
      },
      async handleUserScroll (evt) {
        evt.preventDefault()
        const scrollLeft = evt.target.scrollLeft
        //commit('setFromEst', this.dataTransfer)
        if (this.contentWidth - scrollLeft < this.contentVisibleWidth && !this.wait) {
          if(!this.$store.state.calendar.isLoading) {
             this.$store.commit('setLoading', true)
            this.$store.commit('setScroll', scrollLeft)
            await debounce(this.handleNextDates(), 3000)
          }
          setTimeout(() => {
            this.$store.commit('setLoading', false)
          }, 3000);
        }
        console.log('scroll on:', scrollLeft);
        const scrollTop = evt.target.scrollTop
        if (scrollTop) this.isScrollTop = true
        else this.isScrollTop = false
        this.income.scrollLeft = scrollLeft
        this.header.scrollLeft = scrollLeft
        this.flow.scrollLeft = scrollLeft
        this.cumflow.scrollLeft = scrollLeft
        this.items.scrollTop = scrollTop
      }
    },
    computed: {
      contentWidth () {
        const { calendar } = this
        return calendar.length * this.blockWidth
      },
      contentVisibleWidth () {
        return 8.6 * this.blockWidth
      }
    }
  }
</script>
