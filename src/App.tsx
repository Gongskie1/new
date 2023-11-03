
import { useState } from 'react'
import './App.css'
// import YoutubeForm from './components/YoutubeForm'
import BasicForm from './components/BasicForm'
import AdvanceForm from './components/AdvanceForm'

function App() {
  const [view,setView] = useState('basic')

  return (
    <>
     <div className='flex'>
      <nav>
        <h3 onClick={() => setView('basic')}style={{color:view ==='basic' ? 'green' : ''}}>Basic</h3>
        <h3 onClick={() => setView('advance')}style={{color:view ==='advance' ? 'green' : ''}}>Advance</h3>
      </nav>
      {view === "basic" ? <BasicForm/> : <AdvanceForm />}
     </div>
    </>
  )
}

export default App
