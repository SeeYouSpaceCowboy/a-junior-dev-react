import React, { Component } from 'react'

class NavbarMenu extends Component {
  constructor() {
      super()

      this.onClick = this.onClick.bind(this)
  }

  onClick() {
    document.getElementById('side-nav').style.width = '26em'
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
  }

  render() {
    return (
      <div>
        <input className='icon' id='navbar-menu-button' type="image" src="navbar-menu.png" onClick={ this.onClick }/>
      </div>
    )
  }
}

export default NavbarMenu
