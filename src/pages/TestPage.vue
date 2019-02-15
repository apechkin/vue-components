<template>
  <div>
    <cost-item>
      <div class="fill" draggable="true"/>
    </cost-item>
    <cost-item draggable/>
    <cost-item draggable/>
    <cost-item draggable :style="{backgroundColor: 'blue', border: '4px green solid'}"/>
  </div>
</template>
<script>
  import CostItem from '@/CostItem/index.vue'
  export default {
    components: {
      CostItem
    },
    data () {
      return {

      }
    },
    created () {
    },
    beforeDestroy () {
    }
  }
</script>
<style lang="scss" scoped>
 .fill {
    background-image: url('http://source.unsplash.com/random/150x150');
    position: relative;
    width: 150px;
    height: 150px;
    top: 5px;
    left: 5px;
    cursor: pointer;
  }
</style>
