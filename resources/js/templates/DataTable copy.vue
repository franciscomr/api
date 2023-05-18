<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import search from '../functions/search.js';
import BasicButton from '../components/BasicButton.vue';
import ArrowUpThinIcon from 'vue-material-design-icons/ArrowUpThin.vue';
import ArrowDownThinIcon from 'vue-material-design-icons/ArrowDownThin.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';
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
  },
  components: {
    BasicButton, ArrowUpThinIcon, ArrowDownThinIcon, CloseIcon
  },
  setup(props) {
    const showList = ref(false);
    const filter = ref({});
    const sortBy = ref('-id');
    const { fetch, dataReceived } = search();
    const router = useRouter()

    const sort = (value) => {
      if (sortBy.value.startsWith('-')) {
        sortBy.value = sortBy.value.slice(1)
        if (value !== sortBy.value) {
          sortBy.value = value
        }

      } else {
        if (value === sortBy.value) {
          sortBy.value = '-' + value
        } else {
          sortBy.value = value
        }
      }
      fetch(route('organizations.index'), sortBy.value, filter.value);
    }

    const filterData = () => {
      fetch(route('organizations.index'), sortBy.value, filter.value);
    }

    const redirectTo = (path) => {
      router.push({ name: path });
    }

    onMounted(() => {
      fetch(route('organizations.index'), sortBy.value, filter.value);
    });

    return { fetch, dataReceived, sort, sortBy, filter, filterData, showList, redirectTo }

  }
}
</script>

<template>
  <div class="space-y-4 py-2">
    <div class="flex space-x-4 justify-end">
      <div class="flex justify-center">
        <BasicButton @click="showList = !showList" :label="'Filtrar'" :icon="'filter-outline-icon'" />

        <div v-show="showList" class="rounded-md bg-white shadow-lg my-14 fixed z-10 p-2">
          <div class="px-3 pt-2 flex justify-end cursor-pointer">
            <close-icon @click="showList = false" :size=24 fillColor="#64748b" />
          </div>
          <div class="flex items-center p-3" v-for="field in fields" :key="field.id">
            <label :for="field.name" class="justify-start text-sm text-slate-500 min-w-max pr-2">{{ field.label }}</label>
            <div class="flex justify-end w-full">
              <input v-on:keyup.enter="filterData()" :type="field.filter === 'date' ? 'date' : 'search'" :id="field.name"
                class="py-1 px-2 border rounded-md  w-48 text-slate-700" v-model="filter[field.name]">
            </div>

          </div>
        </div>
      </div>
      <div>
        <BasicButton :label="'Exportar'" :icon="'tray-arrow-down-icon'" />
      </div>
      <div>
        <BasicButton :label="'Nuevo'" :type="'primary'" :icon="'plus-icon'" @click="redirectTo('organizations.create')">
        </BasicButton>
      </div>
    </div>

    <div class="bg-white overflow-x-auto p-3 rounded-lg">
      <table class="w-full text-sm text-left">
        <thead>
          <tr class="h-12">
            <th v-for="field in fields" class="mx-1">
              <div @click="sort(field.name)" class="cursor-pointer flex items-center">
                <span class=" flex text-slate-500">{{ field.label }}</span>
                <div v-if="field.name === sortBy || field.name === sortBy.slice(1)" class="">
                  <span v-if="field.name === sortBy">
                    <arrow-up-thin-icon :size=16 fillColor="#64748b" />
                  </span>
                  <span v-if="field.name === sortBy.slice(1)">
                    <arrow-down-thin-icon :size=16 fillColor="#64748b" />
                  </span>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="h-12 text-md bg-white border-t hover:bg-gray-100" v-for="data in dataReceived" :key="data.index">
            <td v-for="field in fields" :key="field.id" class="px-1 text-slate-500">
              {{ data['attributes'][field.name] }}
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>