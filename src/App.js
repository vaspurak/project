import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3000/users");
        const data = await res.json();
        console.log(data);
      } catch (error) {
        throw new Error("Oops, something went wrong", error);
      }
    }
    fetchData();
  }, []);
  return <div className="App"></div>;
}

export default App;
