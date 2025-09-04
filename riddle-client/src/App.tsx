import { Route, Routes } from 'react-router'
import LandingPage from './components/authPages/LandingPage'
import Login from './components/authPages/Login'
import Signup from './components/authPages/Signup'
import Home from './pages/Home'
import Index from './pages/Index'
import Game from './pages/Game'
import './App.css'
import ChooseAuth from './components/authPages/ChooseAuth'
import ChooseDifficulty from './pages/ChooseDifficulty'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}>
        <Route path='' element={<ChooseAuth />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>
      <Route path='start-game-guest' element={<ChooseDifficulty />} />
      <Route path='index' element={<Index />}>
        <Route path='' element={<Home />} />
        <Route path='choose-difficulty' element={<ChooseDifficulty />} />
        <Route path='game/:difficulty' element={<Game />} />
      </Route>
    </Routes>
  )
}

export default App