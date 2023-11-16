
import { useRef, useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [borderWidth, setBorderWidth] = useState(1);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setBorderWidth(1);

    intervalRef.current = setInterval(() => {
      setBorderWidth((prevWidth) => (prevWidth >= 60 ? 1 : prevWidth + 1)); // Ajuste de la lógica

      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="App">
      <h1 className='cronometro'>Cronómetro en react</h1>
      <span className='cronometro'>Cronómetro: {time}</span>

      <div className="porcentaje" style={{ '--porcentaje': borderWidth, '--color': 'yellow' }}>
        <svg width="150" height="150">
          <circle r="70" cx="50%" cy="50%" pathLength="100"></circle>
        </svg>
      </div>

      <div className="porcentaje" style={{ '--porcentaje': borderWidth, '--color': 'rgb(60, 255, 0)' }}>
        <svg width="180" height="180">
          <circle r="80" cx="50%" cy="50%" pathLength="100"></circle>
        </svg>
      </div>

      <div className="porcentaje" style={{ '--porcentaje': borderWidth, '--color': 'rgb(0, 255, 157)' }}>
        <svg width="200" height="200">
          <circle r="90" cx="50%" cy="50%" pathLength="100"></circle>
        </svg>
      </div>

      <div>
        <button onClick={handleStart}>Empezar</button>
        <button onClick={handleStop}>Parar</button>
      </div>
    </div>
  );
}

export default App;