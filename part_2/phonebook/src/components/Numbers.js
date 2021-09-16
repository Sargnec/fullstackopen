import React from 'react'

const Numbers = ({ filteredText, persons, deleter }) => {
    return (
        <ul>
            {filteredText ?
                persons.filter((p, i) => p.name.toLowerCase().includes(filteredText.toLowerCase())).map((p, i) =>
                    <li key={i} >
                        {p.name + " " + p.number}
                        <button onClick={() => deleter(p.id)}>delete</button>
                    </li>
                )
                :
                persons.map((p, i) =>
                    <li key={i} >
                        {p.name + " " + p.number}
                        <button onClick={() => deleter(p.id)}>delete</button>
                    </li>
                )
            }
        </ul>
    )
}
export default Numbers