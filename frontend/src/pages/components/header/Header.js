import React from 'react'
import Popover from './Popovers'

function Header () {
  return (
    <div className="header_wrap_body">
      <button className='button header_button'>
        <div className="icon"></div>
        <h2>Dashboard</h2>
      </button>

      <Popover />

    </div>
  )
}

export default Header
