<template>
  <div class="flex justify-between" p="y-4 x-45px" border='md:b-1 solid primary'>
    <router-link to='/' class='md:hidden self-center ml-auto'>
      <img alt="mob logo" src="../assets/img/Icon/Logo-mobile.svg" />
    </router-link>
    <router-link to='/' class='<md:hidden'>
      <img alt="web logo" src="../assets/img/Icon/Logo-desktop.svg" />
    </router-link>
    <!-- web navList -->
    <ul class="flex items-center <md:hidden">
      <li v-for=" i in navItems" :key="i.item" 
          class="nav-item px-3 hover:text-primary "
          border='not-last-of-type:r-2 gray-300'>
          <router-link :to='i.url'>{{i.item}}</router-link>
      </li>
    </ul>
    <!-- mob navList -->
    <div class="menu_icon md:hidden ml-auto flex" @click='openMenu' :class="{'hamburger_open':isOpen}">
      <div class="menu_icon_hamburger"></div>
    </div>

    <div class="mobSideContainer" :class="[{'open':isOpen}, {'close':!isOpen}]">
      <div class="item w-1/2 mx-auto" v-for=" i in navItems" :key="i.item"
           text="white xl center secondary"
           m="y-5">
        <router-link :to='i.url'>{{i.item}}</router-link>
        </div> 
    </div>
    
  </div>
  
</template>

<script>
import { ref } from 'vue';
import { navItems } from '../utils/navItems';
export default {
  setup() {
    const isOpen = ref(false)
    const openMenu = () => {
      isOpen.value = !isOpen.value
    };

    return {
      navItems,
      isOpen,
      openMenu
    } 
  }
}
</script>

<style lang="scss" scoped>
.nav-item {
    position: relative;
}

.nav-item::after {
    content: '';
    width: 0;
    height: 3px;
    position: absolute;
    bottom: -10px;
    left: 15px;
    transition: .5s;
    background: $primary;
}

.nav-item:hover:after {
  width: 70%;
}

.menu_icon{
  width: 50px;
  height: 50px;
  align-items: center;
  background-color: $primary;
  border-radius: 12px;
  padding: 10px;
  z-index: 1;
}

@mixin transition{
  transition: all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550);
}

.menu_icon_hamburger{
  width: 100%;
  height: 3px;
  background: white;
  position: relative;
  border-radius: 5px;
  @include transition();

  &:before, &:after{
    content: '';
    width: 60%;
    height: 3px;
    position: absolute;
    right:0;
    background:white;
    border-radius: 5px;
    transform: translateY(-10px);
    @include transition;
  }

  &:before{
    transform: translateY(-10px);
  }

  &:after{
    transform: translateY(10px);
  }
}

.hamburger_open {
  .menu_icon_hamburger{
    transform: translateX(-30px);
    background: transparent;
    &:before{
      width: 100%;
      transform: translate(30px) rotate(45deg);
    }
    &:after{
      width: 100%;
      transform: translate(30px) rotate(-45deg);
    }
  }
}

// 手機版menu列表
.mobSideContainer{
  width: 0%;
  height: 100%;
  background: $brown_light;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  
  &:before, &:after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0%;
    height: 100%;
    background:$yellow;
    z-index: -1;
  }

  &:after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0%;
    height: 100%;
    background: $secondary;
    z-index: -1;
  }

}

.mobSideContainer.item{
  margin: 20px;
  opacity: 0;
  transform: translateY(-30px);
}

.mobSideContainer.open{
  display: flex;
  animation: width 0.3s ease-in-out forwards;
  animation-delay: 0.3s;
  
  .item{
    opacity: 0;
    transform: translateY(-30px);
    animation: fade-in 0.3s ease-in-out forwards;
    animation-delay: 0.6s;
  }

  &:before{
    animation: width 0.3s ease-in-out forwards;
    animation-delay: 0.4s;
  }
  
  &:after{
    animation: width-50 0.3s ease-in-out forwards;
    animation-delay: 0.5s;
    
  }
}

.mobSideContainer.close{
  display: flex;
  width: 100%;
  animation: width-close 0.3s ease-in-out forwards;
  animation-delay: 0.2s;
  
  .item{
    opacity: 1;
    transform: translateY(0px);
    animation: fade-out 0.3s ease-in-out forwards;
    animation-delay: 0.2s;
  }
  
  &:before{
    width: 100%;
    animation: width-close 0.3s ease-in-out forwards;
    animation-delay: 0.1s;
  }
  &:after{
      width: 100%;
    animation: width-close 0.3s ease-in-out forwards;
    
  }
}

@keyframes width{
  to{
    width: 100%;
  }
}

@keyframes width-50{
  to{
    width: 40%;
  }
}

@keyframes fade-in{
  from{
    opacity: 0;
    transform: translateY(-30px);
    
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes width-close{
  from{
    width: 100%;
    display: flex;
  }
  to{
    width: 0%;
    display: none;
  }
}

@keyframes fade-out{
  to{
    opacity: 0;
  }
}


</style>>
