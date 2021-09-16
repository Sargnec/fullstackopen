import React from 'react'

const PersonForm = ({ addNewName, setNewName, setNumber }) => {
    return (
        <form onSubmit={addNewName}>
            <div>
                Name: <input onChange={(e) => setNewName(e.target.value)} />
            </div>
            <div>
                Number: <input onChange={(e) => setNumber(e.target.value)} />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default PersonForm