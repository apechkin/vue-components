<template>
  <div class="actions">
    <r-button @click.native="$emit('confirm')">Confirm</r-button>
    <r-button @click.native="$emit('cancel')">Cancel</r-button>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .actions {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 119px;
    background-color: white;
    align-items: flex-end;
    justify-content: flex-end;
  }
</style>
