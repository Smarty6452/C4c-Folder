import React, { useState } from 'react'

const RulesHook = () => {
    const [myName, setmyName] = useState('Rohit Bharti')
  return (
    <div>
    <h1>{myName}</h1>
    
    </div>
  )
}

export default RulesHook