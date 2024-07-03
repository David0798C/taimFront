import Router from "./Router";
import { useState, React } from "react";
import UserProvider from "./providers/UserProvider";

function App() {

  return (
    <div>
      <UserProvider>
        <Router />
      </UserProvider>
    </div>
  );
}

export default App;
