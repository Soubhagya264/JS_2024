import { useEffect, useState } from 'react';
import './App.css';
import Progressbar from './components/Progressbar';
function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!success) {
      const intervalId = setInterval(() => {
        console.log(success, "Success");
        setValue((val) => val + 0.3);
      }, 20);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [value,success]);

  return (
    <div className="App">
      <h1>Hello Coders</h1>
      <span>Progress Bar</span>
      <Progressbar value={value} onComplete={() => setSuccess(true)} />
      <span>{success ? "Complete!" : "Loading..."}</span>
    </div>
  );
}

export default App;