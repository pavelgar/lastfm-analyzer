import React, { useEffect } from "react"
import { Route, Switch, useLocation, useHistory } from "react-router-dom"
import { connect } from "react-redux"

import { Container, Header } from "semantic-ui-react"

import loginService from "../services/login"
import { loadUser, unloadUser } from "../reducers/userReducer"

import LoginButton from "./LoginButton"
import NavBar from "./NavBar"
import Footer from "./Footer"
import ActivityChart from "./ActivityChart"
import PrivateRoute from "./PrivateRoute"

const USER_SESSION = "userSession"

const App = ({ user, loadUser, unloadUser }) => {
  // Get current location and the query parameter "token"
  const history = useHistory()
  const location = useLocation()

  // Session management effect
  useEffect(() => {
    // Check if user has old session
    const sessionJSON = window.localStorage.getItem(USER_SESSION)
    if (sessionJSON && !user) {
      console.log("Loading the session...")
      const session = JSON.parse(sessionJSON)
      loadUser(session.name)
    } else {
      // Otherwise wait for user to authenticate and then create new session
      const token = new URLSearchParams(location.search).get("token")
      if (token && location.pathname === "/login") {
        console.log("Authenticating...")
        loginService
          .login(token)
          .then(session => {
            console.log("Authentication successful.")
            window.localStorage.setItem(USER_SESSION, JSON.stringify(session))
            history.push("/")
          })
          .catch(error => console.error("Authentication failed"))
      }
    }
  }, [user, history, location, loadUser])

  const handleLogout = () => {
    window.localStorage.removeItem(USER_SESSION)
    unloadUser()
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
            <ActivityChart />
          </PrivateRoute>
        </Switch>
      </Container>
      <Footer />
    </div>
  )
}

const mapStateToProps = ({ user }) => ({ user })
const mapDispatchToProps = { loadUser, unloadUser }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
