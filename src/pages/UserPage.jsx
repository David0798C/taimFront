import {
  Container,
  CardContainer,
  Button,
  InterestContainer,
  SkillsContainer,
  LogoutButtonContainer,
} from "../styledComponents/StyledUserPage";
import { RiEdit2Fill } from "react-icons/ri";
import { useUserContext } from "../providers/UserProvider";
import { GlobalStyle, Enlace } from "../styledComponents/StyledHomePages.js";

const UserProfile = () => {
  const [user, , logout] = useUserContext();
  const skillsList = user?.skills?.split(",");

  return (
    <>
      <GlobalStyle />
      <LogoutButtonContainer>
        <Button onClick={logout}>Cerrar Sesión</Button>
      </LogoutButtonContainer>
      <Container key={user?.id}>
        <CardContainer>
          <Enlace to="/edit">
            <RiEdit2Fill className="edit" size={25} />
          </Enlace>
          <img src={user?.profilePic} className="profile-image" />
          <div>
            <h2 className="name">
              {" "}
              {user?.name} {user?.surname}
            </h2>
            <h4 className="username">@{user?.username}</h4>
            <p className="email">{user?.email}</p>
            <p>{user?.location}</p>
            <p>{user?.description}</p>
            <Button>Seguir</Button>
          </div>
        </CardContainer>
        <SkillsContainer>
          <h1>Habilidades</h1>
          <ul>
            {skillsList.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
          </ul>
        </SkillsContainer>
        <InterestContainer>
          <h1>Intereses</h1>
          <br />
          <ul>
            <li>{user?.interests}</li>
          </ul>
        </InterestContainer>
      </Container>
    </>
  );
};

export default UserProfile;
