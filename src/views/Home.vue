<template>
  <menu-search></menu-search>
  <menu-column title='熱門城市' type='城市' url='/search/'></menu-column>
  <popular-city></popular-city>
  <menu-column title='近期活動' type='活動' url='/search/'></menu-column>
  <menu-column title='必訪景點' type='景點' url='/search/'></menu-column>
  <menu-column title='探詢美食' type='美食' url='/search/'></menu-column>
  <menu-column title='實在好宿' type='旅宿' url='/search/'></menu-column>
</template>

<script>
import { ref } from 'vue';
import { fetchData } from '../js/fetchData'
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
    currentDate = currentTime.getDate(),
    currentTimeString = [currentYear, currentMonth].join('-');

    console.log(currentTime.toISOString());

    // fetchData回傳的data是封裝value的promise物件，所以接著要用 promise.then().catch() 去取值
    // 詳情參考 https://segmentfault.com/q/1010000008673763
    let promiseObj = fetchData(`Tourism/Activity?$filter=year(StartTime) eq 2021 and month(StartTime) eq 11 &$format=JSON`)
    const recentActivities = ref();
    promiseObj.then(d => {
        recentActivities.value = d
        console.log(recentActivities.value);
      })
      .catch(error => console.log('取值失敗'))


    return {
    } 
  }
}
</script>

 <style lang='scss' scoped>
 
 </style>
