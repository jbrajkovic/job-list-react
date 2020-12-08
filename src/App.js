import { useContext } from 'react'
import { AppContext } from './contexts/AppContext'
import loadable from '@loadable/component'

import FilterBox from './components/FilterBox'
import Loader from './components/Loader'
import Header from './components/Header'

const JobCard = loadable(() => import('./components/JobCard'))

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
