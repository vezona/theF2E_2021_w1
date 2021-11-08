<template>
  <div class="flex justify-between" p="y-4 x-45px" border='b-1 solid primary'>
    <router-link to='/'>
      <img alt="Vue logo" src="../assets/img/Icon/Logo-desktop.svg" />
    </router-link>
    <ul class="flex items-center">
      <li v-for=" i in navItems" :key="i.item" class="px-3 hover:text-primary after::(content:'')"
          border='not-last-of-type:r-2 gray-300'>
          <router-link :to='i.url'>{{i.item}}</router-link>
      </li>
    </ul>
    
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
    const navItems = [
      {item:'探索景點', url:'/spots'},
      {item:'節慶活動', url:'/activities'},
      {item:'美食', url:'/food'},
      {item:'住宿', url:'/living'},
      {item:'交通', url:'/transportation'},
      {item:'鐵馬行', url:'/bike'}
      ]

    return {
      navItems
    } 
  }
}
</script>

<style lang="scss">

.first {
    position: relative;
}

.first::after {
    content: '';
    width: 80%;
    height: 2px;
    position: absolute;
    bottom: -4px;
    left: 10px;
    transition: .5s;
    background: red;
    transform: scale(0);
}

.first:hover:after {
    transform: scale(1);
}


</style>>
