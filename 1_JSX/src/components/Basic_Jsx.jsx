import React from 'react'

const Basic_Jsx = () => {

    // This is JSX
    const element = <h1 style={{color: "red"}}>Hi From JSX</h1>

    // Browser does not understand the JSX, so browser will take the help of babel
    // Babel will transpiled JSX into React.createElement()

    const element2 = React.createElement(
        "h1",
        {className: "greet"},
        "Hey From React.createElement()"
    )

  return (
    <>
        <p>{element}</p>
        <p>{element2}</p>
    </>
  )
}

export default Basic_Jsx
