<template>
  <navbar></navbar>
  <!-- <icon-mdi-light-arrow-right-circle/>
  <router-link to="/about">關於我們</router-link> -->
  <router-view></router-view>
</template>

<script>
  export default {
      name: 'App'
    }
</script>

 <style lang="scss">
 #app{
   font-family: 'Noto Sans TC', sans-serif;
   color: #646464
 }
 </style>
