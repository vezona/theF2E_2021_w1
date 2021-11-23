<template>
  <div class='flex max-w-1280px m-auto <md:block ' p='x-45px'>
    <div class="listWrap w-full px-2 <md:mb-5"
      v-for='food in data' :key='food.ID'>
      <router-link to='/' class="block card text-sm hover:(filter brightness-125)">
          <img :src="food.Picture.PictureUrl1" alt="food picture"
               class='rounded-lg h-200px'>
          <h1 class='my-2 text-dark-400'>{{food.Name}}</h1>
          <p class='flex items-center md:w-3/5 text-gray-400 text-14px'>
            <icon-carbon:location class='mr-1'></icon-carbon:location>
            <span>{{food.City}}</span>
          </p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { getAuthorizationHeader } from '../js/getAuthorizationHeader';
export default {
  props: {
    // user: {
    //   type: String,
    //   required: true
    // }
  },
  setup(props) {

    const data = ref([]);
    const fetchData = async (url) => {
      const res = await fetch(
          `https://ptx.transportdata.tw/MOTC/v2/${url}`,
          {
          headers: getAuthorizationHeader()
          }
      )
      const json = await res.json();
      data.value = json;
      console.log('熱門美食',data.value);
    }

    fetchData("Tourism/Restaurant?$top=4&$filter=contains(Description,'熱門') and Picture/PictureUrl1 ne null&$format=JSON")

    return {
        data
    } 
  }
}
</script>

 <style lang='scss' scoped>
 
 </style>
