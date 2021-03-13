import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import GroomingDropdown from '../Dropdown/GroomingDropdown'
import { Button } from '../Button/Button'

function Navbar() {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          29 PAWS <i className='fas fa-paw' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <li
              className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to='/grooming'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Grooming <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <GroomingDropdown />}
            </li>
          </li>
          <li className='nav-item'>
            <li
              className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to='/grooming'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About <i className='fas fa-caret-down' />
              </Link>
              {/* {dropdown && <AboutDropdown />} */}
            </li>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar