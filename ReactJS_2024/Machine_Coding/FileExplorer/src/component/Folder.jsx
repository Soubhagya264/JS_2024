import { useState } from "react";
/* eslint-disable */
const Folder = ({ explorer, handleInsertNode }) => {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState(
        {
            visible: false,
            isFolder: false
        }
    );
    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            visible: true,
            isFolder
        })
    }
    const addNewFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder)
            setShowInput({ ...showInput, visible: false});
        }
    }
    if (explorer.isFolder) {
        return (
            <div style={{ marginTop: 5 }}>
                <div className="folder" style={{ display: "inline", cursor: "pointer" }} onClick={() => setExpand(!expand)}>
                    <span>
                        📁 {explorer?.name}
                    </span>
                    <button onClick={(e) => handleNewFolder(e, true)} style={{ margin: "5px" }}>Folder +</button>
                    <button onClick={(e) => handleNewFolder(e, false)} style={{ margin: "5px" }}>File +</button>
                </div>

                <div style={{ display: expand ? "block" : "none", paddingLeft: "45px", cursor: "pointer" }}>
                    {
                        showInput.visible && (
                            <div className="inputContainer">
                                <span>{showInput.isFolder ? "📁" : "🗃️"}</span>
                                <input className="inputContainer_input" onKeyDown={addNewFolder} autoFocus onBlur={() => setShowInput({ ...showInput, visible: false })} />
                            </div>
                        )
                    }
                    {explorer.items.map((exp) => {
                        return (
                            <Folder explorer={exp} key={exp.id} handleInsertNode={handleInsertNode} />
                        )
                    })}
                </div>
            </div>
        );
    }
    else {
        return <span className="file" style={{ display: "flex", flexDirection: "column" }}> 🗃️ {explorer.name}</span>
    }
}

export default Folder;
