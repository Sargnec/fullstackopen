import React from 'react';

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}
const Content = (props) => {
    return (
        <div>
            {
                props.parts.map(item => {
                    return (
                        <Part
                            part={item.name}
                            exercises={item.exercises}
                        />
                    )
                })
            }
        </div>
    )
}

export default Content