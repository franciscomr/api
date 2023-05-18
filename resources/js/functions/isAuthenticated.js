import router from '../router/index'
const isAuthenticated = async () => {
  await axios.get(route('get.user'))
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
      //router.push('/login')
    })
}
export default isAuthenticated