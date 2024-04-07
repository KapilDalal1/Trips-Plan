import { useState } from 'react';
import Tours from './components/Tours'
import data from './data';

function App() {
    const [tours , setTours] = useState(data);

    function removeTour(id){
      const newTours = tours.filter(tour => tour.id !==id);
      setTours(newTours);
    }

    if(tours.length === 0){
      return (
        <div className='flex items-center flex-col h-[100vh] justify-center '>
          <h2 className='font-bold text-black'>No trips available</h2>
          <button className= 'mt-[18px] px-[80px] py-[10px] hover:border-white border-solid border-[1px]' onClick={()=> setTours(data)}>
            Refresh
          </button>
        </div>
      )
    }

  return (

    <Tours tours={tours} removeTour={removeTour} />
  );
}

export default App;