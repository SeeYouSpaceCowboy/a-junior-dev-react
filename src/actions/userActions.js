import { userAdapter } from '../adapters/userAdapter'

export const login = (credentials) => {
  const response = userAdapter.login( credentials )

  return {
    type: 'LOGIN_USER',
    payload: response
  }
}

export const fetchCurrentUser = () => {
  const response = userAdapter.fetchCurrentUser()

  return {
    type: 'FETCH_CURRENT_USER',
    payload: response
  }
}
