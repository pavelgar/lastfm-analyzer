import React from "react"
import { Link } from "react-router-dom"
import { Container, Menu, Icon } from "semantic-ui-react"
import LoginButton from "./LoginButton"
import UserMenuItem from "./UserMenuItem"

const NavBar = ({ user, handleLogout }) => {
  return (
    <Menu fixed="top" borderless size="large">
      <Container>
        <Menu.Item as={Link} header to="/">
          <Icon name="lastfm" size="big" style={{ marginRight: "1em" }} />
          LastFm Analyzer
        </Menu.Item>
        <Menu.Item as={Link} to="/" content="Home" />
        <Menu.Item as={Link} to="/user" content="User" />
        {user ? (
          <UserMenuItem user={user} handleLogout={handleLogout} />
        ) : (
          <Menu.Item position="right">
            <LoginButton inverted />
          </Menu.Item>
        )}
      </Container>
    </Menu>
  )
}

export default NavBar
