<script>
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
    Logo, DropDown, DropDownLink
  }
}
</script>
<template>
  <div class="bg-gradient-to-br from-blue-400 to-indigo-400">
    <div class="w-full h-screen p-5 flex justify-center">
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
    </div>
  </div>
</template>
