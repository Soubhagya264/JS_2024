/*eslint-disable*/
import { useState } from 'react'
import './App.css';
import Notes from './Components/Notes';
function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Link in bio for my Frontend Interview Prep Course",
    },
    {
      id: 2,
      text: "Hello all please welcome to coding world",
    },
  ]);
  const [note, setNote] = useState("");
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          marginTop: "30px",
        }}
      >
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button
          onClick={() => {
            setNotes([...notes, { id: new Date().getTime(), text: note }]);
            setNote("");
          }}
        >
          Add Note
        </button>
      </div>
      <Notes notes={notes} setNotes={setNotes} />
    </>
  )
}

export default App
