import React from 'react'
import * as Icon from '@mui/icons-material'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbarWrapper'>
        <div className='navbarLeft'>
          <span className='logo'>Redux toolkit</span>
          <span className='navbarLink'>Home</span>
          <span className='navbarLink'>About</span>
          <span className='navbarLink'>Contact</span>
        </div>
        <div className='navbarCenter'>
          <div className='search'>
            <input
              type='text'
              placeholder='search for something...'
              className='searchInput'
            />
          </div>
        </div>
        <div className='navbarRight'>
          <img
            className='avatar'
            src='https://images.unsplash.com/profile-fb-1547572180-93a860f0a32b.jpg?auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff'
            alt='avatar_profile'
          />
          <span className='navbarName'>EIFFEL</span>
          <Icon.ArrowDropDown />
        </div>
      </div>
    </div>
  )
}

export default Navbar
