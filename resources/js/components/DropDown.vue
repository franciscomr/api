<script>
import BriefcaseOutlineIcon from 'vue-material-design-icons/BriefcaseOutline.vue';
import ChevronUpIcon from 'vue-material-design-icons/ChevronUp.vue';
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue';
import BookshelfIcon from 'vue-material-design-icons/Bookshelf.vue';
import MonitorCellphoneIcon from 'vue-material-design-icons/MonitorCellphone.vue';
import FaceAgentIcon from 'vue-material-design-icons/FaceAgent.vue';
import LifebuoyIcon from 'vue-material-design-icons/Lifebuoy.vue';
import AccountIcon from 'vue-material-design-icons/Account.vue';

export default {
  name: 'DropDown',
  components: {
    ChevronDownIcon, ChevronUpIcon, BookshelfIcon, MonitorCellphoneIcon, LifebuoyIcon, AccountIcon, BriefcaseOutlineIcon, FaceAgentIcon
  },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    icon: {
      type: String,
      default: 'bookshelf-icon'
    },
    color: {
      type: String,
    }
  },
  data() {
    return {
      DropDownClass: {
        'red': 'bg-red-500',
        'green': 'bg-green-500',
        'blue': 'bg-blue-500',
        'indigo': 'bg-indigo-500',
        'pink': 'bg-pink-500',
        'indigo': 'bg-indigo-500',
        'orange': 'bg-orange-500',


      },

      DropTextClass: {
        'red': 'text-red-500',
        'green': 'text-green-500',
        'blue': 'text-blue-500',
        'indigo': 'text-indigo-500',
        'pink': 'text-pink-500',
        'indigo': 'text-indigo-500',
        'orange': 'text-orange-500',


      },
      list_expanded: false
    }
  }
}
</script>

<template>
  <ul @click="list_expanded = !list_expanded">
    <li class="p-2 cursor-pointer hover:bg-gray-50 rounded-md ">
      <div class="flex items-center">
        <span class="p-1 rounded-md" :class="DropDownClass[color] || 'bg-red-400'">
          <component v-bind:is="icon" fillColor="#fff" :size=20></component>
        </span>
        <span class=" w-full px-2 font-medium text-sm">
          {{ title }}
        </span>
        <span class="flex justify-end">
          <chevron-up-icon :size=18 fillColor="#303030" :class="!list_expanded ? '' : 'rotate-180'" />
        </span>
      </div>
    </li>
    <div v-show="list_expanded">
      <slot name="content" />
    </div>
  </ul>
</template>