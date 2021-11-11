<template>
  <div class='flex flex-wrap' p='x-45px'>
      <div class='border-2 w-1/2 p-2 <md:w-full' v-for='i in activityList' :key='i.ID'>
          <div class="flex h-30 border-2 rounded-md overflow-hidden">
              <img class='w-1/3' :src=i.Picture.PictureUrl1 alt="">
              <div class="info p-2 bg-warm-gray-100 w-full relative">
                <span class='text-xs'>{{i.StartTime.split('T')[0].split('-').join('/')}}</span>
                -
                 <span class='text-xs'>{{i.EndTime.split('T')[0].split('-').join('/')}}</span>
                <p class='text-sm text-dark-400 font-bold'>{{i.Name}}</p>
                
                <div class='text-12px absolute bottom-2 font-thin w-full pr-4 flex items-center justify-between'>
                  <p class='flex items-center'>
                    <icon-carbon:location class='mr-1'></icon-carbon:location>
                    {{i.Location}}
                  </p>
                  <p class='flex items-center text-primary'>詳細介紹
                    <icon-ic:baseline-keyboard-arrow-right></icon-ic:baseline-keyboard-arrow-right>
                  </p>
                </div>

              </div>
          </div>
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

    const activityList = ref([]);
    const fetchData = async (url, dataName) => {
      const res = await fetch(
          `https://ptx.transportdata.tw/MOTC/v2/${url}`,
          {
          headers: getAuthorizationHeader()
          }
      )
      const json = await res.json();
    //   console.log(json);
      dataName.value = json;
      console.log(json);
    }

    fetchData(`Tourism/Activity?$top=4&$filter=year(StartTime) eq ${currentYear} 
        and month(StartTime) eq ${currentMonth} and Picture/PictureUrl1 ne null
        &$format=JSON`,
        activityList
        )


    

    return {
        activityList
    } 
  }
}
</script>

 <style lang='scss' scoped>
 
 </style>
