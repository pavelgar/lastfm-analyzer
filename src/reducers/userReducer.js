import userService from "../services/user"

const userReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.user
    case "UNLOAD_USER":
      return null
    default:
      return state
  }
}

// Fetches full user details by name
export const loadUser = username => async dispatch => {
  const user = await userService.getInfo(username)
  dispatch({ type: "SET_USER", user })
}

export const unloadUser = () => ({ type: "UNLOAD_USER" })

export default userReducer
