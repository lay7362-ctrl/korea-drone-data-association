import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Notice from './pages/Notice'
import Join from './pages/Join'
import DroneEducation from './pages/DroneEducation'
import TalentPool from './pages/TalentPool'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="notice" element={<Notice />} />
          <Route path="join" element={<Join />} />
          <Route path="drone-education" element={<DroneEducation />} />
          <Route path="talent-pool" element={<TalentPool />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
