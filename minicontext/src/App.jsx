import './App.css'
import Login from './compnents/Login'
import Profile from './compnents/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  console.log("Hello")
  return (
    <UserContextProvider>   
      <h1>Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
