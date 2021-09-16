import React, { useEffect, useState } from 'react'
import Country from './Country'

const Results = ({ results }) => {
    const [selectedIndex, setIndex] = useState("notSelected")

    const showDetails = (index) => {
        console.log(selectedIndex);
        console.log(index);
        if (selectedIndex == index) {
            setIndex("notSelected")
        } else {
            setIndex(index)
        }
    }

    useEffect(() => { setIndex("notSelected") }, [results])
    return (
        <div>
            {results.length === 1 ?
                <Country country={results[0]} />
                : results.length > 10 ?
                    <p>Too many matches, specify another filter</p>
                    :
                    <ul>
                        {results.map((item, index) =>
                            <li key={item.alpha2Code}>{item.name + " "}
                                <button onClick={() => showDetails(index)}>{selectedIndex == index ? "close" : "show"}</button>
                            </li>
                        )}
                    </ul>
            }
            {selectedIndex !== "notSelected" && <Country country={results[selectedIndex]} />}
        </div>
    )
}

export default Results