<template>
  <div>{{cityName}}</div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    // user: {
    //   type: String,
    //   required: true
    // }
  },
  setup(props) {
      const url = decodeURI(window.location.href)
      const cityName = url.split('?')[1].split('=')[1]

      console.log(cityName);

    return {
      cityName
    } 
  }
}
</script>

 <style lang='scss' scoped>
 
 </style>
