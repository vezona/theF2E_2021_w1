<template>
  <div class='keyWrap py-50px md:px-140px <md:px-50px m-auto'>
    <div class="keyWords leading-10 text-light-100 mb-5">
      <p class='text-4xl leading-15'>探索 <span class='lineMove font-medium'>台灣之美</span></p>
      <p class='text-4xl'>讓我們更親近這片土地</p>
      <p clas='text-sm'>
        <img class='inline-block' src="../assets/img/Icon/spot24_Y.png" alt="location icon">
        <span>台灣旅遊景點導覽 Taiwan Travel Guide</span>
      </p>
    </div>
    <div class='mt-10 relative'>
      <div class="searchWrap w-full p-5 rounded-sm flex flex-wrap justify-between items-center"
          bg='light-50 opacity-30'>
        <!-- 選擇縣市 -->
        <div name="" id="" class='border-2 rounded-sm bg-white cursor-pointer flex justify-between item-center
            <lg:flex-grow'
            p='y-1 x-2' m='r-3'
            @click='showAreaList'>
            <span>{{currentCity}}</span>
            <icon-ic-round-arrow-drop-down class=' text-xl' :class='{rotate:isShow}'></icon-ic-round-arrow-drop-down>
        </div>

        <!-- 選擇活動 -->
        <select name="" id="" class='border-2 rounded-sm flex-auto mr-3 focus-visible:outline-none <lg:my-2'
                p='y-1 x-2' v-model='currentItem' @click="isShow = false">
          <option v-for='item in navItems' :key='item.item' :value="item.value">{{item.item}}</option>
        </select>
        <input type="text" class='rounded-sm flex-auto mr-3 box-border h-36px
                <lg:(w-full mb-2)' 
                focus-visible='outline-none border-2 border-dark_green'
                p='y-1 x-2'
                placeholder="請輸入關鍵字">
        <button type='button' class='bg-dark_green text-white px-10 rounded-md h-36px <lg:(flex-auto mr-3)'
          @click='goToUrl'>
          查詢
        </button>
      </div>

      <!-- 縣市選單 -->
      <div class="areaList flex flex-wrap rounded-sm absolute top-60px <lg:top-70px"
          bg='white' border='1 primary'
          m='x-5' p='t-2'
          v-show='isShow'>
        <p class='border-2 m-2 px-2 py-1 rounded-lg cursor-pointer'
          v-for='city in cityCodeList' :key='city.cityNumber'
          :class='{"border-primary": city.cityName === currentCity}'
          @click='chooseCity(city)'>
          {{city.cityName}}
        </p>
      </div>
    </div>


  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { navItems } from '../utils/navItems';
import { cityCodeList } from '../utils/cityList';
export default {
  props: {
    // user: {
    //   type: String,
    //   required: true
    // }
  },
  setup(props) {
    const router = useRouter()
    const route = useRoute()

    const isShow = ref(false)
    const showAreaList = () => {
      isShow.value = !isShow.value
    }

    cityCodeList.unshift({
        "cityNumber" : "",
        "cityName"   : "不分縣市"
    })

    // 選擇類別
    const currentItem = ref('spots')

    // 選擇縣市
    const currentCity = ref('不分縣市')
    const chooseCity = (city) => {
      isShow.value = false
      currentCity.value = city.cityName
      console.log(city.cityName);
    }

    // 搜尋
    const goToUrl = () => {
      router.push(`/search/${currentItem.value}`)
    }

    return {
      navItems,
      isShow,
      showAreaList,
      cityCodeList,
      currentCity,
      chooseCity,
      currentItem,
      goToUrl
    } 
  }
}
</script>

 <style lang='scss' scoped>
 .keyWrap{
   background: url('../assets/img/key_img_clip.png') center no-repeat;
   background-size: cover;
 }


 .lineMove{
   position: relative;

   &:after{
     content: '';
     position: absolute;
     bottom:-3px;
     left:0;
     width:0;
     height:2px;
     border-bottom: 3px solid $yellow;
     animation: lineMove 3s infinite ease-in-out forwards;
   }
 }

 @keyframes lineMove {
   to {
     width:100%
   }
 }

 .rotate{
   transform: rotate(180deg);
   transition: .3s
 }
 
 </style>
