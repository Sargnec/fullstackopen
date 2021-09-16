import React from 'react'

const SearchInput = ({setFilter}) => {
    return (
        <div>
            Find countries <input onChange={(e) => setFilter(e.target.value)}/>
        </div>
    )
}

export default SearchInput