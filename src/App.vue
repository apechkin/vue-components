<template>
  <div>
    <l-header />
    <l-content>
      <router-view/>
    </l-content>
    <l-footer />
  </div>
</template>
<script>
import LHeader from './components/Layout/Header'
import LFooter from './components/Layout/Footer'
import LContent from './components/Layout/Content'
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
  }
</style>
