<script>
import AppsIcon from 'vue-material-design-icons/Apps.vue';
import TrayArrowDownIcon from 'vue-material-design-icons/TrayArrowDown.vue';
import PlusIcon from 'vue-material-design-icons/Plus.vue';
import FilterOutlineIcon from 'vue-material-design-icons/FilterOutline.vue';
import PowerIcon from 'vue-material-design-icons/Power.vue';

export default {
  name: 'BasicButton',
  props: {
    label: {
      type: String,
      default: 'Button'
    },
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: 'Apps-icon'
    },
  },
  components: {
    AppsIcon, TrayArrowDownIcon, PlusIcon, FilterOutlineIcon, PowerIcon
  },
  data() {
    return {
      style: {
        'default': 'bg-gray-100 text-black hover:bg-gray-200 hover:shadow-md active:bg-blue-300',
        'transparent': 'text-black hover:bg-gray-50 hover:shadow-md active:bg-blue-200',
        'primary': 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md',
        'secondary': 'bg-gray-500 text-white hover:shadow-md',
      }
    }
  }
}
</script>
<template>
  <button type="button" class="flex items-center justify-center px-3 py-2 rounded-md transition duration-450"
    :class="style[type] || 'bg-red-400'">
    <div class="flex items-center">
      <component v-bind:is="icon" :fillColor="type === 'default' || type === 'transparent' ? '#303030' : '#fff'" :size=24>
      </component>
      <span class="hidden md:block text-sm font-medium px-2">
        {{ label }}
      </span>
    </div>
  </button>
</template>