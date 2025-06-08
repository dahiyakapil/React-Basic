import React from 'react'
import Child from './Child'

const Parent = () => {
    function getData(data){
        console.log(data)  // Logs the value entered in the Child's input
    }
  return (
    <div>
      <Child getData={getData}/>
    </div>
  )
}

export default Parent
