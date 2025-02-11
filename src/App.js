import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3000/users");
        const data = await res.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        throw new Error("Oops, something went wrong", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <ul className="container">
        {users.map((user) => (
          <li key={user.id}>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <span>{user.email}</span>
            <ul>
              {user.posts.map((post) => (
                <li key={post.post_id}>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
