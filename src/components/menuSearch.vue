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
      <div class="searchWrap w-full p-5 rounded-sm lg:flex justify-between"
          bg='light-50 opacity-30'>
        <!-- 選擇縣市 -->
        <div name="" id="" class='border-2 rounded-sm bg-white cursor-pointer <lg:inline-flex <lg:w-1/2 <sm:flex flex justify-between item-center'
            p='y-1 x-2' m='r-3'
            @click='showAreaList'>
            <span>縣市</span>
            <icon-ic-round-arrow-drop-down class='h-full'></icon-ic-round-arrow-drop-down>
        </div>

        <!-- 選擇活動 -->
        <select name="" id="" class='border-2 rounded-sm flex-auto mr-3 <lg:w-1/3 <lg:my-2'
                p='y-1 x-2' v-model='chosedItem'>
          <option v-for='i in navItems' :key='i.item' :value="i.value">{{i.item}}</option>
        </select>
        <input type="text" class='rounded-sm flex-auto mr-3 <lg:w-full <lg:my-2' 
        p='x-3 y-2'
        placeholder="請輸入關鍵字">
        <button type='button' class='bg-dark_green text-white px-10 rounded-sm <lg:block'>查詢</button>
      </div>

      <!-- 縣市選單 -->
      <div class="areaList bg-white mx-5 pt-2 flex flex-wrap rounded-sm absolute top-80px"
          border='1 primary'
          v-show='isShow'>
        <p class='border-2 m-2 px-2 py-1 rounded-lg cursor-pointer'
        v-for='i in cityCodeList' :key='i.cityNumber'>{{i.cityName}}</p>
      </div>
    </div>


  </div>
</template>

<script>
import { ref } from 'vue';
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
    const isShow = ref(false)
    const showAreaList = () => {
      isShow.value = !isShow.value

    }

    const chosedItem = ref('spots')

    return {
      navItems,
      isShow,
      showAreaList,
      cityCodeList,
      chosedItem
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
 
 </style>
