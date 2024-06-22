import { Link } from "react-router-dom";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/User">User</Link>
          </li>
          <li>
            <Link to="/Create">Create</Link>
          </li>
        </ul>
      </nav>

      <div>{children}</div>
    </LayoutContainer>
  );
};

export default Layout;
