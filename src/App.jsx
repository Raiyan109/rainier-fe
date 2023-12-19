import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import PatientProfile from './components/PatientProfile'
import Appointments from './components/Appointments'
import MedicalHistory from './components/MedicalHistory'
import Settings from './components/Settings'

function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patient" element={<PatientProfile />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/medicalHistory" element={<MedicalHistory />} />
            <Route path="/settings" element={<Settings />} />

          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  )
}

export default App
