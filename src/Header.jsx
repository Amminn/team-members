import React from 'react'
import { Context } from './Context'

function Header() {
  // getting the data from Context
  const {employees, selectedTeam} = React.useContext(Context)

  // get only teams members to count it.
  const teamMembers = employees.filter(item => item.teamName === selectedTeam)

  return (
    <header>
        <h1>Team Members Allocation </h1>
        <h3>{selectedTeam} has {teamMembers.length} Members</h3>
    </header>
  )
}

export default Header