import React, { useEffect } from "react"
import { Route, Switch, useLocation, useHistory } from "react-router-dom"
import { connect } from "react-redux"

import { Container, Header } from "semantic-ui-react"

import loginService from "../services/login"
import { loginUser, logoutUser } from "../reducers/userReducer"

import LoginButton from "./LoginButton"
import NavBar from "./NavBar"
import Footer from "./Footer"
import PrivateRoute from "./PrivateRoute"

const LOGGED_IN_USER = "loggedInUser"

const App = ({ user, loginUser, logoutUser }) => {
  // Get current location and the query parameter "token"
  const history = useHistory()
  const { search, pathname } = useLocation()

  // Session management effect
  useEffect(() => {
    // Check if user has old session
    const loggedUserJSON = window.localStorage.getItem(LOGGED_IN_USER)
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      loginUser(user.name)
    } else {
      // Otherwise wait for user to authenticate and then create new session
      const token = new URLSearchParams(search).get("token")
      if (token && pathname === "/login") {
        loginService
          .login(token)
          .then(user => {
            window.localStorage.setItem(LOGGED_IN_USER, JSON.stringify(user))
            loginUser(user.name)
            history.push("/")
          })
          .catch(error => console.error("Authentication failed"))
      }
    }
  }, [history, pathname, search, loginUser])

  const handleLogout = () => {
    window.localStorage.removeItem(LOGGED_IN_USER)
    logoutUser()
    history.push("/")
  }

  return (
    <div>
      <NavBar user={user} handleLogout={handleLogout} />
      <Container text style={{ marginTop: "7em" }}>
        <Switch>
          <Route exact path="/">
            <Header as="h2">Homepage</Header>
          </Route>
          <Route path="/login">
            <p>
              Please log in: <LoginButton />
            </p>
          </Route>
          <PrivateRoute path="/user">
            <h3>Protected</h3>
          </PrivateRoute>
        </Switch>
      </Container>
      <Footer />
    </div>
  )
}

const mapStateToProps = ({ user }) => ({ user })
const mapDispatchToProps = { loginUser, logoutUser }

export default connect(mapStateToProps, mapDispatchToProps)(App)
