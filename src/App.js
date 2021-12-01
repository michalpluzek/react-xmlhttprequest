import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const baseURL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", baseURL, true);
    // xhr.onload = () => {
    //   if (xhr.status === 200) {
    //     const users = JSON.parse(xhr.response);

    //     setUsers(users)
    //   }
    // };

    xhr.addEventListener("load", () => onLoad(xhr));

    xhr.send();
    return () => xhr.removeEventListener("load", onLoad);
  }, []);

  const onLoad = (xhr) => {
    if (xhr.status === 200) {
      const users = JSON.parse(xhr.response);

      setUsers(users);
    }
  };

  const _users = users.map((user) => (
    <div key={user.id}>
      <h3>{user.name}</h3>
      <p>{user.address.street}</p>
    </div>
  ));

  return <div>{_users}</div>;
};

export default App;
