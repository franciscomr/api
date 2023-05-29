<script>
import EyeIcon from 'vue-material-design-icons/Eye.vue';
import PencilIcon from 'vue-material-design-icons/Pencil.vue';
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      default: 'eye'
    },
    size: {
      type: String,
      default: 'md'
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  components: {
    EyeIcon, PencilIcon
  },
  setup() {
    const iconName = {
      eye: 'eye-icon',
      pencil: 'pencil-icon'
    }

    const iconSize = {
      'xs': 16,
      'sm': 18,
      'md': 20,
      'lg': 24,
      'xl': 28,
      '2xl': 32,
      '3xl': 36
    }

    return {
      iconName, iconSize
    }
  }

}
</script>
<template>
  <div>
    <component v-bind:is="iconName[name] || 'eye-icon'" fillColor="#000" :size="iconSize[size] || 20"></component>
  </div>
</template>