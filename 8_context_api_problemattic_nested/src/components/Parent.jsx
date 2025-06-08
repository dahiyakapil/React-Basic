import React from 'react'
import { createContext } from 'react'
import ChildA from './ChildA'



const data = createContext();
const data1 = createContext()
const Parent = () => {
    const name = "Kapil"
    const gender = "male"
    return (
        <div>
            <data.Provider value={name}>
                <data1.Provider value={gender}>
                    <ChildA />
                </data1.Provider>
            </data.Provider>
        </div>
    )
}

export default Parent;
export { data, data1 }
