<script>
export default {
  name: 'FormButton',
  props: {
    label: {
      type: String,
      default: 'Button'
    },
    type: {
      type: String,
      default: 'default'
    },
  },
  data() {
    return {
      style: {
        'default': 'bg-blue-100  hover:bg-blue-200 text-black hover:shadow-md active:bg-blue-200',
        'transparent': 'text-black hover:bg-blue-50 hover:shadow-md active:bg-blue-200',
        'primary': 'bg-blue-600 text-white hover:shadow-md hover:bg-blue-700',
        'secondary': 'bg-gray-500 text-white hover:shadow-md',
      }
    }
  }
}
</script>

<template>
  <button type="sumbmit" class="w-full rounded-md py-2 transition duration-450 " :class="style[type] || 'bg-red-400'">
    <span class="text-md tracking-wide font-medium">{{ label }}</span>
  </button>
</template>