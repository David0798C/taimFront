import {
  Container,
  CardContainer,
  Button,
  InterestContainer,
  SkillsContainer,
  LogoutButtonContainer,
  TaskContainer,
  H1,
  Task,
  TaskText,
  TaskButton,
} from "../styledComponents/StyledUserPage";
import { RiEdit2Fill } from "react-icons/ri";
import { useUserContext } from "../providers/UserProvider";
import { GlobalStyle, Enlace } from "../styledComponents/StyledHomePages.js";

const UserProfile = () => {
  const [user, , logout] = useUserContext();
  const tasks = user.task;

  console.log(tasks);

  console.log(
    tasks.map((task) => task.request.map((taskRequest) => taskRequest))
  );

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
            <li>{user?.skills}</li>
          </ul>
        </SkillsContainer>
        <InterestContainer>
          <h1>Intereses</h1>
          <br />
          <ul>
            <li>{user?.interests}</li>
          </ul>
        </InterestContainer>
        <TaskContainer>
          <H1>Tareas</H1>

          {tasks.map((task) => (
            <Task key={task.id}>
              <TaskText>{task.title}</TaskText>

              <TaskText>{task.description}</TaskText>

              <TaskText>{task.location}</TaskText>
              <TaskText>{task.hours}</TaskText>
              <TaskButton>Peticiones</TaskButton>
            </Task>
          ))}
        </TaskContainer>
      </Container>
    </>
  );
};

export default UserProfile;
