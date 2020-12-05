import React from 'react'

const Header = () => {
  return (
    <header>
      <picture>
        <source media='(min-width:768px)' srcset={process.env.PUBLIC_URL + '/images/bg-header-desktop.svg'} />
        <img
          src={process.env.PUBLIC_URL + '/images/bg-header-mobile.svg'}
          alt='Header-image'
          style='width:auto;'
        />
      </picture>
    </header>
  )
}

export default Header
