import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import RegistrationForm from './RegistrationForm'
import Success from './Success'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
