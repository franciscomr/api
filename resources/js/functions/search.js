
export default async function search(routeName, sortBy, filterBy) {
  let response = {}
  await axios.get(routeName,
    {
      params:
      {
        'sort': sortBy,
        'filter': filterBy
      }
    })
    .then(res => {
      response = res.data.data
    }).catch(err => {
      response = err
    })
  return response
}
