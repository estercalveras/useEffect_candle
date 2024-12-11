import { useEffect, useState } from 'react';
import './style.css';

const Candle = () => {

  const [candle, setCandle] = useState(90);


  useEffect(() => {
    const interval = setInterval(() => {
      setCandle((curr) => {
        if (curr <= 10) return 90
        return curr - 5
      })
    }, 2000)

    return () => clearInterval(interval)
  })

  const changeHeight = () => {
    setCandle((curr) => curr - 1)
  }

  return (
    <div className="exercise">
      <div className="candleContainer" style={{ height: `${candle}%` }} onClick={changeHeight}>
        <div className="candle">
          <div className="flame">
            <div className="shadows" />
            <div className="top" />
            <div className="middle" />
            <div className="bottom" />
          </div>
          <div className="wick" />
          <div className="wax" />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <Candle />;
};

export default App;
