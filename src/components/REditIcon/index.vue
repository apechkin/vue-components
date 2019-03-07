<template>
  <div class="edit-icons">
    <div v-if="editMode">
      <i class="fa fa-times cancel" aria-hidden="true" @click="handleAccept('cancel')"/>
      <i class="fa fa-check confirm" aria-hidden="true" @click="handleAccept('confirm')"/>
    </div>
    <i v-else class="fa fa-pencil-alt" aria-hidden="true" @click="handleEdit"/>
  </div>
</template>

<script>
  export default {
    props: {
      editMode: Boolean
    },
    methods: {
      handleAccept (action) {
        this.$emit('accept', action)
      },
      handleEdit () {
        this.$emit('edit')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/mixins.scss";
  @import "../../assets/style.scss";
  .edit-icons {
    display: flex;
    justify-content: space-around;
    width: 40px;
  }
  .confirm {
    color: $green_7;
    font-size: $big;
  }
  .cancel {
    color: $red_6;
    font-size: $big;
  }
</style>
