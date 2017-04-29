import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import LogOut from './LogOut'

class SideNav extends Component {
  constructor() {
    super()

    this.handleHome = this.handleHome.bind(this)
    this.handleProfile = this.handleProfile.bind(this)
    this.handleAbout = this.handleAbout.bind(this)
    this.handlePostAJob = this.handlePostAJob.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  handleHome() {
    browserHistory.push('/')
    this.onClose()
  }

  handleProfile() {
    browserHistory.push('/')
    this.onClose()
  }

  handleAbout() {
    browserHistory.push('/about')
    this.onClose()
  }

  handlePostAJob() {
    browserHistory.push('/postajob')
    this.onClose()
  }

  onClose() {
    document.getElementById('side-nav').style.width = '0'
  }

  render() {
    if(!!sessionStorage.jwt) {
      return (
        <div id='side-nav'>
          <input className='icon' type='image' src='close.svg' onClick={ this.onClose }/>
          <a onClick={ this.handleHome }>Home</a>
          <a onClick={ this.handleProfile }>Profile</a>
          <a>Edit</a>
          <a onClick={ this.handleAbout }>About</a>
          <a onClick={ this.onClose }><LogOut/></a>
        </div>
      )
    }

    return (
      <div id='side-nav'>
        <input className='icon' type='image' src='close.svg' onClick={ this.onClose }/>
        <a className='side-nav-link' onClick={ this.handleHome }>Home</a>
        <a className='side-nav-link' onClick={ this.handleAbout }>About</a>
        <a className='side-nav-link' onClick={ this.handlePostAJob }>Post A Job</a>
      </div>
    )
  }
}

export default SideNav
