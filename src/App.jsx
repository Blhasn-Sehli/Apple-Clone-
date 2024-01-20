import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='flex h-screen items-center justify-center'>
        <h1 className='text-4xl font-bold font-mono text-center text-gray-700'>
          Hello  World By <span className='text-5xl' >MpK</span> Soon ....
        </h1>
      </div>
    </>
  )
}

export default App
