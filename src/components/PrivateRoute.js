import React from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ children, ...props }) => (
  <Route
    {...props}
    render={({ location }) =>
      props.user ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )
    }
  />
)

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps)(PrivateRoute)
