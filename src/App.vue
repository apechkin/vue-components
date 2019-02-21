<template>
  <div>
    <l-header />
    <l-content>
      <router-view/>
    </l-content>
    <!-- <l-footer /> -->
  </div>
</template>
<script>
  import LHeader from './pages/Layout/Header'
  import LFooter from './pages/Layout/Footer'
  import LContent from './pages/Layout/Content'
  export default {
    components: {
      LHeader,
      LFooter,
      LContent
    }
  }
</script>
<style lang="scss">
  html, body {
    height: 100%;
    margin: 0;
    background-color: #dee2e6;
  }
</style>
