import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
function addition(){
  setCount(count+1)
}
  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more 
      </p>

      <button onClick={()=>addition()}>add</button>
      {count}
    </>
  )
}

export default App
