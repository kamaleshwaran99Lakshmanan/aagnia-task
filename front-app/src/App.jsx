import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Courses from './Components/Courses'
import Schedule from './Components/Schedule'
import Resources from './Components/Resources'
import Messages from './Components/Messages'
import Layout from './Layout/Layout'

const App = () => {
  return (
    <div className="outer w-100 h-100 rounded">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Dashboard />} /> {/* Default route */}
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Schedule' element={<Schedule />} />
            <Route path='/Messages' element={<Messages />} />
            <Route path='/Resources' element={<Resources />} />
            <Route path='/Courses' element={<Courses />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
