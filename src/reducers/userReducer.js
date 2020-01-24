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

export const loginUser = user => ({ type: "SET_USER", user })

export const logoutUser = () => ({ type: "UNSET_USER" })

export default userReducer
