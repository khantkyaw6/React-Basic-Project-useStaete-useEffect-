import React, { useEffect, useState } from 'react';
import User from './components/user/User';
import AddUser from './components/user/AddUser';

// https://randomuser.me/api/?results=10
function App() {
  let [users, setUser] = useState([]);
  let [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((res) => res.json())
      .then((users) => {
        let rawUser = users.results;
        let filteredUser = rawUser.map((usr) => {
          return {
            name: `${usr.name.title} ${usr.name.first} ${usr.name.last}`,
            uuid: usr.login.uuid,
            image: usr.picture.thumbnail,
            phone: usr.phone,
            cell: usr.cell,
          };
        });
        setUser(filteredUser);
      })
      .catch((err) => console.log(err));
  }, []);

  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  const removeUserHandler = (uuid) => {
    let remainUser = users.filter((usr) => usr.uuid !== uuid);
    setUser(remainUser);
  };

  const addUserHandler = (user) => {
    let newUser = [user, ...users];
    setUser(newUser);
    setShowForm(!showForm);
  };

  return (
    <div className='container my-5'>
      <h1 className='text-center text-info my-5'>Our Employee</h1>
      <button className='btn btn-sm btn-primary my-2' onClick={showFormHandler}>
        Add User
      </button>
      {showForm && <AddUser addUser={addUserHandler} />}
      {users.map((usr) => (
        <User key={usr.uuid} user={usr} remove={removeUserHandler} />
      ))}
    </div>
  );
}

export default App;
