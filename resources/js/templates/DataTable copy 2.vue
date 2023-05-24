<script>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import search from '../functions/search.js';
import exportExcel from '../functions/exportExcel.js';
import BasicButton from '../components/BasicButton.vue';
import ArrowUpThinIcon from 'vue-material-design-icons/ArrowUpThin.vue';
import ArrowDownThinIcon from 'vue-material-design-icons/ArrowDownThin.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';
import ReloadIcon from 'vue-material-design-icons/Reload.vue';
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';

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
    CloseIcon, ReloadIcon, MagnifyIcon
  },
  setup(props) {
    const showList = ref(false);
    const filter = ref({});
    const sortBy = ref('-id');
    const router = useRouter();
    const dataReceived = ref({});
    const pagination = ref({});
    const perPage = ref(10);

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

    const doSearchData = (resetSearchFilter) => {
      if (resetSearchFilter === true) {
        filter.value = {}
      }
      searchData()
      showList.value = false
    }

    const exportData = async () => {
      await search(route(router.currentRoute.value.name + '.export'), sortBy.value, filter.value)
        .then(res => {
          exportExcel(props.title, res.data)
        })
    }

    const searchData = async () => {
      await search(route(router.currentRoute.value.name + '.index'), sortBy.value, filter.value, perPage.value)
        .then(res => {
          dataReceived.value = res.data;
          pagination.value = res.pagination
        })
    }
    const numberItemsDisplayed = (number) => {
      perPage.value = number
      searchData()
    }

    const changePageDisplayed = async (url) => {
      if (url !== null) {
        await search(url, sortBy.value, filter.value, perPage.value)
          .then(res => {
            dataReceived.value = res.data;
            pagination.value = res.pagination
          })
      }
    }

    onMounted(() => {
      searchData()
    });

    return { dataReceived, sort, sortBy, filter, searchData, showList, redirectTo, doSearchData, exportData, perPage, numberItemsDisplayed, pagination, changePageDisplayed }
  },

}
</script>
<template>
  <div class="bg-white p-5 rounded-lg">
    <div class="p-3 space-y-4">
      <div class="flex items-center space-x-4 justify-end">
        <h1 class="text-xl font-medium w-full">{{ title }}</h1>
        <div>
          <select name="pagination" id="pagination" v-model="perPage" @change="numberItemsDisplayed(perPage)"
            class="py-2 px-0 md:px-2 bg-gray-100 shadow-none focus:shadow-md rounded-md">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>
        <div>
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
              <div class="flex justify-end space-x-3">
                <div @click="doSearchData(true)" class="border p-1 cursor-pointer">
                  <reload-icon :size=24 fillColor="#64748b" />
                </div>
                <div @click="doSearchData(false)" class="border p-1 cursor-pointer">
                  <magnify-icon :size=24 fillColor="#64748b" />
                </div>
                <div @click="showList = false" class="p-1 cursor-pointer">
                  <close-icon :size=24 fillColor="#64748b" />
                </div>

              </div>

              <div class="flex items-center p-3" v-for="field in fields" :key="field.id">
                <label :for="field.name" class="justify-start text-sm font-medium min-w-max pr-2">{{ field.label
                }}</label>
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

      <div class="p-2 border rounded-md overflow-x-auto">

        <table class="w-full divide-y divide-gray-200 dark:divide-gray-700 ">
          <thead>
            <tr>
              <th v-for="field in fields" class=" px-1 py-4 text-left text-xs font-medium text-gray-500 uppercase"
                scope="col">
                <div @click="sort(field.name)" class="cursor-pointer flex items-center">
                  <span class="">{{ field.label }}</span>
                  <div v-if="field.name === sortBy || field.name === sortBy.slice(1)" class="">
                    <span v-show="field.name === sortBy">
                      <arrow-up-thin-icon :size=16 fillColor="#64748b" />
                    </span>
                    <span v-show="field.name === sortBy.slice(1)">
                      <arrow-down-thin-icon :size=16 fillColor="#64748b" />
                    </span>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="data in dataReceived" :key="data.index" class="h-12 hover:bg-gray-100">
              <td v-for="field in fields" :key="field.id"
                class="whitespace-nowrap px-1 text-sm text-gray-800 dark:text-gray-200">
                {{ data['attributes'][field.name] }}
              </td>
            </tr>

          </tbody>
        </table>



      </div>
      <div class="flex justify-end">
        <div class=" space-x-3 inline-flex">
          <div v-for="page in pagination.links" class="">
            <div @click="changePageDisplayed(page.url)" class="border rounded-full px-2 cursor-pointer"
              :class="page.active ? 'bg-gray-100 text-blue-400' : ''">
              <span v-html="page.label"></span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span>{{ pagination.from }} - {{ pagination.to }} <span class="px-1">de</span> {{ pagination.total
        }} Resultados</span>
      </div>
    </div>




  </div>
</template>

