import React, { useState } from 'react'
import Person from './components/person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' ,phn:'988878'}
  ]) 

  const [ newName, setNewName ] = useState('')

  // const[numbers, setNumbers] = useState([
  //   {phn:'988878'}
  // ])

  const[newNumber, setNewNumbers] = useState('');
  
  let onInputChange = (e) =>{
    setNewName(e.target.value);
    persons.map((n)=>{
      if((e.target.value) === (n.name)){alert(`${e.target.value} is already added to phonebook`)}
    })
  }

  let onInputNumberChange= (e) =>{
    setNewNumbers(e.target.value);
    persons.map((n)=>{
      if((e.target.value) === (n.phn)){alert(`${e.target.value} is already added to phonebook`)}
    })
  }

  let onInputSubmit=(e)=>{
    e.preventDefault();
    let someObj ={
      name:newName,
      phn:newNumber
    };
    setPersons(persons.concat(someObj))
    setNewName("");
    setNewNumbers("")
  }

  return (
    <div>
     
      <h2>Phonebook</h2>
      <form onSubmit={onInputSubmit} >
        <div>
          name: <input onChange={onInputChange} value={newName}  />
        </div>
        <div>number: <input onChange={onInputNumberChange} value={newNumber}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div><h5><ul>{persons.map((n)=><Person name={n.name} key={n.name} phn={n.phn}/>)}</ul></h5></div>
    </div>
  )
}

export default App;
