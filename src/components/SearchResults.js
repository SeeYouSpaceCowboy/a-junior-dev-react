import React, { Component } from 'react'

class SearchResults extends Component {
  render() {
    return (
      <div className='col-12 card'>
        <h1>{ listing.position } at { listing.company }</h1>
        <h4>{ listing.street },  { listing.city } { listing.state } { listing.zipcode }</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum enim vitae pellentesque fringilla. Vivamus eleifend faucibus ipsum, nec rutrum nulla imperdiet lacinia. Phasellus euismod enim sit amet ante luctus, in rhoncus arcu egestas. Integer eu tempor quam. Fusce nec ante tellus.
        </p>

        <div className='row'>
          <div className='col-3'>
            <button className='fill primary'>Apply</button>
          </div>
          <div className='col-3'>
            <button className='fill'>Site</button>
          </div>
        </div>
      </div>
    )
  }
}

extends SearchResults
