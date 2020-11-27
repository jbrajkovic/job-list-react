import { useContext } from 'react'
import { AppContext } from './contexts/AppContext'

import FilterBox from './components/FilterBox'
import JobCard from './components/JobCard'
import Header from './components/Header'
import Loader from './components/Loader'

function App() {
  const { filteredJobs, loading, activeTags } = useContext(AppContext)

  const jobCards = filteredJobs.map((job) => <JobCard key={job.id} job={job} />)

  return (
    <div className='App'>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <div className='container'>
          {activeTags.length ? <FilterBox /> : ''}

          {jobCards}
        </div>
      )}
    </div>
  )
}

export default App
