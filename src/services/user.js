import axios from "axios"
const baseUrl = "/api/users"

const getScrobbles = id =>
  axios
    .get(`${baseUrl}/${id}/scrobbles`)
    .then(res => res.data, _ => console.log("getScrobbles request rejected"))

export default { getScrobbles }
