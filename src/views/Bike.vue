<template>
  <div class='max-w-1280px m-auto min-h-screen-md'>
    <ul class='flex justify-around mt-20'>
      <router-link to="/cyclingRoute" 
        class='p-2 w-1/3 bg-dark_green text-center text-light-100'
        hover="bg-primary text-dark-600">
        自行車路線
      </router-link>
      
      <router-link to="/youbikeSpots" 
        class='p-2 w-1/3 bg-amber-500 text-center text-light-100'
        hover="bg-yellow text-dark-600">
        單車租借
      </router-link>
    </ul>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import { getAuthorizationHeader } from '../js/getAuthorizationHeader';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
export default {
  props: {
    // user: {
    //   type: String,
    //   required: true
    // }
  },
  setup() {
console.log(L);

    // const data = ref([]);
    // const fetchData = async (url) => {
    //   const res = await fetch(
    //       `https://ptx.transportdata.tw/MOTC/v2/${url}`,
    //       {
    //       headers: getAuthorizationHeader()
    //       }
    //   )
    //   const json = await res.json();
    //   data.value = json;
    //   console.log(data);
    // }

    // fetchData('Tourism/Restaurant?$top=6&$filter=contains(Description,'熱門') and Picture/PictureUrl1 ne null&$format=JSON')

    return {
    } 
  }
}
</script>

 <style lang='scss' scoped>
 </style>
