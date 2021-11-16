<template>
  <div class='max-w-1280px m-auto'>腳踏車
  </div>
  <div id="myMap h-full z-10"></div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import { getAuthorizationHeader } from '../js/getAuthorizationHeader';
import leaflet from 'leaflet';
export default {
  props: {
    // user: {
    //   type: String,
    //   required: true
    // }
  },
  setup() {

      let myMap;
      onMounted(()=>{
        console.log(myMap);
        myMap = leaflet.map("myMap", {
            center: [22.595153, 120.306923],
            zoom: 17
            });
    //     leaflet
    //       .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //   attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(mymap);

      })


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
