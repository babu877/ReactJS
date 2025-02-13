import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () =>{
    if(counter <= 19){
      setCounter(counter + 1)
    }
  }

  const DeleteValue = () =>{
    if(counter >= 1){
      counter = counter - 1;
      setCounter(counter);
    }
    
 }

  return (
    <>
     <h2>Counter Value: {counter}</h2>
     <button
     onClick={addValue}>Add Value</button>
     <br />
     <button onClick={DeleteValue}>Delete Value</button>
    </>
  )
}

export default App
