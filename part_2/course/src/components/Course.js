import React from 'react';

const Header = ({ course }) => {
    return (
        <h2>{course.name}</h2>
    )
}

const Total = ({ course }) => {
    let { parts } = course
    const total = parts.reduce((accumulator, current) => {
        return accumulator + current.exercises
    }, 0)
    return (
        <p style={{ fontWeight: "bold" }}>Total of {total} exercises</p>
    )
}

const Part = ({ part }) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map((item, index) => {
                return <Part key={item.id} part={item} />
            })}
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <h1>Web development curriculum</h1>
            {course.map(item => {
                return <div key={item.id}>
                    <Header course={item} />
                    <Content course={item} />
                    <Total course={item} />
                </div>
            })}
        </div>
    )
}

export default Course