<template>
  <div class='flex justify-between max-w-1280px m-auto' 
       p='x-45px t-35px b-20px'>
    <h1 class='text-2xl tracking-wide'>{{title}}</h1>
    <router-link :to='url' class='text-orange flex items-center text-xs'>
      查看更多{{type}}
      <icon-ic-baseline-keyboard-arrow-right></icon-ic-baseline-keyboard-arrow-right>
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  setup(props) {

    return {
    } 
  }
}
</script>

 <style lang='scss' scoped>
 
 </style>
