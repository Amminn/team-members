import React from "react"
import {Context} from './Context'

function Employee() {

  // getting data from Context
  const {employees, handleEmployeeCardClick, selectedTeam, controller} = React.useContext(Context)

  // rendering 
  const employeesRender = employees.map(item => (
    <div onClick={handleEmployeeCardClick} key={item.id} id={item.id} className={`card ${item.teamName === selectedTeam ? 'selected' : ''}`}>
      <div className="profile-pic">
        <img src={item.link} alt={item.fullName} />
      </div>
      <div className="description">
        <h2>FullName: {item.fullName}</h2>
        <p><strong>designation:</strong> {item.designation}</p>
      </div>
    </div>
  ))

  return (
    <main className='main'>
      <div className="container">
        <div className="form-selection">
          <select name="teams" id="teams" value={selectedTeam} onChange={controller}>
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
          </select>
        </div>
        <div className="grid-container">
          {employeesRender}
        </div>
      </div>
    </main>
  )
}

export default Employee