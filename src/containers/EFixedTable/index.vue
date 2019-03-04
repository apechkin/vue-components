<template>
  <div>
    <r-header ref="headerTable" width="100%" :fundsAndDates="fundsAndDates" />
    <r-income  width="100%" :fundsAndDates="fundsAndDates" />
    <r-estimate width="100%" :estimates="estimates" :fundsAndDates="fundsAndDates" />
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
      estimates: Array
    }
  }
</script>
