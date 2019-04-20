<template>
  <div class="container" :style="componentStyle">
    <div class="card-deck mb-3 text-center" :class="{'transform': isTarget}">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      componentStyle: Object,
      isTarget: Boolean
    }
  }
</script>

<style lang="scss" scoped>
.container {
  transform-style: preserve-3d;
  perspective: 900px;
}
.transform {
  transition: .5s;
  transform: rotateY(25deg);
  transform-origin: left;
}
</style>
