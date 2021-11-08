<template>
  <div class="flex justify-between" p="y-4 x-45px" border='b-1 solid primary'>
    <router-link to='/' class='md:hidden'>
      <img alt="Vue mob logo" src="../assets/img/Icon/Logo-mobile.svg" />
    </router-link>
    <router-link to='/' class='<md:hidden'>
      <img alt="Vue web logo" src="../assets/img/Icon/Logo-desktop.svg" />
    </router-link>
    <!-- web navList -->
    <ul class="flex items-center <md:hidden">
      <li v-for=" i in navItems" :key="i.item" 
          class="nav-item px-3 hover:text-primary "
          border='not-last-of-type:r-2 gray-300'>
          <router-link :to='i.url'>{{i.item}}</router-link>
      </li>
    </ul>
    <!-- mob navList -->
    <button type='button' class='md:hidden'>Click</button>
    
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

.nav-item {
    position: relative;
}

.nav-item::after {
    content: '';
    width: 0;
    height: 3px;
    position: absolute;
    bottom: -10px;
    left: 15px;
    transition: .5s;
    background: $primary;
}

.nav-item:hover:after {
  width: 70%;
}


</style>>
