import React, { useState, useCallback } from 'react'
import Display from './Display'

const UseCallbackComponent = () => {
  const [counter, setCounter] = useState(5)
  const [showData, setShowData] = useState(false)

  const GetCounterData = useCallback(
    () => {
      return [counter * 2, counter * 3, counter * 4]
    }, 
    [counter]
  )

  const GetRandomData = 
    () => {
      const random = Math.floor(Math.random() * 100) + 1
      return [random * 2, random * 3, random * 4]
    }

  return (
    <div className="functional-app">
      <h1>UseCallbackComponent</h1>

      <h2> KELOMPOK 05</h2>

      <div>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>
          Up
        </button>
      </div>
      <div>
        <button onClick={() => setCounter(counter - 1)}>
          Down
        </button>
      </div>

      <div style={{ marginBottom: 24 }}>
        <p>Refresh</p>
        <button onClick={() => setShowData(!showData)}>
          Refresh
        </button>
      </div>

      <Display GetData={GetCounterData} />
    </div>
  )
}

export default UseCallbackComponent
