<template>
  <div class='flex' p='x-45px'>
      <div class='cityCard' v-for='city in popularCity' :key='city.value'>
          <div>{{city.name}}</div>
      </div>
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
      const popularCity = [
        {
            name:'台南',
            value:'臺南市'
        },
        {
            name:'花蓮',
            value:'花蓮縣'
        },
        {
            name:'宜蘭',
            value:'宜蘭縣'
        },
        {
            name:'台東',
            value:'台東縣'
        },
        {
            name:'台北',
            value:'台北市'
        }
       ]

    return {
        popularCity
    } 
  }
}
</script>

 <style lang='scss' scoped>
 
 </style>
