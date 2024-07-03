import Router from "./Router";
import { useState, React } from "react";
import { MyContext } from "./MyContext";

function App() {
  const [logged, setLogged] = useState("");
  const [id, setId] = useState("");

  return (
    <div>
      <MyContext.Provider value={{ logged, setLogged, id, setId }}>
        <Router />
      </MyContext.Provider>
    </div>
  );
}

export default App;
