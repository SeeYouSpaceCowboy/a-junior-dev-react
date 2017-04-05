import React, { Component } from 'react';
import NavbarMenu from './components/NavbarMenu'
import SideNav from './components/SideNav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarMenu/>
        <SideNav/>
        <div className='container'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
