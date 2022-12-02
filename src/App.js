import { useState } from 'react';
import './App.scss';

function App() {
  const [ count, setCount ] = useState(0)
  
  const incrementCount = () => {
    setCount(count+1)
  }
  const decrementCount = () => {
    setCount(count-1)
  }
  return (
      <div className="App">
          <div>
              <h2>Лічильник:</h2>
              <h1>{count}</h1>
              <button className="minus" onClick={decrementCount}>
                  Відняти
              </button>
              <button className="plus" onClick={incrementCount}>
                  Додати
              </button>
          </div>
      </div>
  );
}

export default App;
