import React, { useState } from "react";
import AddUser from "./AddUser";
import UsersList from "./UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (username, age) => {
    setUsersList((prvUsers) => {
      return [
        ...prvUsers,
        { name: username, age: age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
