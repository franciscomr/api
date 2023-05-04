<script>
export default {
  name: 'DataTable',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    fields: {
      default: {}
    },
    actions: {
      default: {}
    }
  }
}
</script>

<template>
  <div>
    <h1 class="bg-indigo-500 text-white">{{ title }}</h1>
  </div>
</template>