import React, { useState } from 'react'
import './App.scss'
import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
// import HelloD3Data from './components/HelloD3Data/HelloD3Data'
// import HelloD3DataCloned from './components/HelloD3Data/HelloD3DataCloned'
import HelloD3DataClass from './components/HelloD3DataClass/HelloD3DataClass'
// import Rectangle from './components/Rectangle/Rectangle'

function App() {
  const [data, setData] = useState<string[]>(['one', 'two', 'three', 'four'])
  return (
    <div className="App">
      {/*
        <HelloD3Data data={data} />
        <HelloD3DataCloned data={data} />
        <HelloD3DataClass data={data} />
        <Rectangle />
      */}

      <HelloD3DataClass data={data} />
      <Button onClick={() => setData(['one', 'two', 'three', 'four', 'five'])}>Click</Button>

      <NavLink to="/Rectangle" key="Rectangle">
        Navigate To Rectangle
      </NavLink>
    </div>
  )
}

export default App
