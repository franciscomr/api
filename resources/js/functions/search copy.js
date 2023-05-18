import { ref } from 'vue';
const dataReceived = ref({});
export default function search() {
  const fetch = async (route, sortBy, filterBy) => {

    await axios.get(route,
      {
        params:
        {
          'sort': sortBy,
          'filter': filterBy
        }
      })
      .then(res => {
        dataReceived.value = res.data.data
      }).catch(err => {
        console.log(err)
      })
    return { dataReceived }
  }
  return { fetch, dataReceived }
}