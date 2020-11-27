import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

const Tag = ({ tag }) => {
  const { toggleActive, isActive } = useContext(AppContext)

  return (
    <div
      className={`tag-single ${isActive(tag) ? 'active' : ''}`}
      onClick={() => toggleActive(tag)}
    >
      <span>{tag}</span>
    </div>
  )
}

export default Tag
