import React, { Component } from 'react'
import logo from '../images/shakti_logo.png';
// import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light" data-bs-theme="light">
            <div className="logo-img me-5">
                <img src={logo} className='px-3' alt="Company Logo" />
            </div>
            <ul className='navbar-nav'>
                <li className=' mx-2 nav-item'><a className='nav-link' href='/'>Home</a></li>
                <li className=' mx-2 nav-item'><a className='nav-link' href='/'>About</a></li>
                <li className=' mx-2 nav-item'><a className='nav-link' href='/'>Services</a></li>
                <li className=' mx-2 nav-item'><a className='nav-link' href='/'>Contact us</a></li>
                <li className=' mx-2 nav-item'><a className='nav-link' href='/'>Other Help</a></li>
            </ul>
        </nav>
      </div>
    )
  }
}
