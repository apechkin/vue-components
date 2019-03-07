<template>
  <div>
    <r-header ref="headerTable" :fundsAndDates="fundsAndDates" />
    <r-income ref="incomeTable" :fundsAndDates="fundsAndDates" />
    <r-estimate ref="estimateTable" :estimates="estimates" :estTotalContent="estTotalContent" />
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
    mounted () {
      const mask = this.$refs.estimateTable.$refs.mask.$el
      const income = this.$refs.incomeTable.$refs.income
      console.log(income)

      mask.addEventListener('scroll', function () {
        income.scrollLeft = this.scrollLeft
      }, { passive: true })
    }
  }
</script>
