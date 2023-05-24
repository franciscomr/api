<script>
import { computed } from 'vue'
export default {
  name: 'FormInput',
  props: {
    id: {
      type: String,
      default: 'id'
    },
    label: {
      type: String,
      default: 'label'
    },
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    message: {
    }
  },
  setup(props) {
    const messageString = computed(() => {
      if (props.message !== null) {
        return props.message.toString()
      } else {
        return null
      }
    })
    return {
      messageString
    }
  }
}
</script>
<template>
  <div class="py-1">
    <label class="block text-md tracking-wide font-medium" :for="id">
      {{ label }}
    </label>
    <input class="px-4 py-2 w-full rounded-md border focus:outline-none focus:border-gray-400" :id="id" :type="type"
      :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    <div class="h-3">
      <div v-show="message">
        <p class="text-sm text-red-600 dark:text-red-400">
          {{ message }}
        </p>
        <!--  

          <p v-for="error in message" class="text-sm text-red-600 dark:text-red-400">
            {{ error }}
          </p>
        -->
      </div>
    </div>
  </div>
</template>