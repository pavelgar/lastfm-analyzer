import axios from "axios"

const baseUrl = "https://ws.audioscrobbler.com/2.0/"
const REACT_APP_LASTFM_API_KEY = process.env.REACT_APP_LASTFM_API_KEY

const getInfo = username =>
  axios
    .get(baseUrl, {
      params: {
        method: "user.getinfo",
        user: username,
        api_key: REACT_APP_LASTFM_API_KEY,
        format: "json"
      }
    })
    .then(res => res.data.user)
    .catch(error => console.error(error.response))

export default { getInfo }
