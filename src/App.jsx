import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Pomodoro from './components/Pomodoro'
import Break from './components/Break'

function App() {

  return (
    <>
        <Header/>
        <Routes>
          <Route path='/' element={<Pomodoro></Pomodoro>}></Route>
          <Route path='/short' element={<Break></Break>}></Route>
        </Routes>
    </>
  )
}

export default App
