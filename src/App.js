import './App.css'
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Layout from "./pages/components/Layout"
import Project from "./pages/Project"
import DashBoad from "./pages/DashBoad"
import Epic from "./pages/Epic"

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<Layout />} >
          <Route path="project" element={<Project />} />
          <Route path="project/:id/dashboard" element={<DashBoad />} />
          <Route path="project/:id/epic" element={<Epic />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
