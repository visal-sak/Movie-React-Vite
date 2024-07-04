// Components
import Navbar from 'components/Navbar'
import Router from '@/Router'
import Footer from './components/Footer'

function App() {
  return (
    <div className='relative'>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <Router />

      <Footer/>
    </div>
  )
}

export default App
