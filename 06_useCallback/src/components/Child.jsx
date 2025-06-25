// import React from 'react'

// const Child = ({ handleClick }) => {
//     console.log("Child Component re renders")
//     return (
//         <>
//             <button onClick={handleClick}>Click Child button</button>
//         </>
//     )
// }

// export default React.memo(Child)

import React from 'react'

const Child = ({handleClick}) => {
    console.log("Child Component rendered")
  return (
    <div>
      <button onClick={handleClick}>Click Child Button</button>
    </div>
  )
}

export default React.memo(Child)
