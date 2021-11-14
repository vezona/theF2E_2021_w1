<template>
 <div class='overflow-hidden'>
  <div class='flex' p='x-45px' @touchmove='swipe' @mousemove="webSwipe"
    :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
    <div class="cardWrap px-2 flex-grow-0 flex-shrink-0 w-1/3 <sm:w-full"
      v-for='food in data' :key='food.ID'>
      <router-link to='/' class="card flex text-sm border-2 rounded-lg overflow-hidden <sm:block hover:(border-2 border-dark_green)">
          <img :src="food.Picture.PictureUrl1" alt="food picture"
               class='h-200px w-2/3 <sm:w-full'>
          <div class="cardInfo p-3">
            <h1 class='my-2 text-dark-400'>{{food.Name}}</h1>
            <p class='flex items-center md:w-3/5 text-gray-400 text-14px'>
              <icon-carbon:location class='mr-1'></icon-carbon:location>
              <span>{{food.City}}</span>
            </p>
          </div>
      </router-link>
    </div>
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
      console.log('熱門旅宿',data.value);
    }

    fetchData("Tourism/Hotel?$top=10&$filter=contains(Description,'熱門') and Picture/PictureUrl1 ne null&$format=JSON")

    // 滑動
    const currentOffset = ref(0);
    let moveX = 0,
    touchPositionX=[]
    const swipe = (e) =>{
      // 抓位置
      moveX = e.touches[0].pageX
      // 紀錄上一次與這次滑動位置
      touchPositionX.splice(0, touchPositionX.length-1)
      touchPositionX.push(moveX)
      if(touchPositionX[0] > moveX && currentOffset.value > -2000){ // 往右滑
        currentOffset.value -= 5
      } else {  //往左滑
        currentOffset.value += 5
        if( currentOffset.value >= 0){
          currentOffset.value = 0
        }
      }
    }

    const webSwipe = (e)=>{
      console.log(e.movementX, );
      if(e.movementX < 0){
        currentOffset.value += 5
      } else if(e.movementX === 0 && e.movementY === 0){
        currentOffset.value -= 5
      }
      // e.movementX < 0? currentOffset.value += 5: currentOffset.value -= 5
      // currentOffset.value += 5
    }

    return {
        data,
        currentOffset,
        swipe,
        webSwipe
    } 
  }
}
</script>

 <style lang='scss' scoped>
 
 </style>
