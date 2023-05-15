import React, { useState } from 'react'

const Showcase = () => {

    const [name, setName] = useState('Brad')

    const handleClick = () => {
        setName(() => { name === "Brad" ? "Sam" : "Brad"})
    }

    return (
        <h1 onClick={handleClick} styles={{ cursor: "pointer" }}>{ name }</h1>
    )
}

export default Showcase