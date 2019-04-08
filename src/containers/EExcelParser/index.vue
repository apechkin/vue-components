<template>
  <div>
    <drop-excel @vdropzone-file-added="handleFile" :dropOptions="dropOptions" :useComponentTemplate="true" />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dropOptions: {
          autoProcessQueue: false,
          forceChunking: true,
          url: '/',
          maxFiles: 1,
          acceptedFiles: '.xlsx',
          thumbnailWidth: 150,
          thumbnailHeight: 150,
          dictDefaultMessage: 'Drop file to parse'
        }
      }
    },
    methods: {
      handleFile (event) {
        console.log(this.$refs)
        console.log('user add file', event)
      }
      /*
      changeFile (e) {
        console.log('change evt:', e)
        const files = e.target.files
        if (!files || files.length === 0) return
        const file = files[0]

        const fileReader = new FileReader()
        fileReader.onload = function (e) {
          console.log('load evt:', e)
          var filename = file.name
          // pre-process data
          var binary = ''
          var bytes = new Uint8Array(e.target.result)
          var length = bytes.byteLength
          for (var i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i])
          }
          // call 'xlsx' to read the file
          // var oFile = XLSX.read(binary, { type: 'binary', cellDates: true, cellStyles: true })
        }
        fileReader.readAsArrayBuffer(file)
      }
      */
    }
  }
</script>

<style scoped>

</style>
