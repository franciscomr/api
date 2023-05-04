<script>
export default {
  name: 'Logo',
  props: {
    src: {
      type: String,
      default: 'images/logo.png',
    },
    heightim: {
      type: [Number, String],
      default: 240
    },
    widthim: {
      type: [Number, String],
      default: 240
    }
  }
}
</script>

<template>
  <div>
    <img :src="src" class="mx-auto" :height="heightim" :width="widthim" />
  </div>
</template>