import React from "react"
import Home from "./Components/home"
import '../src/App.css'

function App() {

  return (
    <>
      <div className=" relative bg-app-bg w-full h-auto">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <Home />
      </div>
      
    </>
  )
}

export default App
