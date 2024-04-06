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
        <div>
          <h2>No trips available</h2>
          <button onClick={()=> setTours(data)}>
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