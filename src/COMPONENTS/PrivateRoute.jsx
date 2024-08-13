import { useAuth } from "../COMPONENTS/AuthContext";
import Home from "../Home";

function PrivateRoute({ element }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Home></Home>;
}
export default PrivateRoute;
