<template>
 <div class='<sm:overflow-hidden'>
    <div class='flex' p='x-45px' @touchmove='swipe'
    :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
      <div class='cityCard p-1 hover:cursor-pointer <sm:(flex-grow-0 flex-shrink-0 w-1/2)' 
           v-for='city in popularCity' :key='city.value'>
          <router-link :to=city.url class='block bg-cover h-200px relative rounded-sm'
            :style='{"background-image":`url(${city.image})`}'
            @mouseover="currentCity = city.name" @mouseleave="currentCity = ''">
              <div class="absolute w-full text-white font-bold p-2 bottom-0 overflow-hidden transition duration-400"
                   bg='opacity-30'
                   :class='{"h-1/2":city.name === currentCity,
                           "h-40px":city.name !== currentCity,
                           "bg-gray-100":city.name === currentCity}'>
                <h1>{{city.name}}</h1>
                <p class='text-xs font-thin h-60px line-clamp-3 overflow-hidden' 
                   :class='{"block":city.name === currentCity,"hidden":city.name !== currentCity}'>
                   {{city.describe}}
                </p>
              </div>
          </router-link>
      </div>
  </div>
 </div>
</template>

<script>
import { ref } from 'vue';
import taipeiImg from '../assets/img/popularCity/taipei.jpg';
import tainanImg from '../assets/img/popularCity/tainan.jpg';
import hualianImg from '../assets/img/popularCity/hualien.jpg';
import ilandImg from '../assets/img/popularCity/iLand.jpg';
import taidongImg from '../assets/img/popularCity/taidong.jpg';
export default {
  props: {
    // user: {
    //   type: String,
    //   required: true
    // }
  },
  setup(props) {
      const popularCity = [
        {
            name:'台南',
            value:'臺南市',
            image: tainanImg,
            url:'/cities?name=臺南市',
            describe:'臺南市是臺灣的發祥地，是全臺歷史最悠久的都市。除了歷史文化特色之外，臺南更擁有如詩畫般的自然生態美景，及聞名遐邇的農漁產品特色美食'
        },
        {
            name:'花蓮',
            value:'花蓮縣',
            image: hualianImg,
            url:'/cities?name=花蓮縣',
            describe:'花蓮古稱奇萊，又因花蓮溪東注於海，其水與海濤激流迂迴澎湃，而稱為洄瀾，後人諧其音稱為花蓮'
        },
        {
            name:'宜蘭',
            value:'宜蘭縣',
            image: ilandImg,
            url:'/cities?name=宜蘭縣',
            describe:'位處臺灣東北角的宜蘭縣，囿於三面背山、一面向海特殊地形，孕育獨特文化與人情味，呈現以三生共構的世外桃源'
        },
        {
            name:'台東',
            value:'臺東縣',
            image: taidongImg,
            url:'/cities?name=臺東縣',
            describe:'臺東擁有豐富的生態資源，無論是海岸、高山、森林、溪谷，都保持著自然完整的風貌，並孕育了多樣的動植物種類，處處都是天然美景'
        },
        {
            name:'台北',
            value:'台北市',
            image:taipeiImg,
            url:'/cities?name=台北市',
            describe:'在臺北，您每個所到之處，多樣的文化特質都充沛鼓動著。雕龍畫棟的廟宇與現代的街道完美吻合，還有許多世界級餐廳隨時提供您最正統的各式中華料理。別忘了，美味的夜市小吃不僅僅帶給您口腹的滿足，更是引領您體驗臺灣生活的理想去處。'
        }
       ]

       const currentCity = ref()

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
          if(touchPositionX[0] > moveX && currentOffset.value > -450){ // 往右滑
          console.log('往右')
            currentOffset.value -= 5
          } else {  //往左滑
            currentOffset.value += 5
            if( currentOffset.value >= 0){
              currentOffset.value = 0
            }
          }
       }

    return {
        popularCity,
        currentCity,
        currentOffset,
        swipe,
    } 
  }
}
</script>

 <style lang='scss' scoped>
 .cityCard{
     flex-grow: 1;
     transition:.5s
 }
 .cityCard:hover{
     flex-grow: 3;
 }

 
 </style>
