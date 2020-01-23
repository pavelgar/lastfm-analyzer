import React, { useEffect } from "react"
import { Route, Link, useLocation } from "react-router-dom"
import { connect } from "react-redux"

import { loginUser, logoutUser } from "./reducers/userReducer"

import User from "./components/User"
import Login from "./components/Login"

const App = props => {
  // Get current location and the query parameter "token"
  const { search, pathname } = useLocation()

  useEffect(() => {
    const token = new URLSearchParams(search).get("token")
    if (token && pathname === "/login") {
      props.loginUser(token)
    }
  }, [])

  const padding = { padding: 5 }

  return (
    <div>
      <div>
        <Link style={padding} to="/">
          Home
        </Link>
        {props.user ? "logged in" : <Login />}
      </div>
      <Route path="/login" render={() => {}} />
      <User user={props.user} />
    </div>
  )
}

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = { loginUser, logoutUser }

export default connect(mapStateToProps, mapDispatchToProps)(App)
