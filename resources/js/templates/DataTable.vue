<script>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import search from '../functions/search.js';
import exportExcel from '../functions/exportExcel.js';
import BasicButton from '../components/BasicButton.vue';
import Breadcrum from '../components/Breadcrum.vue';
import ArrowUpThinIcon from 'vue-material-design-icons/ArrowUpThin.vue';
import ArrowDownThinIcon from 'vue-material-design-icons/ArrowDownThin.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';
import ReloadIcon from 'vue-material-design-icons/Reload.vue';
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
    BasicButton,
    ArrowUpThinIcon,
    ArrowDownThinIcon,
    CloseIcon,
    Breadcrum, ReloadIcon
  },
  setup(props) {
    const showList = ref(false);
    const filter = ref({});
    const sortBy = ref('-id');
    const router = useRouter();
    const dataReceived = ref({});

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
      searchData();
    }


    const redirectTo = (path) => {
      router.push({ name: path });
    }
    const reload = () => {
      filter.value = {}
      searchData()
      showList.value = false
    }

    const exportData = async () => {
      await search(route(router.currentRoute.value.name + '.export'), sortBy.value, filter.value)
        .then(res => {
          exportExcel(props.title, res)
        })
    }

    const searchData = async () => {
      await search(route(router.currentRoute.value.name + '.index'), sortBy.value, filter.value)
        .then(res => {
          dataReceived.value = res
        })
    }

    onMounted(() => {
      searchData()
    });


    return { dataReceived, sort, sortBy, filter, searchData, showList, redirectTo, reload, exportData }
  },
  computed: {
    currentRouteName() {
      return router.name;
    }
  }

}
</script>

<template>
  <div class="p-3 space-y-4">
    <div class="flex items-center space-x-4 justify-end">

      <h1 class="text-xl font-medium w-full">{{ title }}</h1>
      <div class="flex justify-center">
        <BasicButton @click="showList = !showList" :label="'Filtrar'" :icon="'filter-outline-icon'" />
      </div>
      <div>
        <BasicButton @click="exportData" :label="'Exportar'" :icon="'tray-arrow-down-icon'" />
      </div>
      <div>
        <BasicButton :label="'Nuevo'" :type="'primary'" :icon="'plus-icon'" @click="redirectTo('organizations.create')">
        </BasicButton>
      </div>
    </div>
    <div class="relative" v-show="showList">
      <div class="absolute w-full">
        <div class="flex justify-end w-full">
          <div class="backdrop-blur-sm bg-white/90 shadow-md p-4 w-full md:w-96">
            <div class="flex justify-end">
              <reload-icon @click="reload" v-show="showList" :size=24 fillColor="#64748b" class="p-1 cursor-pointer" />
              <close-icon @click="showList = false" :size=24 fillColor="#64748b" class="p-1 cursor-pointer" />
            </div>

            <div class="flex items-center p-3" v-for="field in fields" :key="field.id">
              <label :for="field.name" class="justify-start text-sm font-medium min-w-max pr-2">{{ field.label }}</label>
              <div class="flex justify-end w-full">
                <input v-on:keyup.enter="searchData()" :type="field.filter === 'date' ? 'date' : 'search'"
                  :id="field.name"
                  class="py-1 px-2 border rounded-md  w-48 focus:outline-none focus:border-gray-400 text-slate-700"
                  v-model="filter[field.name]">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left">
        <thead class="">
          <tr class="h-14 border-t border-b">
            <th v-for="field in fields" class="mx-1 font-medium">
              <div @click="sort(field.name)" class="cursor-pointer flex items-center ">
                <span class="">{{ field.label }}</span>
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
          <tr class="h-12 text-md border-b hover:bg-gray-100" v-for="data in dataReceived" :key="data.index">
            <td v-for="field in fields" :key="field.id" class="px-1 text-gray-600">
              {{ data['attributes'][field.name] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

