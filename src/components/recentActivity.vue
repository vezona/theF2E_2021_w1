<template>
  <div class='flex flex-wrap' p='x-45px'>
      <div class='border-2 w-1/2 ' v-for='i in activityList' :key='i.ID'>
          <div class="flex">
              <img class='w-1/3' src="../assets/img/key_img.png" alt="">
              <div class="info">活動</div>
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

    fetchData(`Tourism/Activity?$filter=year(StartTime) eq ${currentYear} 
        and month(StartTime) eq ${currentMonth} &$format=JSON`,
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
