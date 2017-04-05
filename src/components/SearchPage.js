import React, { Component } from 'react'
import SearchBar from './SearchBar'

class SearchPage extends Component {
  componentWillMount() {
    document.body.className = 'cover-background'
  }

  componentWillUnMount() {
    document.body.className = 'cover-background'
  }

  render() {
    return (
      <div>
        <h3 id='search-title'>A JUNIOR DEV</h3> 
        <SearchBar/>
      </div>
    )
  }
}

export default SearchPage
