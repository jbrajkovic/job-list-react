import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({ primary, text }) => {
  return (
    <div className={`badge ${primary ? 'primary' : ''}`}>
      <span>{text}</span>
    </div>
  )
}

Badge.propTypes = {
  primary: PropTypes.bool,
}

Badge.defaultProps = {
  primary: false,
}

export default Badge
