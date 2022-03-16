import React from 'react';
import AddUser from './AddUser';
import UsersList from './UsersList';

const users=[];

function App() {

  return (
    <div>
<AddUser></AddUser>
<UsersList users={users}></UsersList>
    </div>
  );
}

export default App;
