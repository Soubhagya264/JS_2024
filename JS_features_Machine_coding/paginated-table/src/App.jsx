import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Datatable } from './Components/Datatable'
import { Add } from './Components/Add'
import { DataProvider } from './Components/context/DataContext'
window.addEventListener('beforeunload', function (event) {
  // Check if the event's returnValue is defined
  if (event.returnValue) {
    // Clear localStorage
    localStorage.clear();
  }
});
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DataProvider>
        <Add />
        <Datatable />
      </DataProvider>
    </>
  )
}

export default App
