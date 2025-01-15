import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import AppTop from './components/AppTop'

function App() {
  const [searchText, setSearchText] = useState("")

  function handleInputChange(e) {
    setSearchText(e.target.value)
  }

  return (
    <div className='app-view'>
      <AppTop onInputChange={handleInputChange} searchText={searchText}/>
      <Main />
      
    </div>
  )
}

export default App
