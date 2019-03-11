<template>
  <div>
    <r-header ref="headerTable" :fundsAndDates="fundsAndDates" :isScrollTop="isScrollTop" />
    <r-income ref="incomeTable" :fundsAndDates="fundsAndDates" :isScrollTop="isScrollTop" />
    <r-estimate @userScroll="handleUserScroll" ref="estimateTable" :estimates="estimates" :estTotalContent="estTotalContent" />
  </div>
</template>

<script>
  import RHeader from '@/RFixedTable/header.vue'
  import RIncome from '@/RFixedTable/income.vue'
  import REstimate from '@/RFixedTable/estimate.vue'
  export default {
    components: {
      RHeader,
      RIncome,
      REstimate
    },
    props: {
      fundsAndDates: Array,
      estimates: Array,
      estTotalContent: Array
    },
    data () {
      return {
        income: null,
        header: null,
        items: null,
        isScrollTop: false
      }
    },
    mounted () {
      this.income = this.$refs.incomeTable.$refs.income
      this.header = this.$refs.headerTable.$refs.header
      this.items = this.$refs.estimateTable.$refs.items
    },
    beforeDestroy () {
      this.income = null
      this.header = null
      this.items = null
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
        this.items.scrollTop = scrollTop
      }
    }
  }
</script>
