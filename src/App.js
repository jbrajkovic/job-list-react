import { useContext } from 'react'
import { AppContext } from './contexts/AppContext'
import loadable from '@loadable/component'

/* import FilterBox from './components/FilterBox'
import JobCard from './components/JobCard'
import Loader from './components/Loader' */
//import Header from './components/Header'

const FilterBox = loadable(() => import('./components/FilterBox'))
const JobCard = loadable(() => import('./components/JobCard'))
const Loader = loadable(() => import('./components/Loader'))
const Header = loadable(() => import('./components/Header'))

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
