import axios from "axios"
const baseUrl = "/api/login"

const login = token => axios.post(baseUrl, { token }).then(res => res.data)

const verifyToken = signedToken =>
  axios
    .post(`${baseUrl}/verify`, { token: signedToken })
    .then(_ => true, _ => false)
    .catch(error => {
      console.error(error.response)
      return false
    })

export default { login, verifyToken }
