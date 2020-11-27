import React from 'react'

const Header = () => {
  return (
    <header>
      <img
        className='header-mobile'
        src={process.env.PUBLIC_URL + '/images/bg-header-mobile.svg'}
        alt='header-mobile'
      />

      <img
        className='header-desktop'
        src={process.env.PUBLIC_URL + '/images/bg-header-desktop.svg'}
        alt='header-desktop'
      />
    </header>
  )
}

export default Header
