import { browserHistory } from 'react-router'
import axios from 'axios'

const url = 'https://a-junior-dev.herokuapp.com/v1/'
// const dev_url = 'https://localhost:3000/v1/'

axios.defaults.baseURL = url
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const listingAdapter = {
  fetchAllListings: () => {
    return axios.get('/listings')
      .then(response => response.data)
      .catch((error) => {
        console.log('Failed to fetch all listings from server')

        return error
      })
  },

  createListing: (listing) => {
    return axios.post('/listings', listing)
      .then((response) => {
        console.log("response listing")
        browserHistory.push('/')
        return response.data
      }).catch((error) => {
        console.log('Failed to create Listing')

        return error
      })
  }
}
