<template>
  <div>
    <div v-if="editMode" class="edit-icons">
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
    font-size: $big;
  }
  .confirm {
    color: $green_7;
  }
  .cancel {
    color: $red_6;
  }
</style>
