import axios from "axios"
const baseUrl = "/api/login"

const login = token => {
  const request = axios.post(baseUrl, { token })
  return request.then(response => response.data)
}

export default { login }
