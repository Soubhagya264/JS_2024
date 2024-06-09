
/* eslint-disable*/
import { useState } from 'react'
import './App.css'
import explorer from './data/folderData';
import Folder from './component/Folder';
import { useTraverseTree } from './Hooks/UseTraverseTree';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  }


  return (
    <>
      <div className="App">
        <Folder explorer={explorerData} handleInsertNode={handleInsertNode} />
      </div>
    </>
  )
}

export default App
