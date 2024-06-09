
/*eslint-disable*/
import { useState } from "react";
import { useEffect, useRef } from "react";
import Pills from "./Components/Pills";
import "./App.css";
function App() {
  const [searchItem, setSearchItem] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const inputRef = useRef(null);

useEffect(() => {
    const fetchUsers = () => {
      setActiveSuggestion(0);
      if (searchItem?.trim() === "") {
        setSuggestions([]);
        return;
      }
      fetch(`https://dummyjson.com/users/search?q=${searchItem}`)
        .then((res) => res.json())
        .then((data) => setSuggestions(data))
        .catch((err) => {
          console.error(err);
        });
    };

    fetchUsers();
  }, [searchItem]);

  const handleSelectUser = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setSelectedUserSet(new Set([...selectedUserSet, user.email]))
    setSearchItem("");
    setSuggestions([]);
    inputRef.current.focus();
  }

  const handleRemoveUser = (user) => {
    const updatedUsers = selectedUsers.filter(
      (selectedUser) => selectedUser.id !== user.id
    );
    setSelectedUsers(updatedUsers);
    const updatedEmails = new Set(selectedUserSet);
    updatedEmails.delete(user.email);
    setSelectedUserSet(updatedEmails);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      e.target.value === "" &&
      selectedUsers.length > 0
    ) {
      const lastUser = selectedUsers[selectedUsers.length - 1];
      handleRemoveUser(lastUser);
      setSuggestions([]);
    } else if (e.key === "ArrowDown" && suggestions?.users?.length > 0) {
      e.preventDefault();
      setActiveSuggestion((prevIndex) =>
        prevIndex < suggestions.users.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp" && suggestions?.users?.length > 0) {
      e.preventDefault();
      setActiveSuggestion((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (
      e.key === "Enter" &&
      activeSuggestion >= 0 &&
      activeSuggestion < suggestions.users.length
    ) {
      handleSelectUser(suggestions.users[activeSuggestion]);
    }
  };

  return (
    <>
      <div className="user-search-input">
        {selectedUsers?.map((user) => {
          return <Pills key={user?.email} image={user?.image} text={`${user?.firstName} ${user?.lastName}`} onClick={() => handleRemoveUser(user)} />;
        })}
        <div>
          <input
            type="text"
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
            placeholder="Search for a User...."
            ref={inputRef}
            onKeyDown={handleKeyDown}
          />
          <ul className="suggestions-list">
            {suggestions?.users?.map((user, index) => {
              return !selectedUserSet.has(user.email) ? (
                <li
                  className={index === activeSuggestion ? "active" : ""}
                  key={user.email}
                  onClick={() => handleSelectUser(user)}
                >
                  <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                </li>
              ) : (
                <></>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
