import React from 'react'

const Child = ({ memoizedValue }) => {
  console.log("Child component re-renders")
  return (
    <div>

      <p>Child Component: {memoizedValue}</p>
    </div>
  )
}

export default React.memo(Child)
