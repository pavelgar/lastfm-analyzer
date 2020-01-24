import React from "react"
import { Dropdown, Menu } from "semantic-ui-react"

const UserMenuItem = ({ user, handleLogout }) => {
  return (
    <Menu.Menu position="right">
      <Dropdown item simple text={user.name}>
        <Dropdown.Menu>
          <Dropdown.Item icon="external" text="last.fm profile" />
          <Dropdown.Divider />
          <Dropdown.Item icon="setting" text="Settings" />
          <Dropdown.Item icon="log out" text="Log out" onClick={handleLogout} />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  )
}

export default UserMenuItem
