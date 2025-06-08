// import React, { useState } from 'react'



// const JSX_Rules = () => {
//     const [firstName, setFirstname] = useState("");


//     function handleChange(e) {
//         setFirstname(e.target.value)
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         alert(`${firstName} was submitted`)
//     }


//     return (
//         <div>
//             <h1 className='greet'>Use camelCase for Attributes and Event Handlers</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="firstName">firstName</label>
//                 <input
//                     type="text"
//                     placeholder='Enter your firstName'
//                     value={firstName}
//                     onChange={handleChange}
//                 />

//                 <button type='submit'>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default JSX_Rules


// 4th rule  JSX Expressions Must Be Inside {}

// import React from 'react'

// const JSX_Rules = () => {

//     // 1. variables
//     const name = "kapil";

//     //2. function
//     function sum(a, b) {
//         return a + b;
//     }

//     //3. ternary operation
//     const x = 13;


//     return (
//         <div>

//             <h1>{`hello ${name}`}</h1>
//             <h2>{sum(1, 2)}</h2>

//             <p>{(x) >= 15 ? "Greater": "Smaller"}</p>
//         </div>
//     )
// }

// export default JSX_Rules


//  5th rule Self-Closing Tags Must End with /

// import React, { useState } from 'react'



// const JSX_Rules = () => {
//     const [firstName, setFirstname] = useState("");


//     function handleChange(e) {
//         setFirstname(e.target.value)
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         alert(`${firstName} was submitted`)
//     }


//     return (
//         <div>
//             <h1 className='greet'>Use camelCase for Attributes and Event Handlers</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="firstName">firstName</label>
//                 <input
//                     type="text"
//                     placeholder='Enter your firstName'
//                     value={firstName}
//                     onChange={handleChange}
//                 />

//                 <button type='submit'>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default JSX_Rules



// 6th ->  Use style as an Object

// import React from 'react'

// const JSX_Rules = () => {
//   return (
//     <div>
//       <h1 style={{color:"red"}}>this is style object in JSX</h1>
//     </div>
//   )
// }

// export default JSX_Rules


// 7th -> Keys are Required for Lists

import React from 'react';

const JSX_Rules = () => {
  const arr = [
    { id: 1, name: "Kapil" },
    { id: 2, name: "Kapil 2" },
    { id: 3, name: "Kapil 3" }
  ];

  return (
    <div>
      <ul>
        {arr.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default JSX_Rules;
