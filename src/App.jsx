import Router from "./Router";
import RouterUL from "./RouterUL";
import { React } from "react";
import useUserContext from "./providers/UserProvider";

function App() {

  const [user] = useUserContext();

  return (
    <div>
      user ? <Router /> : <RouterUL />;
    </div>
  );
}

export default App;
