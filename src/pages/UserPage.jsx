import {
  Container,
  CardContainer,
  Button,
  InterestContainer,
  SkillsContainer,
  TaskContainer,
  H1,
  LeftColumn,
  RightColumn,
  CustomTab,
  Task,
  TaskText,
} from "../styledComponents/StyledUserPage";
import { RiEdit2Fill } from "react-icons/ri";
import { useUserContext } from "../providers/UserProvider";
import { GlobalStyle, Enlace } from "../styledComponents/StyledHomePages.js";
import { useEffect, useState } from "react";
import {
  deleteRequest,
  getRequest,
  updateRequestStatus,
} from "../services/request.js";
import { deleteTask, getTask } from "../services/task.js";
import Swal from "sweetalert2";
import { TabList, TabPanel, Tabs } from "react-tabs";
import { sendEmail } from "../services/email.js";
import User from "../pic/user.png";

const UserProfile = () => {
  const [user, , logout] = useUserContext();
  const skillsList = user?.skills?.split(",");
  const interestsList = user?.interests?.split(",");
  const [request, setRequest] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [email, setEmail] = useState();
  const [messages, setMessages] = useState();
  const [loadingTasks, setLoadingTasks] = useState(true);
  const [loadingRequests, setLoadingRequests] = useState(true);
  const [loadingSubscriptions, setLoadingSubscriptions] = useState(true);

  const status = 1;

  useEffect(() => {
    const fetchRequestsAndTasks = async () => {
      try {
        const [requestsRes, tasksRes] = await Promise.all([getRequest(), getTask()]);
        setRequest(requestsRes.data);
        setTasks(tasksRes.data);
      } catch (error) {
        console.error("Error al cargar las solicitudes y tareas", error);
      } finally {
        setLoadingTasks(false);
        setLoadingRequests(false);
        setLoadingSubscriptions(false);
      }
    };
    fetchRequestsAndTasks();
  }, []);

  const filteredRequests = request?.filter((req) => {
    const taskes = tasks?.find((task) => task.id === req.taskId);
    return taskes && taskes.user.id === user.id;
  });

  const handleDeleteRequest = async (filteredRequest_id, email, username, taskName) => {
    try {
      await deleteRequest(filteredRequest_id);
      await sendEmail({
        to: email,
        subject: "TAIM Actualización de solicitud",
        text: `Hola, ${username}. Desde el equipo TAIM te informamos que ${user.username}, propietario de la oferta "${taskName}" ha declinado tu intercambio. ¡No te rindas! Seguro que encuentras a algún otro usuario interesado!!`,
      });
      Swal.fire({
        title: "Solicitud rechazada correctamente",
        icon: "success",
        showConfirmButton: true,
        confirmButtonColor: "#4ad627",
      });
      setRequest(request.filter((req) => req.id !== filteredRequest_id));
    } catch (error) {
      console.error("Error al rechazar la solicitud", error);
    }
  };

  const handleAcceptRequest = async (userId, taskId, id, email, username, taskName) => {
    try {
      await updateRequestStatus(id, { status, userId, taskId });
      await sendEmail({
        to: email,
        subject: "TAIM Actualización de solicitud",
        text: `Hola, ${username}. TAIM está feliz de informarte que ${user.username}, propietario de la oferta "${taskName}" ha aceptado tu intercambio! Ponte en contacto con él lo más rápido posible.`,
      });
      Swal.fire({
        title: "Solicitud aceptada correctamente",
        icon: "success",
        showConfirmButton: true,
        confirmButtonColor: "#4ad627",
      });
      const updatedRequests = request.map((req) =>
        req.id === id ? { ...req, status } : req
      );
      setRequest(updatedRequests);
    } catch (error) {
      console.error("Error al aceptar la solicitud", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      Swal.fire({
        title: "Oferta eliminada correctamente",
        icon: "success",
        showConfirmButton: true,
        confirmButtonColor: "#4ad627",
      });
      // Actualiza el estado local de las tareas
      setTasks(tasks.filter((task) => task.id !== taskId));
      // También elimina las solicitudes asociadas a la tarea eliminada
      setRequest(request.filter((req) => req.taskId !== taskId));
    } catch (error) {
      console.error("Error al eliminar la oferta", error);
    }
  };

  // Filtrar las tareas que pertenecen al usuario actual
  const userTasks = tasks.filter((task) => task.user.id === user.id);

  return (
    <>
      <GlobalStyle />
      <Container key={user.id}>
        <LeftColumn>
          <CardContainer>
            <Enlace to="/edit">
              <RiEdit2Fill className="edit" size={25} />
            </Enlace>
            <img src={User} className="profile-image" />
            <div>
              <h2 className="name">
                {user.name} {user.surname}
              </h2>
              <h4 className="username">@{user.username}</h4>
              <p className="email">{user.email}</p>
              <p>{user.location}</p>
              <p>{user.description}</p>
              <Button onClick={logout}>Cerrar Sesión</Button>
            </div>
          </CardContainer>
          <SkillsContainer>
            <h1>Habilidades</h1>
            <ul>
              {skillsList?.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </SkillsContainer>
          <InterestContainer>
            <h1>Intereses</h1>
            <br />
            <ul>
              {interestsList?.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </InterestContainer>
        </LeftColumn>
        <RightColumn>
          <TaskContainer>
            <H1>Tareas</H1>
            <Tabs>
              <TabList>
                <CustomTab>Mis Ofertas</CustomTab>
                <CustomTab>Ofertas Suscrito</CustomTab>
                <CustomTab>Solicitudes</CustomTab>
              </TabList>
              <TabPanel>
                {loadingTasks ? (
                  <div>Cargando Mis Ofertas...</div>
                ) : (
                  userTasks.map((task, index) => (
                    <Task key={index}>
                      <TaskText>
                        <h2>{task.title}</h2>
                        <div>{task.user?.name}</div>
                        <div>{task.description}</div>
                        <div>{task.hours}</div>
                        <Button
                          onClick={() => handleDeleteTask(task.id)}
                        >
                          ELIMINAR
                        </Button>
                      </TaskText>
                    </Task>
                  ))
                )}
              </TabPanel>
              <TabPanel>
                {loadingSubscriptions ? (
                  <div>Cargando Ofertas Suscrito...</div>
                ) : (
                  user?.subscriptions?.map((subscription, index) => (
                    <Task key={index}>
                      <TaskText>
                        <h2>{subscription.title}</h2>
                        <div>{subscription.user?.name}</div>
                        <div>{subscription.description}</div>
                        <div>{subscription.hours}</div>
                      </TaskText>
                    </Task>
                  ))
                )}
              </TabPanel>
              <TabPanel>
                {loadingRequests ? (
                  <div>Cargando Solicitudes...</div>
                ) : (
                  filteredRequests?.map((filteredRequest, index) => (
                    <Task key={index}>
                      <TaskText>
                        <h2>{filteredRequest.title}</h2>
                        <div>{filteredRequest.description}</div>
                        <div>{filteredRequest.hours}</div>
                        <div>{filteredRequest.username}</div>
                        <div>{filteredRequest.email}</div>
                        <Button
                          onClick={() =>
                            handleAcceptRequest(
                              filteredRequest.userId,
                              filteredRequest.taskId,
                              filteredRequest.id,
                              filteredRequest.email,
                              filteredRequest.username,
                              filteredRequest.title
                            )
                          }
                        >
                          ACEPTAR
                        </Button>
                        <Button
                          onClick={() =>
                            handleDeleteRequest(
                              filteredRequest.id,
                              filteredRequest.email,
                              filteredRequest.username,
                              filteredRequest.title
                            )
                          }
                        >
                          RECHAZAR
                        </Button>
                      </TaskText>
                    </Task>
                  ))
                )}
              </TabPanel>
            </Tabs>
          </TaskContainer>
        </RightColumn>
      </Container>
    </>
  );
};

export default UserProfile;
