<template>
  <div class='keyWrap pt-50px px-140px m-auto'>
    <div class="keyWords leading-10 text-light-100 mb-5">
      <p class='text-4xl leading-15'>探索 <span class='lineMove font-medium'>台灣之美</span></p>
      <p class='text-4xl'>讓我們更親近這片土地</p>
      <p clas='text-sm'>
        <img class='inline-block' src="../assets/img/Icon/spot24_Y.png" alt="location icon">
        <span>台灣旅遊景點導覽 Taiwan Travel Guide</span>
      </p>
    </div>
    <div class="searchWrap w-full p-3 mt-10 rounded-sm flex justify-between"
         bg='light-50 opacity-30'>
      <select name="" id="" class='border-2 rounded-sm flex-auto mr-3'
              p='y-1 x-2'>
        <option value="">縣市</option>
      </select>
      <select name="" id="" class='border-2 rounded-sm flex-auto mr-3'
              p='y-1 x-2' v-model='chosedItem'>
        <option v-for='i in navItems' :key='i.item' :value="i.value">{{i.item}}</option>
      </select>
      <input type="text" class='rounded-sm px-3 flex-auto mr-3' placeholder="請輸入關鍵字">
      <button type='button' class='bg-dark_green text-white px-10 rounded-sm'>查詢</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { navItems } from '../utils/navItems';
export default {
  props: {
    // user: {
    //   type: String,
    //   required: true
    // }
  },
  setup(props) {

    const chosedItem = ref('spots')

    return {
      navItems,
      chosedItem
    } 
  }
}
</script>

 <style lang='scss' scoped>
 .keyWrap{
   background: url('../assets/img/key_img.png') center no-repeat;
   height: 400px;
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
