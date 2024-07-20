import {
  Container,
  CardContainer,
  Button,
  InterestContainer,
  SkillsContainer,
  LogoutButtonContainer,
  TaskContainer,
  TaskText,
  TaskButton,
  H1,
  Task,
} from "../styledComponents/StyledUserPage";
import { RiEdit2Fill } from "react-icons/ri";
import { useUserContext } from "../providers/UserProvider";
import { GlobalStyle, Enlace } from "../styledComponents/StyledHomePages.js";
import { useEffect, useState } from "react";
import { getRequest } from "../services/request.js";

const UserProfile = () => {
  const [user, , logout] = useUserContext();
  const skillsList = user?.skills?.split(",");

  const [request, setRequest] = useState();

  //PARA CONSEGUIR LAS ID DE LAS REQUEST DE LAS TAREAS DEL USUARIO QUE HA INICIADO SESSION
  const idsRequestsUserTasks = user.task.map((task) => {
    const requestIds = task.request.map((id) => {
      return id.id;
    });
    return requestIds;
  });

  //PETICION A LAS REQUEST
  useEffect(() => {
    getRequest().then((res) => {
      setRequest(res.data);
    });
  }, []);

  //CLG DE LAS REQUEST ENTERAS
  console.log("111111", request);

  //LO DE LAS IDS DE LAS REQUEST DE LAS TAREAS DEL USUARIO
  console.log("3333333333333", idsRequestsUserTasks);

  //FILTER QUE NO FUNCIONA PARA INTENTAR CONSEGUIR LAS ID DE TODAS LAS REQUEST DE LA BASE DE DATOS Y LUEGO COMPARARLAS CON LAS (idsRequestsUserTasks) PARA PODER GUARDAR LA ID DEL USUARIO QUE LA HA ENVIADO Y MOSTRAR LOS DATOS DEL USUARIO
  const userId = request.filter((requestId) => requestId.id);

  console.log(userId, "222222222222222");

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

        <TaskContainer>
          <H1>Tareas</H1>
          <Task>
            <TaskText>asdas</TaskText>
            <TaskButton></TaskButton>
          </Task>
        </TaskContainer>
      </Container>
    </>
  );
};

export default UserProfile;
