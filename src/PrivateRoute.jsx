import { useUserContext } from "./providers/UserProvider";
import Login from "./pages/Login"

const PrivateRoute = ({ component : Component }) => {

    const [user] = useUserContext();

    return user ? <Component/> : <Login/>;
};

export default PrivateRoute;