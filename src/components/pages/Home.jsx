import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../User";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setUsers(data);
    console.log(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function renderUsers() {
    return;
    users.map((user) => {
      return (
        <Link to={`/users/${user.id}`} key={user.id}>
          <User
            id={user.id}
            name={user.name}
            email={user.email}
            username={user.username}
          />
        </Link>
      );
    });
  }

  function renderSkelLoading() {
    return <h1>Loading...</h1>;
  }

  return <div>{users.length ? renderUsers() : renderSkelLoading()}</div>;
}

export default Home;
