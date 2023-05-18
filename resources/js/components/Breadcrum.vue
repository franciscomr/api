<script>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'
import HomeIcon from 'vue-material-design-icons/Home.vue';
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue';
export default {
  name: 'Breadcrum',
  props: {
    title: {
      type: String,
      default: 'title'
    }
  },
  components: {
    HomeIcon, ChevronRightIcon
  },
  setup(props) {
    const router = useRoute();
    let arrayRoutes = router.name.split(".");

    return { arrayRoutes }
  }


}
</script>
<template>
  <div class="w-full hidden md:block">
    <nav class="py-2">
      <div class="inline-flex items-center space-x-4">
        <router-link :to="{ name: 'home' }">
          <div class="inline-flex items-center">
            <home-icon @click="showList = false" :size=20 fillColor="f0f0f0" />
            <span class="text-md font-medium ml-2 hidden lg:block">Home</span>
          </div>
        </router-link>
        <div v-if="arrayRoutes.length === 1">
          <div class="inline-flex items-center">
            <chevron-right-icon @click="showList = false" :size=20 fillColor="f0f0f0" />
            <span class="text-md text-blue-600 font-medium ml-1">{{ title }}</span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>



<!-- 

      <nav class=" flex bg-white font-medium text-sm rounded-md py-2">
      <ul class="inline-flex items-center space-x-1">
        <li class="inline-flex items-center">
          <router-link :to="{ name: 'home' }">
            <span class="px-2"><home-icon @click="showList = false" :size=20 fillColor="f0f0f0" /></span>
            <span>Home</span>

          </router-link>


        </li>
        <li>
          <div class="flex items-center">
            <span class="pr-1"> <chevron-right-icon @click="showList = false" :size=20 fillColor="303030" /></span>
            <a href="#"
              class="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium dark:text-gray-400 dark:hover:text-white">Templates</a>
          </div>
        </li>

        <router-link :to="{ name: 'home' }">
          <li class="inline-flex items-center"><span>Home</span></li>
        </router-link>
        <li class="inline-flex items-center">

        </li>
      </ul>
    </nav>
-->