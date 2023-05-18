<script>
import { ref, onMounted } from 'vue';
import CheckCircleIcon from 'vue-material-design-icons/CheckCircle.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';
import AlertCircleIcon from 'vue-material-design-icons/AlertCircle.vue';
import AlertIcon from 'vue-material-design-icons/Alert.vue';

export default {
  name: 'Notifications',
  props: {
    type: {
      type: String,
      default: 'success'
    },
    message: {
      type: String,
      default: 'Alert'
    },
    resource1: {
      type: String,
      default: 'Resource'
    },
    haserrors: {
      type: Boolean,
      default: false,
    },
    errordata: {
      default: {},
    },
  },
  setup(props, { emit }) {
    let notification_shown = ref(true)
    let time = ref(4000);

    onMounted(() => {
      if (props.haserrors) {
        time.value = 20000
      }
      fade(time.value)
    });


    const fade = (timevar) => {
      setTimeout(function () {
        notification_shown.value = false;
        emit("alert_displayed", notification_shown.value)
      }, timevar);
    }
    return {
      notification_shown,
    }
  },
  components: {
    CheckCircleIcon, CloseIcon, AlertCircleIcon, AlertIcon
  }
}
</script>
<template>
  <div v-show="notification_shown" class="w-full relative">
    <div class="w-full absolute z-10  p-3  border-l-4 "
      :class="type === 'danger' ? 'bg-red-100 border-red-600' : type === 'warning' ? 'bg-yellow-100 border-yellow-600' : 'bg-green-100 border-green-600'">
      <div class="flex items-center space-x-3">
        <div class=" flex p-1 rounded-lg"
          :class="type === 'danger' ? 'bg-red-500' : type === 'warning' ? 'bg-yellow-500' : 'bg-green-500'">
          <check-circle-icon :size=20 fillColor="#fff" v-show="type !== 'danger' && type !== 'warning'" />
          <alert-circle-icon :size=20 fillColor="#fff" v-show="type === 'warning'" />
          <alert-icon :size=20 fillColor="#fff" v-show="type === 'danger'" />
        </div>
        <div class="flex w-full">
          <h1 class="text-slate-600 font-medium">{{ message }} {{ resource1 }}</h1>
        </div>
        <div @click="notification_shown = false" class=" p-2 rounded-lg">
          <close-icon :size=20 fillColor="#475569" />
        </div>
      </div>
    </div>
  </div>
</template>