<template>
  <div class="home-block">
    <div class="center-block">
      <Content/>
    </div>
  </div>
</template>
<script>
  import Content from '../Content'
  export default {
    props: {},
    components: {
      Content: Content
    }
  }
</script>
<style lang="scss" scoped>
.home-block {
  display: flex;
  position: relative;
}
.left-block {
  display: inline-flex;
  //width: 25vw;
}
.center-block {
  display: flex;
  width: 100%;
}
</style>
