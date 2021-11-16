<template>
  <div class='max-w-1280px m-auto'>腳踏車</div>
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

    // const data = ref([]);
    // const fetchData = async (url) => {
    //   const res = await fetch(
    //       `https://ptx.transportdata.tw/MOTC/v2/${url}`,
    //       {
    //       headers: getAuthorizationHeader()
    //       }
    //   )
    //   const json = await res.json();
    //   data.value = json;
    //   console.log(data);
    // }

    // fetchData('Tourism/Restaurant?$top=6&$filter=contains(Description,'熱門') and Picture/PictureUrl1 ne null&$format=JSON')

    return {
    } 
  }
}
</script>

 <style lang='scss' scoped>
 
 </style>
