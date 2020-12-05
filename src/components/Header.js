import React from 'react'

const Header = () => {
  return (
    <header>
      <picture>
        <source media='(min-width:768px)' srcSet={process.env.PUBLIC_URL + '/images/bg-header-desktop.svg'} />
        <img
          src={process.env.PUBLIC_URL + '/images/bg-header-mobile.svg'}
          alt='Header'
        />
      </picture>
    </header>
  )
}

export default Header
