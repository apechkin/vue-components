<template>
  <div class="card mb-4 shadow-sm" :style="componentStyle">
    <div class="card-header" :style="headerStyle">
      <slot name="header">
        <h4 class="my-0 font-weight-normal">Tarif</h4>
      </slot>
    </div>
    <div class="card-body" :style="bodyStyle">
      <slot name="body">
        <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>10 users included</li>
          <li>2 GB of storage</li>
          <li>Email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" @click="$emit('click')" class="btn btn-lg btn-block btn-primary">More info...</button>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      componentStyle: Object,
      headerStyle: Object,
      bodyStyle: Object
    }
  }
</script>

<style lang="scss" scoped>

</style>
