<template>
  <div class='relative bg-warm-gray-100 md:h-350px <md:h-300px'>
    <!-- 卡片 -->
      <div class='absolute w-full px-100px <sm:px-10px' 
      v-for='i in activityList' :key='i.ID'>
          <router-link to='/' class="rounded-md py-5
            md:h-350px <md:h-300px justify-center"
            :class='{flex:i.Name === currentActivity, hidden:i.Name !== currentActivity}'>
              <div class="info p-2 bg-warm-gray-100 w-1/3 relative <md:w-1/2">
                <p class='text-md text-dark-400 font-bold mb-2'>{{i.Name}}</p>
                <div class="date flex items-center">
                  <icon-mdi:calendar-month class='text-xs'></icon-mdi:calendar-month>
                  <span class='text-xs ml-2'>{{i.StartTime.split('T')[0].split('-').join('/')}}</span>
                  -
                  <span class='text-xs'>{{i.EndTime.split('T')[0].split('-').join('/')}}</span>
                </div>
                <div class='text-12px flex items-center'>
                    <icon-carbon:location class='mr-2'></icon-carbon:location>
                    {{i.Location}}
                </div>

                <img class='w-full my-2 rounded-md md:hidden' :src=i.Picture.PictureUrl1 alt="">
                
                <div class='absolute font-thin w-1/2 mr-4 bottom-2 <md:(bottom-0 w-full) '>
                  <p class='bg-dark_green w-full rounded-sm p-1'
                     text='md light-100 center'>了解更多
                  </p>
                </div>

              </div>
               <img class='w-1/3 rounded-md <md:hidden' :src=i.Picture.PictureUrl1 alt="">
          </router-link>
      </div>
      <div class="absolute relative top-150px w-full px-45px text-40px text-gray-300">
        <icon-ic-baseline-arrow-back-ios-new class='absolute left-2 cursor-pointer
        hover:(text-dark_green)'
         @click='prev' :class='{hidden:index === 0}'></icon-ic-baseline-arrow-back-ios-new>
        <icon-ic-baseline-arrow-forward-ios class='absolute right-2 cursor-pointer
        hover:(text-dark_green)'
         @click='next' :class='{hidden:index === activityList.length-1}'></icon-ic-baseline-arrow-forward-ios>
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
    const currentTime = new Date(),
    currentYear = currentTime.getFullYear(),
    currentMonth = currentTime.getMonth() +1,
    currentDate = currentTime.getDate();
    // console.log(currentTime.toISOString());

    const activityList = ref([]);
    const currentActivity = ref()
    const fetchData = async (url) => {
      const res = await fetch(
          `https://ptx.transportdata.tw/MOTC/v2/${url}`,
          {
          headers: getAuthorizationHeader()
          }
      )
      const json = await res.json();
      activityList.value = json;
      currentActivity.value = activityList.value[0].Name
      console.log(activityList.value);
    }

    fetchData(`Tourism/Activity?$top=4&$filter=year(StartTime) eq ${currentYear} 
        and month(StartTime) eq ${currentMonth} and Picture/PictureUrl1 ne null
        &$format=JSON`
    )

    // carousel
    let index = ref(0)
    const prev = () => {
      index.value -- ;
      currentActivity.value = activityList.value[index.value].Name

    } 

    const next = () => {
      index.value ++;
      currentActivity.value = activityList.value[index.value].Name

    }
    

    return {
        activityList,
        currentActivity,
        prev,
        next,
        index
    } 
  }
}
</script>

 <style lang='scss' scoped>
 
 </style>
