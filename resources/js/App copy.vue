<script>
import Main from './layouts/Main.vue';
export default {
  name: 'App',
  components: {
    Main
  },
}
</script>
<template>
  <div>
    <Main>
      <template #content>
        <div class="w-full h-screen  flex justify-center p-5">
          <div class="w-full bg-white opacity-75 rounded-lg">
            <div v-show="$route.name === 'index'" class="flex w-full  justify-end px-2  space-x-3 ">
              <router-link to="/home">Home</router-link>
              <router-link to="/login">Login</router-link>
            </div>
            <router-view />
          </div>
        </div>


      </template>
    </Main>
  </div>
</template>





