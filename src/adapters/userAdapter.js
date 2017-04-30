import { browserHistory } from 'react-router'
import axios from 'axios'

const url = 'https://a-junior-dev.herokuapp.com/v1/'
// const dev_url = 'https://localhost:3000/v1/'

axios.defaults.baseURL = url
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const userAdapter = {
  login: (credentials) => {
    return axios.post('login', credentials)
      .then((response) => {
        sessionStorage.setItem('jwt', response.data.jwt)
        axios.defaults.headers.common['AUTHORIZATION'] = response.data.jwt
        browserHistory.push('/')

        return response.data
      }).catch((error) => {
        console.log('Failed login to server')

        return error
      })
  },

  fetchCurrentUser: () => {
    return axios.get('/user')
      .then(response => response.data)
      .catch((error) => {
        console.log('Failed fetch user from server')

        return error
      })
  }
}
