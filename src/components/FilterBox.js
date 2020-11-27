import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import TagRemovable from './TagRemovable'

const FilterBox = () => {
  const { activeTags, removeAllActive } = useContext(AppContext)

  const activeTagList = activeTags.map((activeTag) => (
    <TagRemovable key={activeTag} tag={activeTag} />
  ))

  return (
    <div className='card filter-box'>
      <div className='tags'>{activeTags && activeTagList}</div>

      <button className='clear-tags' onClick={removeAllActive}>
        Clear
      </button>
    </div>
  )
}

export default FilterBox
