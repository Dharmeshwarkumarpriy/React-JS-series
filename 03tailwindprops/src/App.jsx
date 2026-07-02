import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "dharm",
    age: 22,
    city: "delhi"
  }

  let newArr=[3,4,6,7]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind test</h1>
      <Card username="dharm" description="my name is dharam. i am mca student in aktu university." btnText="click me" />
      <Card username="priy" description="my new learning react course very cool and amezing. i realized realy wow..." btnText="visit me" />
      
    </>
  )
}

export default App
