import React, { useState } from 'react'
import Person from './components/person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  let onInputChange= (e) =>{
  
    setNewName(e.target.value);
  }
  let onInputSubmit=(e)=>{
    e.preventDefault();
    let someObj ={name:newName};
    //persons.concat(someObj);
    // setPersons(persons.concat(e.target.value));
    // console.log("trying",e.target.value);
     setPersons(persons.concat(someObj))
    //console.log(persons)
     setNewName("");
  
  }

  return (
    <div>
     
      <h2>Phonebook</h2>
      <form onSubmit={onInputSubmit} >
        <div>
          name: <input value={newName} onChange={onInputChange}  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div><h5><ul>{persons.map((n)=><Person name={n.name} key={n.name} />)}</ul></h5></div>
    </div>
  )
}

export default App;
