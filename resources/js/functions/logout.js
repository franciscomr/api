import router from '../router/index'
const logout = async () => {
  await axios.post(route('logout'))
    .then((res) => {
      console.log(res.data)
      router.push('/login')
    }).catch((err) => {
      console.log(err)
    })
}
export default logout