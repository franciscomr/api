<script>
import CogOutlineIcon from 'vue-material-design-icons/CogOutline.vue';
import AccountIcon from 'vue-material-design-icons/Account.vue';
import BellOutlineIcon from 'vue-material-design-icons/BellOutline.vue';
import BellIcon from 'vue-material-design-icons/Bell.vue';
import AccountCircleIcon from 'vue-material-design-icons/AccountCircle.vue';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';

export default {
  name: 'IconButton',
  props: {
    icon: {
      type: String,
      default: 'cog-outline-icon'
    }
  },
  components: {
    CogOutlineIcon, AccountIcon, BellOutlineIcon, AccountCircleIcon, BellIcon, MenuIcon, MagnifyIcon
  }
}
</script>
<template>
  <div class="p-2 cursor-pointer hover:bg-gray-50 rounded-md hover:border-blue-100 shadow-none hover:shadow-md">
    <span>
      <component v-bind:is="icon" fillColor="#4b5563" :size=28></component>
    </span>
  </div>
</template>