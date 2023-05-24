<script>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import Alert from '../components/Alert.vue';
import FormInput from '../components/FormInput.vue';
import FormSelect from '../components/FormSelect.vue';
import FormButton from '../components/FormButton.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';
import axios from 'axios';
export default {
  name: 'DataFrom',
  components: {
    FormInput, FormSelect, FormButton, CloseIcon, Alert
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
    full_display: {
      type: Boolean,
      default: false
    }
  },
  emits: ["alert_displayed"],
  setup(props) {
    const router = useRouter()
    const form = ref({})
    const errors = ref({})
    let submitRoute = ''
    const showNotification = ref(false);
    const resourceCreated = ref("");

    const alert_displayed = (val) => {
      redirect()
    }

    onMounted(() => {
      if (!props.is_new_record) {
        form.value = props.data
        submitRoute = route(props.resource + '.update');
      } else {
        if (props.resource === 'login') {
          submitRoute = route(props.resource);
        } else {
          submitRoute = route(props.resource + '.store');
        }
      }
    });

    const submit = () => {
      if (props.is_new_record === true) {
        submitCreate()
      } else {
        console.log('UPDATE')
      }
    }
    const submitCreate = async () => {
      errors.value = {}
      await axios.get('/sanctum/csrf-cookie')
        .then(() => {
          axios.post(submitRoute, form.value)
            .then(res => {
              redirect()
              /*
              resourceCreated.value = res.data[0]['attributes']['name']
              console.log(resourceCreated.value)
              showNotification.value = true
              */
            })
            .catch(err => {
              if (err.response) {
                if (errors !== undefined && err.response.data.errors !== undefined) {
                  errors.value = err.response.data.errors
                }
              }
              else if (err.request) {
                console.log(err.request)
              }
            })
        });
    }

    const redirect = () => {
      if (props.resource === 'login') {
        router.push({ name: 'home' });
      } else {
        router.push({ name: props.resource }, () => {
          this.$toasted.show('Successfully Added User')
        }
        );
      }
    }

    return {
      submit, form, errors, submitCreate, showNotification, alert_displayed, resourceCreated
    }
  }
}
</script>

<template>
  <div class="w-full sm:max-w-md  bg-white mx-auto p-5 rounded-lg">
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
