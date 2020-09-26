import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [getData, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8080/api/user")
      .then((data) => data.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <header className="App-header">{getData ? getData.name : null}</header>
    </div>
  );
}

export default App;
