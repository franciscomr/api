<script>
export default {
  name: 'Logo',
  props: {
    src: {
      type: String,
      default: 'http://127.0.0.1:8000/images/logo.png',
    },
    size: {
      type: String,
      default: 'md'
    }
  }
}
</script>

<template>
  <div>
    <img :src="src" class="mx-auto" aria-label="Logo SAGAJI"
      :class="size === 'xs' ? 'h-8' : size === 'sm' ? 'h-12' : size === 'md' ? 'h-16' : size === 'lg' ? 'h-24' : size === 'xl' ? 'h-32' : size === '2xl' ? 'h-48' : size === '3xl' ? 'h-64' : 'h-72'" />
  </div>
</template>