import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [loading, setLoading] = useState(true);
  const [c, setC] = useState(1);

  // const plusFive = (b) => {

  //   let d = a + b;

  //   setA(d);
  //   setC(c + 1);
  // }

  useEffect(() => {
      setTimeout(() => setLoading(false), 3000);
  }, []);

  const Loading = () => {
    return (
      <div>Loading....</div>
    );
  }

  const Ready = () => {
    return (<div style={{border: `${c}px solid black`}}>
    <div className="App" >dsdds</div>
    <button  > плюс 5 </button>
  </div>
    
  );
  }

  return (
    <div>
      {loading && <Loading />}
      {!loading && <Ready />}
    </div>
  );


  
}

export default App;