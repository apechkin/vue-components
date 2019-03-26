<template>
  <div>
    test modal {{abra}}
    <button @click="handleResolve">OK</button>
    <button @click="handleReject">Cancel</button>
  </div>
</template>

<script>
  export default {
    props: {
      abra: String
    },
    methods: {
      handleResolve () {
        this.$store.dispatch('modal/closeModal')
      },
      handleReject () {
        this.$store.dispatch('modal/closeModal')
      }
    }
  }
</script>

<style scoped>

</style>
