import Router from "./Router";
import { useState, React } from "react";
import UserProvider from "./providers/UserProvider";

function App() {
//const [user] = useUserContext();
//user ? <Router /> : <Login />;
  return (
    <div>
        <Router />
    </div>
  );
}

export default App;
