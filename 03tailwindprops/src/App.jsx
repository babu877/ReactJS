import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Waseem",
    age: 26
  }

  return (
    <>
      <h1 className='bg-green-400 p-5 rounded-xl'>Tailwind Css </h1>
      
      <Cards channel = "Waseem"/>

    </>
  )
}

export default App
