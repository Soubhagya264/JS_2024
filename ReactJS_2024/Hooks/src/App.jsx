import { useEffect,  useRef } from 'react'
import './App.css'

function App() {
  const ref = useRef(0);
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Component Rendered");
  })

  const handleClick = () => {
    ref.current++;
    console.log(ref.current);
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow"
  }



  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <input ref={inputRef} />
    </>
  )
}

export default App
