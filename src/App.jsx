import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Employee from './Employee'
import GroupTeamsMembers from './GroupTeamsMembers'
import NotFound from './NotFound'
import Footer from './Footer'

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
        <Routes>
          <Route exact path='/' element={<Employee />} />
          <Route exact path='/group-team-members' element={<GroupTeamsMembers />} />
          {/* {in case the user write wrong link so he will be redirected to Not Found Page} */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
