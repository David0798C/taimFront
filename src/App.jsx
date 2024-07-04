import Router from "./Router";
import UserProvider, { useUserContext } from "./providers/UserProvider";
import Login from "./pages/Login";

function App() {
  const [user] = useUserContext();

  console.log('1111111111111', user)
  return user ? <Router /> : <Login />;

}

export default App;

