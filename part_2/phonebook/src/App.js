import React, { useEffect, useState } from 'react'
import FilterInput from './components/FilterInput'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'
import Notification from './components/Notification'
import { getAll, create, deletePerson, update } from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [filteredText, setFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [type, setType] = useState(null)

  /* Get all person data from server */
  useEffect(() => {
    getAll()
      .then(persons => setPersons(persons))
      .catch(error => {
        console.log(error);
      })
  }, [])

  const addNewName = (e) => {
    e.preventDefault();
    let index = persons.findIndex(item => item.name === newName);
    const newNameObj = {
      name: newName,
      number: number
    };
    /* Create if this name is not exist else update this person number */
    if (index === -1) {
      create(newNameObj)
        .then(response => {
          setPersons(persons.concat(response));
          /* sets notification message */
          setNotification(
            `Added ${newName}`
          )
          setType("info")
          /* removes notification message */
          setTimeout(() => {
            setNotification(null);
            setType(null)
          }, 5000)
        })
        .catch(error => {
          console.log(error);
        })
      setNewName('')
    } else if (window.confirm(`${newName} already added to the phonebook,replace the old number with a new one?`)) {
      update(persons[index].id, newNameObj)
        .then(response => {
          console.log({ response });
          setPersons(persons.map(p => p.name !== newName ? p : response.data))
          /* sets notification message */
          setNotification(
            `Updated ${newName}'s number`
          )
          setType("info")
          /* removes notification message */
          setTimeout(() => {
            setNotification(null);
            setType(null)
          }, 5000)
        })
        .catch(error => {
          console.log(error);
        })
      setNewName('')
    }
  }

  const deleter = (id) => {
    let index = persons.findIndex(item => item.id === id)
    console.log(id);
    if (index !== -1) {
      if (window.confirm(`Delete ${persons[index].name}`)) {
        deletePerson(id)
          .then(response => setPersons(persons.filter(item => item.id !== id)))
          .catch(error => {
            /* sets notification message */
            setNotification(
              `${persons[index].name} has already been removed from the server`
            )
            setType("error")
            /* removes notification message */
            setTimeout(() => {
              setNotification(null);
              setType(null);
            }, 5000)
            setPersons(persons.filter(item => item.id !== id))
          })
      } else {
        console.log("cancel");
      }
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} type={type} />
      <FilterInput setFilter={(filteredText) => setFilter(filteredText)} />
      <h4>add a new</h4>
      <PersonForm setNewName={setNewName} setNumber={setNumber} addNewName={addNewName} />
      <h2>Numbers</h2>
      <Numbers filteredText={filteredText} persons={persons} deleter={(id) => deleter(id)} />
    </div>
  )
}

export default App