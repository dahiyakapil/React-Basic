// import React from 'react'

// const Child = (props) => {
//   return (
//     <div>
//       <h1>hello {props.name}</h1>
//     </div>
//   )
// }

// export default Child

import React from 'react'

const Child = ({ name="Defalut Name", age }) => {
    return (
        <div>
            <h1>hello {name}</h1>
            <p>your age is {age}</p>
        </div>
    )
}

export default Child
