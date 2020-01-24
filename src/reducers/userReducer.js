import userService from "../services/user"

const userReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.user
    case "UNSET_USER":
      return null
    default:
      return state
  }
}

// Fetches full user details by name
export const loginUser = username => async dispatch => {
  const user = await userService.getInfo(username)
  dispatch({ type: "SET_USER", user })
}

export const logoutUser = () => ({ type: "UNSET_USER" })

export default userReducer
