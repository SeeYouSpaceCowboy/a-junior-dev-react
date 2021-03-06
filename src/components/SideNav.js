import React, { Component } from 'react'
import { Link } from 'react-router'

export default class SideNav extends Component {
  constructor() {
    super()
    this.onClose = this.onClose.bind(this)
  }

  onClose() {
    document.getElementById('side-nav').style.width = '0'
  }

  render() {
    if(!!sessionStorage.jwt) {
      return (
        <div id='side-nav'>
          <input className='icon' type='image' src='close.svg' onClick={ this.onClose }/>
          <Link to='/' className='side-nav-link' onClick={ this.onClose }>Home</Link>
          <Link to='/' className='side-nav-link' onClick={ this.onClose }>Profile</Link>
          <Link to='/' className='side-nav-link' onClick={ this.onClose }>Edit</Link>
          <Link to='/about' className='side-nav-link' onClick={ this.onClose }>About</Link>
          <Link to='/postajob' className='side-nav-link' onClick={ this.onClose }>Post A Job</Link>
        </div>
      )
    }

    return (
      <div id='side-nav'>
        <input className='icon' type='image' src='close.svg' onClick={ this.onClose }/>
        <Link to='/' className='side-nav-link' onClick={ this.onClose }>Home</Link>
        <Link to='/about' className='side-nav-link' onClick={ this.onClose }>About</Link>
        <Link to='/postajob' className='side-nav-link' onClick={ this.onClose }>Post A Job</Link>
      </div>
    )
  }
}
