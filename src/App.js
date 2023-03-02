import { useState } from 'react'

import Header from './components/Header'
import Exersices from './components/Exersices'
import AddExersice from './components/AddExersice'


function App() {

  const [exersices, setExersices] = useState ([
    {
        id: 1,
        text: 'Deadlift',
        amount: '5 sets of 10 reps',
        weight: '2 20 lbs',
        complete: true, 
    },
    {
        id: 2,
        text: 'Curls',
        amount: '5 sets of 15 reps',
        weight: '2 15 lbs',
        complete: false, 

    },
    {
        id: 3,
        text: 'Overhead Press',
        amount: '5 sets of 12 reps',
        weight: '2 15 lbs',
        complete: false, 

    },
])
//add exersice 

const addExersice = (exersice) =>{
  console.log(exersice);
}

//delete exersice 
const deleteExersice = (id) => {
  setExersices(exersices.filter((exersice)=>exersice.id !== id))
}

//toggle complete 
const toggleComplete = (id) => (
  setExersices(exersices.map((exersice)=>exersice.id === id ? {...exersice, complete: !exersice.complete } : exersice))
)

  return (
    <div className="container">
        <Header  />
        <AddExersice onAdd={addExersice}/>
        {exersices.length > 0 ? (<Exersices exersices={exersices} onDelete={deleteExersice} onToggle={toggleComplete}/>) : ('No Exersices to Show')}
    </div>
  );
}

export default App;
