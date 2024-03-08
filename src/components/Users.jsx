import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  
  
  return (
    <div style={{
        border: '2px solid blue',
        margin: '15px',
        padding: '15px',
        borderRadius: '10px'
    }}>
      <h3>Users: {users.length}</h3>
    </div>
  );
}

//
