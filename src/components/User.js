import React from "react"

const User = ({ token }) => {
  return <p>{token ? token : "Not logged in"}</p>
}

export default User
