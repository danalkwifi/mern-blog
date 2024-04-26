import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route paht='/' element={<Home />} />
        <Route paht='/about' element={<About />} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </BrowserRouter>
  )
}
