import React from "react";
import {Data} from "./Data";
const Context = React.createContext()

function ProvideContext({children}) {

  // getting the data from localhost, and if there is nothing then get it from the Data file as default one
  const [employees, setEmployees] = React.useState((JSON.parse(localStorage.getItem('employees')) || Data))
  const [selectedTeam, setSelectedTeam] = React.useState((JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamA'))
  
  // Changing Employees team based on his/her team.
  // if he does belong to the current team [selectedTeam] then just remove him by returning '' on the team field.
  // if he doesn't then just add him to the current team [selectedTeam] by adding the team name to the teamName field.
  function handleEmployeeCardClick(e) {
    const transformedEmployees = employees.map(item => {
       if(item.id === parseInt(e.currentTarget.id)) {
         if (item.teamName === selectedTeam) {
           return {
             ...item,
             teamName: ''
           }
         } else {
           return {
             ...item,
             teamName: selectedTeam
           }
         }
       }
       else {
         return item
       }
    })
    // after everything is done set the data to Employees state
    setEmployees(transformedEmployees)
  }

  // when there is a change to the option input
  function controller(e) {
    e.preventDefault()
    setSelectedTeam(e.target.value)
  }

  // handle the clicks on the Group team members
  function onClickController(e) {
    setSelectedTeam(e.target.id)
  }

  // whenever there is a change to the employees state save it in LocalStorage
  React.useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees))
  }, [employees])

  // whenever there is a change to selectedTeam state save it in LocalStorage
  React.useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam])

  return (
      <Context.Provider value={{employees, handleEmployeeCardClick, selectedTeam, controller, onClickController}}>
        {children}
      </Context.Provider>
    )
}

export {ProvideContext, Context}