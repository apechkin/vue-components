<template>
  <input type="file" v-on="$listeners" :accept="accept" >
</template>

<script>
  export default {
    name: 'FileReader',
    props: {
      accept: String
    }
  }
</script>
