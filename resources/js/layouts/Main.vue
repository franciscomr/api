<script>
export default {
  name: 'Main'
}
</script>
<template>
  <div>
    <div class="bg-gradient-to-br from-blue-400 to-indigo-400">
      <slot name="content" />
    </div>
  </div>
</template>
