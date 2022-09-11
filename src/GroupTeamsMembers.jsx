import React from 'react'
import { Context } from './Context'
import {nanoid} from 'nanoid'

function GroupTeamsMembers() {
  // getting data from Context
  const {employees, selectedTeam, onClickController} = React.useContext(Context)

  // order all the data according to the teams
  let treatedData = employees.map(item => {
    if (item.teamName) {
      return item.teamName
    }
  })
  
  // remove the employees that don't belong to anyone if there is any
  let treatedAgainToRemoveUndefined = treatedData.filter(item => {
    return item !== undefined;
  })
  
  // get the teams names unique and without repetition 
  const Teams = [...new Set(treatedAgainToRemoveUndefined)]
  
  // split the members of each team in array so we can loop on later
  const membersOfEachTeam = Teams.map(team => {
    return employees.filter(employee => {
      return (employee.teamName === team )
    })
  })

  // rendering
  const renderGroups = membersOfEachTeam.map((item, bigIndex) => {
    return (
      <div key={nanoid()} className='team' id={Teams[bigIndex]} onClick={onClickController}>
        <h2 id={Teams[bigIndex]} onClick={onClickController} >{Teams[bigIndex]}</h2>
        <div className={`hidden-part ${Teams[bigIndex] === selectedTeam ? 'selected': ''}`} >
          {item.map(members => {
            return (
              <h3 key={nanoid()}>{members.fullName}: <span>{members.designation}</span></h3>
            )
          })}
        </div>
      </div>
    )
  })

  return (
    <main className='main'>
      <div className="container">
        {renderGroups}
      </div>
    </main>
  )
}

export default GroupTeamsMembers