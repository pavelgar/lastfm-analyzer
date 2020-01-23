import React from "react"

const Login = props => {
  const lastfmAuthURL =
    `https://www.last.fm/api/auth/?api_key=${process.env.REACT_APP_LASTFM_API_KEY}` +
    `&cb=${window.location.origin}/login`

  return <a href={lastfmAuthURL}>Log In</a>
}

export default Login
