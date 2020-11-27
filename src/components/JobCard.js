import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import Tag from './Tag'
import Badge from './Badge'

const JobCard = ({ job }) => {
  const { getTags } = useContext(AppContext)
  const tags = getTags(job)

  return (
    <div className={`card job-card ${job.featured ? 'border-left' : ''}`}>
      <img src={`${process.env.PUBLIC_URL}/${job.logo}`} alt='job-logo' />
      <div className='job-info'>
        <div className='job-info-top'>
          <p className='company'>{job.company}</p>
          <div className='badges'>
            {job.new && <Badge text={'New!'} primary={true} />}
            {job.featured && <Badge text={'Featured'} />}
          </div>
        </div>

        <div className='job-info-position'>
          <p>
            <strong> {job.position}</strong>
          </p>
        </div>
        <div className='job-info-bottom'>
          <p>{job.postedAt}</p>
          <span className='middle-dot'>&#183;</span>
          <p>{job.contract}</p>
          <span className='middle-dot'>&#183;</span>
          <p>{job.location}</p>
        </div>
      </div>

      <div className='tags'>
        {tags && tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>
    </div>
  )
}

export default JobCard
