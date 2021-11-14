<template>
  <menu-search></menu-search>
  <menu-column title='熱門城市' type='城市' url='/search/'></menu-column>
  <popular-city></popular-city>
  <menu-column title='近期活動' type='活動' url='/search/'></menu-column>
  <recent-activity></recent-activity>
  <menu-column title='必訪景點' type='景點' url='/search/'></menu-column>
  <popular-spots></popular-spots>
  <menu-column title='探詢美食' type='美食' url='/search/'></menu-column>
  <popular-food></popular-food>
  <menu-column title='實在好宿' type='旅宿' url='/search/'></menu-column>
  <popular-living></popular-living>
</template>

<script>
import { ref } from 'vue';
import { getAuthorizationHeader } from '../js/getAuthorizationHeader'
export default {
  props: {
    // user: {
    //   type: String,
    //   required: true
    // }
  },
  setup(props) {
    // const currentTime = new Date(),
    // currentYear = currentTime.getFullYear(),
    // currentMonth = currentTime.getMonth() +1,
    // currentDate = currentTime.getDate(),
    // currentTimeString = [currentYear, currentMonth].join('-');
    // console.log(currentTime.toISOString());

    // const activityList = ref();
    // const fetchData = async (url, dataName) => {
    //   const res = await fetch(
    //       `https://ptx.transportdata.tw/MOTC/v2/${url}`,
    //       {
    //       headers: getAuthorizationHeader()
    //       }
    //   )
    //   const json = await res.json();
    //   dataName.value = json;
    //   console.log(dataName.value);
    // }

    // fetchData(`Tourism/Activity?$top=4&$filter=year(StartTime) eq ${currentYear} and month(StartTime) eq ${currentMonth} &$format=JSON`, activityList)
    


    return {
    } 
  }
}
</script>

 <style lang='scss' scoped>
 
 </style>
