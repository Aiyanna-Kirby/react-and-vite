import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Link from "react-router-dom";

function Users() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  async function fetchUser() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    setUser(data);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <Link to="/">Go Back</Link>
      <h1>{user.id}</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.username}</p>
    </div>
  );
}

export default Users;
