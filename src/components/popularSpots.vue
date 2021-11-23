<template>
  <div class='flex flex-wrap max-w-1280px m-auto' p='x-45px'>
      <div class='w-1/2 p-2 <md:w-full' v-for='i in data' :key='i.ID'>
          <router-link to='/' class="block flex rounded-md overflow-hidden cursor-pointer sm:h-30 <sm:block hover:(border-2 border-dark_green)">
              <img class='w-1/3 <sm:w-full' :src=i.Picture.PictureUrl1 alt="">
              <div class="info p-2 bg-warm-gray-100 w-full relative">
                <p class='text-sm text-dark-400 font-bold'>{{i.Name}}</p>
                <p class='text-xs mt-2 overflow-hidden text-eclip'>{{i.Description}}</p>
                <div class='text-12px font-thin w-full pr-4 mt-3 flex items-center justify-between'>
                  <p class='flex items-center md:w-3/5'>
                    <icon-carbon:location class='mr-1'></icon-carbon:location>
                    <span>{{i.Address}}</span>
                  </p>
                  <p class='flex items-center text-primary'>詳細介紹
                    <icon-ic:baseline-keyboard-arrow-right></icon-ic:baseline-keyboard-arrow-right>
                  </p>
                </div>

              </div>
          </router-link>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getAuthorizationHeader } from '../js/getAuthorizationHeader';
export default {
  props: {
    // user: {
    //   type: String,
    //   required: true
    // }
  },
  setup(props) {
    const currentTime = new Date(),
    currentYear = currentTime.getFullYear(),
    currentMonth = currentTime.getMonth() +1,
    currentDate = currentTime.getDate();
    // console.log(currentTime.toISOString());

    const data = ref([]);
    const fetchData = async () => {
      const res = await fetch(
          "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=4&$filter=contains(Description,'必訪') and Picture/PictureUrl1 ne null&$format=JSON",
          {
          headers: getAuthorizationHeader()
          }
      )
      const json = await res.json();
      data.value = json;
      console.log('必訪景點',data.value);
    }

    fetchData()

    

    return {
        data
    } 
  }
}
</script>

 <style lang='scss' scoped>

 .text-eclip{
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
 }
 
 </style>
