
import { useRef, useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
  const [timeSecund, SetTimeSecund] = useState(0);
  const [timeMinut, SetTimeMinut]  = useState(0);
  const intervalRef = useRef(null);
  const [handledStartStop, SetHandledStartStop] = useState(false);

  const handleToggle = () => {
    if (handledStartStop) {
      handleStop();
    } else {
      handleStart();
    }
    SetHandledStartStop(!handledStartStop);
  };


  const handleStart = useCallback(() => {
    console.log(`handleStart`);

    intervalRef.current = setInterval(() => {
		console.log(`SetTimeSecund ${timeSecund}`);
		SetTimeSecund((prevWidth) => (prevWidth === 60 ? 0 : prevWidth + 1));
	  }, 1000);
	  setInterval(() => {
		console.log(`SetTimeMinut ${timeMinut}`);
		SetTimeMinut((prevWidth2) => (prevWidth2 === 60 ? 0 : prevWidth2 + 1));
	  }, 60000);
  });

  const handleStop = () => {
    console.log(`handleStop`);
    clearInterval(intervalRef.current);
  };
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
<div className="App">
	<h1 className='titulo'>Cronómetro en react</h1>
	
    <div className="container">
      <div className="segundos" style={{ '--porcentaje': `${timeSecund * 1.667}`,  '--color': 'yellow' }}>
        <svg width="150" height="150">
          <circle r="70" cx="50%" cy="50%" pathLength="100"></circle>
          <circle r="70" cx="50%" cy="50%" pathLength="100"></circle>
        </svg>
      </div>

      <div className="minutos"  style={{  '--porcentaje': `${timeMinut * 1.667}%`,  '--color': 'rgb(60, 255, 0)' }}>
        <svg width="180" height="180">
          <circle r="80" cx="50%" cy="50%" pathLength="100"></circle>
          <circle r="80" cx="50%" cy="50%" pathLength="100"></circle>
        </svg>
      </div>
	    <span className='cronometro'>{timeMinut}:{timeSecund}</span>  



      <div className='btn-centar'>
      	<button onClick={handleToggle}>{handledStartStop ? 'Parar' : 'Empezar'}</button>
      </div>	


	</div>

</div>
  );
}

export default App;
