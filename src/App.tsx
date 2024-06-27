import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SobreNos from './paginas/sobre_nos/SobreNos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SobreNos/>
    </>
  )
}

export default App
