<script>
import Logo from '../components/Logo.vue';
import DataForm from '../templates/DataForm.vue';
export default {
  name: 'Login',
  components: {
    DataForm, Logo
  },
}
</script>

<template>
  <div class="backdrop-blur-sm bg-blue-100/90 rounded-xl flex h-full">
    <div class="w-full h-full flex items-center justify-center">
      <div class="w-full sm:max-w-md px-5">
        <Logo alt="logo" :size="'lg'" />
        <div class="py-6">
          <DataForm :fields="[
            {
              label: 'Usuario',
              name: 'username',
              type: 'input',
              propieties: {
                type: 'text',
                required: true
              }
            },
            {
              label: 'Password',
              name: 'password',
              type: 'input',
              propieties: {
                type: 'password',
                required: true
              }
            },
          ]" :full_display="true">
          </DataForm>
        </div>
      </div>
    </div>
  </div>
</template>
