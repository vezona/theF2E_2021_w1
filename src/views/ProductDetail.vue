<template>
  <div>Home</div>
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

    // const data = reactive();
    // const fetchData = async (url, dataName) => {
    //   const res = await fetch(
    //       `https://ptx.transportdata.tw/MOTC/v2/${url}`,
    //       {
    //       headers: getAuthorizationHeader()
    //       }
    //   )
    //   const json = await res.json();
    //   data = json;
    //   console.log(data);
    // }

    return {
    } 
  }
}
</script>

 <style lang='scss' scoped>
 
 </style>
