import { useEffect, useState } from 'react'
import './App.css'
import { useCallback } from 'react';

function App() {

  const [selectMode, setSelectMode] = useState("");
  const [selectOperations, setSelectOperations] = useState("");
  const [arrayVal, setArrayVal] = useState([]);

  const onPush = useCallback(() => {
    if (selectMode === "") return;
    setSelectOperations("push")
    const tempArr = [...arrayVal];
    tempArr.push(tempArr.length + 1);
    setArrayVal(tempArr);
  }, [selectOperations, selectMode, arrayVal])

  const onPop = useCallback(() => {
    if (selectMode === "") return;
    setSelectOperations("pop")
    const tempArr=[...arrayVal];
    tempArr.splice(tempArr.length-1,1)
    setArrayVal(tempArr);


  }, [selectOperations, selectMode, arrayVal])
  const onEnqueue = useCallback(() => {
    if (selectMode === "") return;
    setSelectOperations("enqueue")
    const tempArr = [...arrayVal];
    tempArr.push(tempArr.length + 1);
    setArrayVal(tempArr);
  }, [selectOperations, selectMode, arrayVal])
  
  const onDequeue = useCallback(() => {
    if (selectMode === "") return;
    setSelectOperations("dequeue")
    const tempArr=[...arrayVal];
    tempArr.splice(0,1)
    setArrayVal(tempArr);
  }, [selectOperations, selectMode, arrayVal])

  useEffect(() => {

  }, [selectMode])
  return (
    <>
      <div className="wrapper-stackqueue  font-serif tracking-wide  ">
        <div className="wrapper-container  border-4 border-indigo-500/100 rounded-md p-8 shadow-indigo-500/50 ">
          <div className="left-container">
            <h2 className="heading-stackqueue mt-0 mb-5 ">SELECT MODE</h2>
            <div className="mode-container  mx-5 px-5 space-x-3 mb-5">
              <div onClick={() => { setSelectMode("stack") }} className={selectMode === "queue" ? "mode px-2 py-3 rounded-md cursor-pointer disabledbutton bg-rose-500 shadow-lg shadow-rose-500/50 transition ease-in-out delay-150  hover:scale-75 hover:bg-rose-200 hover:text-black duration-300 " :
                "mode px-2 py-3 rounded-md cursor-pointer  bg-rose-500 shadow-lg shadow-rose-500/50 transition ease-in-out delay-150  hover:scale-75 hover:bg-rose-200 hover:text-black duration-300"}>STACK</div>
              <div className="mode px-3 py-4 ">OR</div>
              <div onClick={() => { setSelectMode("queue") }} className={selectMode === "stack" ? "mode px-2 py-3 rounded-md cursor-pointer disabledbutton bg-rose-500 shadow-lg shadow-rose-500/50 transition ease-in-out delay-150  hover:scale-75 hover:bg-rose-200 hover:text-black duration-300 " :
                "mode px-2 py-3 rounded-md cursor-pointer  bg-rose-500 shadow-lg shadow-rose-500/50 transition ease-in-out delay-150  hover:scale-75 hover:bg-rose-200 hover:text-black duration-300"}>QUEUE</div>
            </div>

            <h2 className="heading-stackqueue mt-0 mb-5">SELECT OPERATIONS</h2>
            {
              selectMode === "stack" ? <>
                <div className="pushpop-container space-x-3 mb-5">
                  <div onClick={() => onPush()} className="mode px-2 py-3 rounded-md cursor-pointer  bg-rose-500 shadow-lg shadow-rose-500/50 transition ease-in-out delay-150  hover:scale-75 hover:bg-rose-200 hover:text-black duration-300 ">PUSH</div>
                  <div className="mode px-2 py-3">OR</div>
                  <div onClick={() => onPop()} className="mode px-2 py-3 rounded-md cursor-pointer  bg-rose-500 shadow-lg shadow-rose-500/50 transition ease-in-out delay-150  hover:scale-75 hover:bg-rose-200 hover:text-black duration-300 ">POP</div>
                </div>
              </> : selectMode === "queue" ?
                <>
                  <div className="pushpop-container space-x-3 mb-5">
                    <div onClick={() => onEnqueue()} className="mode px-2 py-3  rounded-md cursor-pointer  bg-rose-500 shadow-lg shadow-rose-500/50 transition ease-in-out delay-150  hover:scale-75 hover:bg-rose-200 hover:text-black duration-300 ">ENQUEUE</div>
                    <div className="mode px-2 py-3">OR</div>
                    <div onClick={() => onDequeue()} className="mode px-2 py-3 rounded-md cursor-pointer  bg-rose-500 shadow-lg shadow-rose-500/50 transition ease-in-out delay-150  hover:scale-75 hover:bg-rose-200 hover:text-black duration-300 ">DEQUEUE</div>
                  </div>
                </> :
                <>
                </>
            }
          </div>
          {
            selectMode === "stack" ?
              <div className="stack-container">
                {arrayVal.map((val) => {
                  return <div className="stack-value">{val}</div>
                })}
              </div> :
              selectMode === "queue" ?
                <div className={selectOperations === "dequeue" ? "queue-container-dequeue" : "queue-container"}>
                  {arrayVal.map((val) => {
                    return <div className="queue-value pt-6">{val}</div>
                  })}
                </div> :
                <></>
          }


        </div>
      </div >
    </>
  )
}

export default App
