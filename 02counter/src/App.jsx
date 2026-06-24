import { useState } from 'react'

function App() {
   let [counter, setCounter] = useState(5)

// let counter = 5
const addValue = () => {
  counter += 1
setCounter(counter)
  console.log("value added is: ", counter);
}

const removeValue = () => {
  counter = counter - 1
  setCounter(counter)
  console.log("value removed is: ", counter);
}

  return (
    <>
           <h1>dharm or react</h1>
        <h2>Counter value: {counter}</h2>

<button onClick={addValue}>add value {counter}</button>
<br />
<button
onClick={removeValue}>remove value {counter}</button>

    </>
  )
}

export default App
