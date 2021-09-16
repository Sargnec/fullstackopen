import React from 'react'

const Notification = ({ message, type }) => {
    if (message == null) {
        return null

    }
    const color = {
        color: type == "error" ? "red" : "green"
    }

    return (
        <div className='notification' style={color}>
            {message}
        </div>
    )
}
export default Notification