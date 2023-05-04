<script>
export default ({
  name: 'DropDownLink',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    href: {
      type: String,
      default: '#'
    }
  },
})
</script>

<template>
  <div>
    <router-link :to="{ name: href }">
      <div class="rounded-md indent-8 p-2 text-slate-700 hover:bg-gray-100  cursor-pointer  text-md tracking-wide">
        <span>{{ title }}</span>
      </div>
    </router-link>
  </div>
</template>