<template>
  <div class="relative">
    <!-- <div class="box absolute top-0 left-0 z-1000">搜尋器</div> -->
    <youbike-search></youbike-search>
    <div id="myMap" class="min-h-screen z-10 m-auto"></div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, provide, watch } from 'vue';
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
  setup(props) {
    // 縣市區域
    const currCounty = ref({});
    provide('currCounty',currCounty);

    const currDistrict = ref({});
    provide('currDistrict',currDistrict);

    const LatLng = reactive([])
    let lat, lng;
    watch(currDistrict, ()=>{
      // console.log(currDistrict.value);
      lat = currDistrict.value["latitude"];
      lng = currDistrict.value["longitude"]
      Object.assign(LatLng, [lat, lng])
      myMap.flyTo(LatLng, 14)
      // 打bike API
      fetchData(`Bike/Station/NearBy?$spatialFilter=nearby(${lat},${lng},500)`);
    })

    // 地圖
    let myMap;
    onMounted(()=>{
      myMap = L.map("myMap", {
          center: [25.0263064, 121.5262934], // 高雄 22.595153, 120.306923
          zoom: 6,
          });
      myMap.zoomControl.setPosition('bottomright');

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", 
                    { attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors'}
                  ).addTo(myMap);

    });


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
      console.log(data);
    }
        // url: `Bike/Station/NearBy?$spatialFilter=nearby(${latitude},${longitude},500)`,
    

    return {
    } 
  }
}
</script>

 <style lang='scss' scoped>

//  .leaflet-control-container { 
//     position: absolute;
//     right: 65px;
//   } 
 </style>
