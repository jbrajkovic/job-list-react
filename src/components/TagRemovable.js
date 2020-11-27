import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

const TagRemovable = ({ tag }) => {
  const { removeActiveTag } = useContext(AppContext)
  return (
    <div className='tag-box'>
      <div className='tag'>
        <span>{tag}</span>
      </div>
      <div className='tag removable' onClick={() => removeActiveTag(tag)}>
        <img
          src={process.env.PUBLIC_URL + '/images/icon-remove.svg'}
          alt='remove-icon'
        />
      </div>
    </div>
  )
}

export default TagRemovable
