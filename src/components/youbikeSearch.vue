<template>
  <div class="box absolute top-0 left-0 z-1000 rounded-sm w-1/3"
       m="5"
       p="2"
       bg="white"
       border="2 dark_green">
    <!-- input -->
    <div class="searchInput flex items-center"
         bg="warm-gray-200"
         p="y-1 x-2">
      <input type="text" name="" id="" 
           class="w-full text-sm"
           bg="warm-gray-200" 
           focus-visible="outline-none"
           placeholder="搜尋地區或站點">
      <icon-ic-baseline-search class="cursor-pointer"
         hover="text-dark_green">
      </icon-ic-baseline-search>
    </div>

    <!-- 搜縣市 -->
    <div class="searchAreas p-2">
      <div class="county flex justify-between items-center mb-2">  
        <p class="">選擇縣市</p>
        <select name="" id="" class="w-1/2 border-3" v-model="currCounty">
          <option v-for="city in areaList" :key="city.id" :value="city">{{city.name}}</option>
        </select>
      </div>
      <div class="district flex justify-between items-center">  
        <p class="">選擇縣市</p>
        <select name="" id="" class="w-1/2 border-3" v-model="currDistrict">
        <option v-for="district in districtList" :key="district.id" :value="district">{{district.name}}</option>
        </select>
      </div>
    </div>

   </div>
</template>

<script>
import { ref, reactive, computed, inject, watch } from 'vue';
import { getAuthorizationHeader } from '../js/getAuthorizationHeader';
export default {
  props: {
    // user: {
    //   type: String,
    //   required: true
    // }
  },
  setup(props, { emit }) {
    // 縣市區域
    const currCounty = inject('currCounty');
    const currDistrict = inject('currDistrict') 

   // 取縣市資料
    const areaList = ref([]);
    const fetchData = async () => {
      const res = await fetch('https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json')
      const data = await res.json();
      areaList.value = data
      // 初始化地區
      currCounty.value = data[0]
      currDistrict.value = data[0].districts[0]
    }

    fetchData()

    // 選擇的縣市與區域
    const districtList = computed(() => {
        return currCounty.value["districts"]
    });

    // 縣市改變時抓第一個區域
    watch(districtList, () => {
      currDistrict.value = districtList.value[0]
    })



    return {
      areaList,
      currCounty,
      districtList,
      currDistrict
    } 
  }
}
</script>

 <style lang='scss' scoped>
 
 </style>
