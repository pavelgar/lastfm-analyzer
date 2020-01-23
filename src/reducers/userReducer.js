import loginService from "../services/login"

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

export const loginUser = token => {
  return async dispatch => {
    const userToken = await loginService.login(token)
    console.log(userToken)
    dispatch({ type: "SET_USER", userToken })
  }
}

export const logoutUser = () => ({ type: "UNSET_USER" })

export default userReducer
