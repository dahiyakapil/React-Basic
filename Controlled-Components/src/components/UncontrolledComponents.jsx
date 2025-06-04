import React, { useRef } from 'react'

const UncontrolledComponents = () => {
    const refInput = useRef("");

    function handleSubmit(e) {
        e.preventDefault();
        alert(`${refInput.current.value} submitted `)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    placeholder='Enter your first name'
                    ref={refInput}
                />
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default UncontrolledComponents
