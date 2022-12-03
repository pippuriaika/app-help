import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-96-5965',
      id: 0
    },
    { name: 'Constantine Flips',
      number: '056-89-4751',
      id: 1
    },
    { name: 'Etoile Mancine',
      number: '039-587-1258',
      id: 2
    },
    { name: 'Pleebus MacIntosh',
      number: '056-894-3278',
      id: 3
    },
    { name: 'Dorf Adorf',
      number: '075-489-2687',
      id: 4
    },
    
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const newId = persons.length
  const copy= [...persons]
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  
  const addName = (event) => {
  event.preventDefault()
  const nameObj = {
    name: newName,
    number: newNumber,
    id: newId
  };
  copy.forEach((item, index) => {
    if (item.name === newName) {
      event.preventDefault();
      alert(newName + ' is already in the phonebook');
      setNewName("");
      return false
    }
    if (newName === "") {
      event.preventDefault();
      window.history.back();
      alert('No name is written');
      return false
    }
   else {  
    setPersons(persons.concat(nameObj));
    setNewName("");
    setNewNumber("")
  }})}

  
  const [input, setInput] = useState("")
  const [filterList, setFilterList] = useState([...copy])

  const handleSearch = (event) => {
    return setInput(event.target.value) 
  }

  const filterChange = () => {
    filterList.filter(filterList.toLowerCase().includes(input.toLowerCase));
    setFilterList(filterChange)
  }

  function SearchList () {
    if (input === "") {
      return copy.map( c => <div key={c.id}><ul><li>{c.name} {c.number}</li></ul></div>)
  } else if (filterList != copy) {
    return filterList.map( f => <div key={f.id}><ul><li>{f.name} {f.number}</li></ul></div>)
  }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <input id="search-box" placeholder="Search" onChange={handleSearch} />
      <SearchList />
      </div>
  )
}

export default App