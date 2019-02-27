<template>
  <div class="content-block">
    <div class="left-block">
      <div class="left-block-content">
        payment from the client
      </div>
    </div>
    <div class="right-block"/>
  </div>
</template>

<script>
  export default {
    props: {
      userData: Array,
      com: [Array, Object]
    },
    data () {
      return {}
    },
    updated () {
      console.log(this.com)
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";
@import "../../assets/mixins.scss";
.left-block-content {
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration-style: solid;
  color: $gray_6;
}
</style>
