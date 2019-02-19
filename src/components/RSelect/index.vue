<template>
  <div
    class="r-select"
    @click.stop="toggleOpen($event)"
    :style="{ width: width }"
  >
    <div class="label">{{ selectedLabel }}</div>
    <span/>
    <transition name="fade">
      <ul class="options" v-if="selectOpen">
        <li
          class="list-item"
          :key="index"
          v-for="(option, index) in options"
          @click="onChange(option)"
        >
          {{option.label}}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      open: {
        type: Boolean,
        default: false
      },
      options: {
        type: Array,
        default: () => ([])
      },
      value: {
        type: [String, Object, Number],
        default: 'Select a value'
      },
      width: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        required: true
      }
    },
    data () {
      let selectedLabel = 'Select'
      const option = this.options.filter(opt => {
        return opt.value === this.label
      }).reduce(format => {
        return format
      })
      if (option) selectedLabel = option.label
      return {
        selectOpen: this.open,
        selectedLabel
      }
    },
    methods: {
      onChange ({ label, value }) {
        this.selectedLabel = label
        this.$emit('change', value)
      },
      toggleOpen () {
        this.selectOpen = !this.selectOpen
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/mixins.scss";
  @import "../../assets/style.scss";
  $height: 32px;
.dropdown {
  user-select: none;
  position: relative;
  display: inline-block;
}
.r-select {
  position: relative;
  display: inline-block;
  width: 80px;
  height: $height;
  cursor: pointer;
  font-family: 'Arial';
  font-size: 13px;
  text-align: left;
  border-radius: 5px;
  box-sizing: border-box;
  white-space: nowrap;
  background-color: $gray_1;
  &:hover {
    background-color: white;
    span {
      border-color: white;
      border-top-color: $gray_4;
    }
  }
  .label {
    @include ellipsis();
    max-width: 100%;
    color: $blue_5;
    position: absolute;
    left: 0;
    padding-top: 6px;
    padding-left: 8px;
    font-weight: 500;
  }
  span {
    display: inline-block;
    cursor: pointer;
    transition: top 200ms ease-in-out, transform 200ms ease-in-out;
    border: solid transparent;
    content: " ";
    border-color: $gray_1;
    border-top-color: $gray_4;
    border-width: 6px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-25%);
    .open & {
      top: -2px;
      transform: rotateX(180deg);
    }
  }
  .options {
    position: absolute;
    list-style: none;
    padding-left: 0;
    left: 0;
    top: $height + 4px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
    border-radius: 5px;
    min-width: 100%;
    text-align: left;
    z-index: 1;
    color: $blue_5;
  }
  .list-item {
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: flex-start;
    padding-left: 8px;
    cursor: pointer;
    height: 32px;
    &:hover {
      background: $blue_5;
      color: white;
    }
  }
}
</style>
