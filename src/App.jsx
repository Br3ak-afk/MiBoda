import { useState } from 'react'
import './App.css'

import Envelope from './contents/sobre.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Envelope></Envelope>
    </>
  )
}

export default App
