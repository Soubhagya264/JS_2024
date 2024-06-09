

import './App.css'
import Input from './Input'
import ReduxDemo from './ReduxDemo'
function App() {
  return (
    <>
      <div className="App">
        <Input
          renderTextBelow={
            (value) => <>
              The value is {value}
            </>
          }
        />
      </div>
      <ReduxDemo/>

    </>
  )
}

export default App
