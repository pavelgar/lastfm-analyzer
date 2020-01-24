import React from "react"
import { Button } from "semantic-ui-react"

const lastfmAuthURL =
  `https://www.last.fm/api/auth/?api_key=${process.env.REACT_APP_LASTFM_API_KEY}` +
  `&cb=${window.location.origin}/login`

const LoginButton = props => {
  return <Button {...props} as="a" href={lastfmAuthURL} content="Log In" />
}

export default LoginButton
