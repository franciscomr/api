<script>
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue';
import BookshelfIcon from 'vue-material-design-icons/Bookshelf.vue';
import MonitorCellphoneIcon from 'vue-material-design-icons/MonitorCellphone.vue';
import LifebuoyIcon from 'vue-material-design-icons/Lifebuoy.vue';
import AccountIcon from 'vue-material-design-icons/Account.vue';

export default {
  name: 'DropDown',
  components: {
    ChevronDownIcon, BookshelfIcon, MonitorCellphoneIcon, LifebuoyIcon, AccountIcon
  },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    icon: {
      type: String,
      default: 'bookshelf-icon'
    }
  },
  data() {
    return {
      list_expanded: false
    }
  }
}
</script>

<template>
  <ul @click="list_expanded = !list_expanded">
    <li class="p-2 cursor-pointer hover:bg-gray-100 hover:text-gray-700 rounded-md">
      <div class="flex items-center">
        <span>
          <component v-bind:is="icon" fillColor="#64748b" :size=24></component>
        </span>
        <span class="text-lg tracking-wide font-medium text-slate-500   w-full px-2">
          {{ title }}
        </span>
        <span class="flex justify-end ">
          <chevron-down-icon :size=20 fillColor="#64748b" :class="!list_expanded ? '' : 'rotate-180'" />
        </span>
      </div>
    </li>
    <div v-show="list_expanded">
      <slot name="content" />
    </div>
  </ul>
</template>