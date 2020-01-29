import userService from "../services/user"
import loginService from "../services/login"

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

/**
 * Verify user's stored token,
 * Fetch full user details by name,
 * load user's details to store.
 */
export const loadUser = (token, username) => async dispatch => {
  const [tokenIsValid, user] = await Promise.all([
    loginService.verifyToken(token),
    userService.getInfo(username)
  ])
  if (tokenIsValid) {
    dispatch({ type: "SET_USER", user })
  } else {
    dispatch({ type: "UNLOAD_USER" })
  }
}

export const unloadUser = () => ({ type: "UNLOAD_USER" })

export default userReducer
