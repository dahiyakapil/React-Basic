
import React, { Suspense } from 'react'
import './App.css'
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"))

function App() {


  return (
    <>
      <h1>This will load fast</h1>
      <Suspense fallback={<div>Loading....</div>}> 
        <Home />
        <About />
        <Contact />
      </Suspense>
    </>
  )
}

export default App
