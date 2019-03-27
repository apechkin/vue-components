<template>
  <base-box :title="title">
    <base-content height="100%" column>
      <div class="content-body">
        <slot/>
      </div>
      <div class="content-actions">
        <slot name="actions"/>
        <button @click="handleClick">cancel</button>
        <button @click="handleClick">confirm</button>
      </div>
    </base-content>
  </base-box>
</template>

<script>
  export default {
    props: {
      title: String
    },
    methods: {
      handleClick () {
        this.$store.dispatch('modal/closeModal')
      }
    },
    created () {
      console.log(this.$slots)
    }
  }
</script>

<style lang="scss">
</style>
