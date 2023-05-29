<script>
import logout from '../functions/logout.js';
import PowerIcon from 'vue-material-design-icons/Power.vue';
import Logo from '../components/Logo.vue';
import DropDown from '../components/DropDown.vue';
import DropDownLink from '../components/DropDownLink.vue';
import BasicButton from '../components/BasicButton.vue';
import IconButton from '../components/IconButton.vue';
export default {
  name: 'Home',
  props: {
    menu: {
      default: {}
    }
  },
  components: {
    Logo,
    DropDown,
    DropDownLink,
    BasicButton,
    PowerIcon,
    IconButton,
  },
  setup() {

    return { logout }
  }
}
</script>

<template>
  <div class="flex h-full backdrop-blur-sm bg-white/90 rounded-xl">
    <div class="sm:w-64 md:block hidden shrink-0 space-y-6 p-4">
      <div class="">
        <Logo :size="'md'" />
      </div>
      <div class="h-4/5 overflow-y-auto space-y-1">
        <div v-for="usermenu in menu">
          <DropDown :icon="usermenu.icon" :title="usermenu.title" :color="usermenu.color">
            <template #content>
              <div v-for="(link, index) in usermenu.links" :key="index">
                <DropDownLink :title="index" :href="link" />
              </div>
            </template>
          </DropDown>
        </div>
      </div>
      <div>
        <BasicButton @click="logout" :label="'Logout'" :type="'transparent'" :icon="'power-icon'" class="mx-auto" />
      </div>
    </div>
    <div class="w-full p-5 overflow-x-auto">
      <div class="flex w-full items-center justify-end space-x-3 pb-5">

        <IconButton :icon="'menu-icon'" class="block md:hidden" />
        <IconButton :icon="'magnify-icon'" class="block md:hidden" />
        <Logo :size="'sm'" class="block md:hidden w-full" />
        <input type="text" placeholder="Buscar"
          class="py-1 text-sm px-2 rounded-md hidden md:block border bg-gray-50 focus:outline-none focus:border-gray-400">
        <IconButton :icon="'bell-icon'" />
        <IconButton :icon="'account-circle-icon'" />
      </div>

      <router-view />
      <!--

      <div class="bg-white p-5 rounded-lg">
        <router-view />
      </div>
      -->

    </div>
  </div>
</template>
