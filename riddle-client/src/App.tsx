import { Route, Routes } from 'react-router'
import LandingPage from './pages/LandingPage'
import Login from './components/authPages/Login'
import Signup from './components/authPages/Signup'
import StartGame from './components/StartGame'
import Home from './pages/Home'
import Index from './components/Index'
import Game from './pages/Game'
import EndGame from './pages/EndGame'
import './App.css'
import ChooseAuth from './components/authPages/ChooseAuth'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}>
        <Route path='' element={<ChooseAuth />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>
      <Route path='start-game-guest' element={<StartGame isGuest={true} />} />
      <Route path='index' element={<Index />}>
        <Route path='' element={<Home />} />
        <Route path='game' element={<Game />} />
        <Route path='end-game' element={<EndGame />} />
      </Route>
    </Routes>
  )
}

export default App