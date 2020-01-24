import axios from "axios"
const baseUrl = "/api/login"

const login = token =>
  axios
    .post(baseUrl, { token })
    .then(res => res.data)
    .catch(error => console.error(error.response))

export default { login }
