import { useEffect, useState } from "react"
import Mainapp from "./Components/Mainapp"
import axios from "axios"


const App = () => {

  return (

    <div className="w-full h-screen">

      <div className="relative w-full h-full flex justify-center items-center">
        <img 
        className="absolute z-[-1] w-full h-full object-cover object-center" 
        src={"https://images.unsplash.com/photo-1493243350443-9e3048ce7288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3Rvcm18ZW58MHwwfDB8fHww"} 
        alt="" 
        />
        <Mainapp />
      </div>
    </div>
  )
}
export default App