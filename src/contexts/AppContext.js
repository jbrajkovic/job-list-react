import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const url = './data.json'
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTags, setActiveTags] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])

  const getTags = ({ role, level, languages, tools }) => [
    role,
    level,
    ...languages,
    ...tools,
  ]

  const isActive = (tag) => activeTags.includes(tag)

  const removeAllActive = () => setActiveTags([])

  const addActiveTag = (tag) => setActiveTags([...activeTags, tag])

  const removeActiveTag = (tag) =>
    setActiveTags(activeTags.filter((activeTag) => activeTag !== tag))

  const toggleActive = (tag) =>
    isActive(tag) ? removeActiveTag(tag) : addActiveTag(tag)

  const fetcJobs = async () => {
    try {
      const jobsData = await fetch(url)
      const data = await jobsData.json()

      setJobs(data)
      setFilteredJobs(data)
      setLoading(false)
    } catch (e) {
      console.log(e.message, 'Catched Error')
    }
  }

  useEffect(() => {
    fetcJobs()
  }, [])

  useEffect(() => {
    if (!activeTags.length) setFilteredJobs(jobs)

    const updatedJobs = jobs.filter((job) => {
      const tagList = getTags(job)
      return activeTags.every((tag) => tagList.includes(tag))
    })

    setFilteredJobs(updatedJobs)
  }, [activeTags, jobs])

  return (
    <AppContext.Provider
      value={{
        loading,
        getTags,
        isActive,
        activeTags,
        addActiveTag,
        toggleActive,
        filteredJobs,
        removeActiveTag,
        removeAllActive,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
