import React from "react"
import { Dropdown, Menu, Image } from "semantic-ui-react"

const UserMenuItem = ({ user, handleLogout }) => {
  const trigger = (
    <span>
      <Image avatar src={user.image[0]["#text"]} /> {user.name}
    </span>
  )

  return (
    <Menu.Menu position="right">
      <Dropdown trigger={trigger} item simple>
        <Dropdown.Menu>
          <Dropdown.Item
            as="a"
            href={user.url}
            icon="external"
            text="last.fm profile"
          />
          <Dropdown.Divider />
          <Dropdown.Item icon="setting" text="Settings" />
          <Dropdown.Item icon="log out" text="Log out" onClick={handleLogout} />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  )
}

export default UserMenuItem
