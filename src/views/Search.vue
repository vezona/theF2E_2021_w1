<template>
  <div class='flex'>
    <aside class='w-1/3'>choose</aside>
    <router-view></router-view>
  </div>
  
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

    return {
    } 
  }
}
</script>

 <style lang='scss' scoped>
 
 </style>
