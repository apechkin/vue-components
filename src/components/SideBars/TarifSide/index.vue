<template>
  <div class="sidebar" :class="{'target': isTarget}" :style="componentStyle">
    <div class="close-btn" @click="$emit('click')">&times;</div>
    <slot name="header"><h4>Tarif</h4></slot>
    <slot name="body">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo quam voluptas quod. Quas beatae, quo sint perspiciatis facilis sequi illo in sed quos libero, dolore dolores molestias accusantium. Sit.
      </p>
    </slot>
  </div>
</template>

<script>
  export default {
    props: {
      componentStyle: Object,
      isTarget: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background-color: #333;
  color: #fff;
  padding: 40px;
  transition: 0.5s;
  transform: translateX(100%);
  .close-btn {
    position: fixed;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
  }
  &.target {
    transform: translateX(0%);
    z-index: 999;
  }
  &.target ~ .container {
    opacity: 0.4;
  }
}
</style>
