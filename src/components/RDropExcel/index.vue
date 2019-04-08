<template>
  <vueDropzone
    id="dropZone"
    ref="dropZone"
    class="drop-box"
    v-on="$listeners" :options="dropOptions || dropComponentOptions"
    @vdropzone-file-added="vAdded"
  />
</template>

<script>
  import vueDropzone from 'vue2-dropzone'
  export default {
    props: {
      dropOptions: Object,
      useComponentTemplate: Boolean
    },
    components: {
      vueDropzone
    },
    data () {
      if (this.dropOptions) {
        if (this.useComponentTemplate) this.dropOptions.previewTemplate = this.template()
      }
      return {
        dropComponentOptions: {
          autoProcessQueue: false,
          forceChunking: true,
          url: '/',
          maxFiles: 1,
          acceptedFiles: '.xlsx',
          thumbnailWidth: 150,
          thumbnailHeight: 150,
          previewTemplate: this.template(),
          dictDefaultMessage: 'Drop file to parse'
        },
        fileAdded: false,
        closeIcon: null
      }
    },
    beforeDestroy () {
      if (this.closeIcon) {
        this.closeIcon.removeEventListener('click', this.closeClick)
        this.closeIcon = null
      }
    },
    methods: {
      vAdded () {
        this.fileAdded = true
        const $ = document.querySelector.bind(document)
        this.closeIcon = $('.drop-box-close')
        this.closeIcon.addEventListener('click', this.closeClick)
      },
      template () {
        return `<div class="drop-box-preview">
          <div class="drop-box-content">
            <label class="drop-box-close"></label>
            <div class="drop-box-image"></div>
            <div class="drop-box-filename">
              <span data-dz-name></span>
            </div>
          </div>
        </div>`
      },
      closeClick (e) {
        e.preventDefault()
        this.$refs.dropZone.removeAllFiles(true)
        this.fileAdded = false
      }
    },
    computed: {
      options () {
        const { dropOptions, dropComponentOptions } = this
        return { ...dropComponentOptions, ...dropOptions }
      }
    }
  }
</script>

<style lang="scss">
@import "../../assets/style.scss";
@import "../../assets/mixins.scss";
.drop-box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  min-height: 150px;
  border: 2px dashed $gray_6;
  background: white;
  padding: 20px 20px;
  font-family: 'Roboto', sans-serif, serif;
  .dz-message {
    font-size: 18px;
    color: $blue_4;
  }
  .drop-box-content {
    display: flex;
    position: relative;
    height: 105px;
    align-items: center;
    .drop-box-close {
      position: absolute;
      top: -5px;
      left: 96px;
      width: 21px;
      height: 21px;
      background-color: white;
      border-radius: 2px;
      &:hover {
        background-color: $gray_4;
        opacity: 1;
        &:before, &:after {
          background-color: white;
        }
      }
      &:before, &:after {
        position: absolute;
        left: 9px;
        content: ' ';
        height: 20px;
        width: 3px;
        background-color: $gray_5;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }
    .drop-box-image {
      position: relative;
      width: 96px;
      height: 96px;
      background-image: url('./images/excel.png');
      height: 100%;
    }
    .drop-box-filename {
      @include ellipsis();
      padding: 15px;
      font-size: 14px;
      color: $blue_6;
      width: 250px;
    }
  }
}
.dz-started .dz-message {
  display: none;
}
</style>
