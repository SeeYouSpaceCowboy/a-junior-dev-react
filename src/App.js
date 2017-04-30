import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import FixedButton from './components/FixedButton'
import SideNav from './components/SideNav'

class App extends Component {
  constructor() {
    super()

    this.openSideMenu = this.openSideMenu.bind(this)
  }

  openSideMenu() {
    document.getElementById('side-nav').style.width = '26em'
  }

  redirectToPostJobListing() {
    browserHistory.push('/postajob')
  }

  render() {
    return (
      <div className="App">
        <FixedButton id='navbar-menu-button' source='navbar-menu.png' callback={ this.openSideMenu }/>
        <SideNav/>
        <FixedButton id='post-listing' source='upload.svg' callback={ this.redirectToPostJobListing }/>
        <Link to='/home'><h3 className='black-logo-title'>A JUNIOR DEV</h3></Link>
        <div className='grid'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
