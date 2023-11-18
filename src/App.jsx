import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Username from './Components/Username'
import { Routes, Route } from "react-router-dom";
import Account from './Components/Account'
function App() {
  const [user, setUser] = useState("")

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Username setUser={setUser}/>}></Route>
        <Route exact path='/account' element={<Account user={user}/>} ></Route>
      </Routes>
      
    </div>
  )
}

export default App
