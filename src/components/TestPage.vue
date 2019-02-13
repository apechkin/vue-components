<template>
  <div>
    <div class="header">This is page for test components</div>
    <div class="body">
      <cost-item>
        <div class="fill" draggable="true"></div>
      </cost-item>
      <cost-item draggable></cost-item>
      <cost-item draggable></cost-item>
      <cost-item draggable :style="{backgroundColor: 'blue', border: '4px green solid'}"></cost-item>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
import CostItem from './CostItem'
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
