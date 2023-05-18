<script>
import Main from './layouts/Main.vue';
import BasicButton from './components/BasicButton.vue';
export default {
  name: 'App',
  components: {
    Main, BasicButton
  },
}
</script>
<template>
  <div>
    <Main>
      <template #content>
        <div class="w-full h-screen p-5">
          <div v-if="$route.name === 'index'" class="backdrop-blur-sm bg-blue-100/90 rounded-xl h-full p-5">
            <div class="pb-5 w-full">
              <div class="flex justify-end">
                <router-link :to="{ name: 'home' }">
                  <BasicButton :label="'Aplicación'" />
                </router-link>
              </div>

            </div>
          </div>
          <router-view />
        </div>


      </template>
    </Main>
  </div>
</template>





<!--
<template>
  <div>
    <Main>
      <template #content>
        <div class="w-full h-screen flex justify-center p-5">
          <div class="w-full">
            <div v-show="$route.name === 'index'" class="flex w-full  justify-end px-2  space-x-3  bg-blue-100">
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

-->