export default async function submitForm(isNewRecord, url, data) {
  let response = {}
  if (isNewRecord) {
    await axios.get('/sanctum/csrf-cookie')
      .then(
        await axios.post(url, data)
          .then(res => {
            response = res.data[0]
          })
      )
      .catch(err => {
      })
  } else {
    await axios.get('/sanctum/csrf-cookie')
      .then(
        await axios.patch(url, data)
          .then(res => {
            response = res.data[0]
          })
      )
      .catch(err => {
      })
  }

  return response
}