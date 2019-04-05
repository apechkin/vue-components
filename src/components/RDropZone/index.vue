<template>
  <div class="dropzone">
    <div class="dropzone-box">
      <vueDropzone id="dropZone" v-on="$listeners" :options="dropOptions || dropComponentOptions"/>
    </div>
    <div class="dropzone-box">
      <slot />
    </div>
  </div>
</template>

<script>
  import vueDropzone from 'vue2-dropzone'
  export default {
    props: {
      dropOptions: Object
    },
    components: {
      vueDropzone
    },
    data () {
      return {
        dropComponentOptions: {
          autoProcessQueue: false,
          forceChunking: true,
          addRemoveLinks: true,
          maxFiles: 1,
          acceptedFiles: '.xlsx, .xls, .pdf, .jpg'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.dropzone {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.dropzone-box {
  flex-grow: 1;
  padding: 16px 24px;
}
.dropzone-actions {
  flex-grow: 0;
  padding: 16px 16px;
}
</style>
