import React from 'react';

const Total = (props) => {
    let total = 0;
    props.parts.map(
        item => {
            total += item.exercises
        }
    )
    return (
        <div>
            <p>Number of exercises {total} </p>
        </div>
    )
}

export default Total