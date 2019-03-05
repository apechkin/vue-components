<template>
  <div>
    <r-header ref="headerTable" :fundsAndDates="fundsAndDates" />
    <r-income :fundsAndDates="fundsAndDates" />
    <r-estimate :estimates="estimates" :estTotalContent="estTotalContent" />
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
    }
  }
</script>
