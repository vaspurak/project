import { useEffect, useState } from "react";
import "../components/TodoList.css";

function TodoList() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:4000/users");
      if (!res.ok) {
        throw new Error("Ошибка загрузки пользователей");
      }
      const data = await res.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="block-list">
      <ul className="container">
        {users.map((user) => (
          <li key={user.id}>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <span>{user.email}</span>
            <ul>
              {user.posts && user.posts.length > 0 ? (
                user.posts.map((post) => (
                  <li key={post.post_id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                  </li>
                ))
              ) : (
                <p>No post available</p>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
