
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './assets/components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffee = useLoaderData();
  const [coffees,setCoffees]=useState(loadedCoffee);

  return (
    <div className='m-20'>

      <h1 className='text-6xl text-center mb-40 text-blue-800'>Hot Hot Cold Coffee:{loadedCoffee.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}>
          </CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
