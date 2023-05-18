<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import BellOutlineIcon from 'vue-material-design-icons/BellOutline.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';
import AccountIcon from 'vue-material-design-icons/Account.vue';
import PowerIcon from 'vue-material-design-icons/Power.vue';
import Logo from '../components/Logo.vue';
import DropDown from '../components/DropDown.vue';
import DropDownLink from '../components/DropDownLink.vue';
export default {
  name: 'Home',
  props: {
    menu: {
      default: {}
    }
  },
  components: {
    Logo, DropDown, DropDownLink, MenuIcon, BellOutlineIcon, CloseIcon, AccountIcon, PowerIcon
  },
  setup() {

  }
}
</script>

<template>
  <div class="flex h-full">
    <div
      class="backdrop-blur-lg bg-white/95 sm:w-64 hidden p-4 rounded-l-lg sm:block shrink-0 items-center overflow-y-auto space-y-5 max-h-min">
      <div>
        <Logo :size="'md'" />
      </div>
      <div class="">
        <div v-for="usermenu in menu">
          <DropDown :icon="usermenu.icon" :title="usermenu.title">
            <template #content>
              <div v-for="(link, index) in usermenu.links" :key="index">
                <DropDownLink :title="index" :href="link" />
              </div>
            </template>
          </DropDown>
        </div>
      </div>
      <div class="flex items-center justify-center border h-max">
        <power-icon :size=20 fillColor="#000" />
        <h1 class="text-sm font-medium">Logout</h1>
      </div>
    </div>
    <div class="bg-blue-100  w-full p-4 rounded-r-lg space-y-2 overflow-y-auto rounded-l-lg  sm:rounded-l-none">
      <div class="flex w-full  justify-end px-2  space-x-3 ">
        <div class="cursor-pointer bg-blue-100 rounded-full p-1">
          <bell-outline-icon :size=28 fillColor="#3b82f6" />
        </div>
        <div class="bg-blue-100 rounded-full cursor-pointer p-1">
          <account-icon :size=28 fillColor="#3b82f6" />
        </div>
      </div>
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>






<!--
<template>
  <div class="bg-white sm:w-72 hidden p-4 rounded-l-lg sm:block shrink-0 items-center overflow-y-auto">
    <div class="py-3">
      <Logo alt="logo" :heightim="120" :widthim="120" />
    </div>
    <div class="py-3">
      <div v-for="usermenu in menu">
        <DropDown :icon="usermenu.icon" :title="usermenu.title">
          <template #content>
            <div v-for="(link, index) in usermenu.links" :key="index">
              <DropDownLink :title="index" :href="link" />
            </div>
          </template>
        </DropDown>
      </div>
    </div>
  </div>
  <div class="bg-slate-100 w-full p-4 rounded-r-lg space-y-2 overflow-y-auto rounded-l-lg  sm:rounded-l-none">
    <div>
      <router-view />
    </div>

  </div>
</template>
-->