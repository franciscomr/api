<script>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import store from '../store';
import show from '../functions/show';
import submitForm from '../functions/submit';
import FormInput from '../components/FormInput.vue';
import FormSelect from '../components/FormSelect.vue';
import FormButton from '../components/FormButton.vue';
export default {
  name: 'DataFrom',
  components: {
    FormInput, FormSelect, FormButton
  },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    fields: {
      default: {}
    },
    resource: {
      type: String,
      default: 'login'
    },
    is_new_record: {
      type: Boolean,
      default: true
    },
    data: {
      default: {}
    },
  },
  setup(props) {
    const router = useRouter()
    const form = ref({})
    const errors = ref({})
    let submitRoute = ''

    onMounted(() => {
      if (!props.is_new_record) {
        submitRoute = route(props.resource + '.update', router.currentRoute.value.params.id);
        show(route(props.resource + '.show', router.currentRoute.value.params.id))
          .then(res => {
            form.value = res.data.attributes
          })
          .catch(err => {
            if (err.response) {
              errors.value = err.response.data.errors
            }
            else if (err.request) {
              console.log(err.request)
            }
          })

      } else {
        if (props.resource === 'login') {
          submitRoute = route(props.resource);
        } else {
          submitRoute = route(props.resource + '.store');
        }
      }
    });

    const submit = () => {
      submitForm(props.is_new_record, submitRoute, form.value)
        .then(res => {
          errors.value = {}
          if (props.resource !== 'login') {
            let notificationMessage = 'Se ha creado el recurso: ';
            if (!props.is_new_record) {
              notificationMessage = 'Se ha Actualizado el recurso: '
            }
            let notification = {
              type: 'success',
              id: res.attributes.id,
              name: res.attributes.name,
              message: notificationMessage
            }
            store.dispatch('showNotification', notification)
          }
          redirect()
        })
        .catch(err => {
          if (err.response) {
            errors.value = err.response.data.errors
          }
          else if (err.request) {
            console.log(err.request)
          }

        })

    }

    const redirect = () => {
      if (props.resource === 'login') {
        router.push({ name: 'home' });
      } else {
        router.push({ name: props.resource })
      }
    }

    return {
      submit, form, errors
    }
  }
}
</script>

<template>
  <div class="w-full sm:max-w-lg  bg-white mx-auto p-10 rounded-lg">
    <form @submit.prevent="submit()">
      <div v-for="field in fields">
        <FormInput v-if="field.type === 'input'" v-model="form[field.name]" :id="field.name" :label="field.label"
          :type="field.propieties.type" :message="errors[field.name]" />
        <FormSelect v-if="field.type === 'select'" :name="form[field.name]" v-model="form[field.name]" :id="field.name"
          :label="field.label" :values="field.propieties.value" :message="errors[field.name]" />
      </div>
      <div class="pt-6">
        <FormButton v-if="resource === 'login'" :label="'Iniciar Sesión'" :type="'primary'" />
        <FormButton v-else :label="is_new_record ? 'Registrar' : 'Actualizar'" :type="'primary'" />
      </div>
    </form>
  </div>
</template >
