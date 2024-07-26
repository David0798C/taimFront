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
import { getTask } from "../services/task.js";
import { TabList, TabPanel, Tabs } from "react-tabs";
import { sendEmail } from "../services/email.js";

const UserProfile = () => {
  const [user, , logout] = useUserContext();
  const skillsList = user?.skills?.split(",");
  const interestsList = user?.interests?.split(",");
  const [request, setRequest] = useState();
  const [tasks, setTasks] = useState();

  const status = 1;

  useEffect(() => {
    getRequest().then((res) => {
      console.log(res);
      setRequest(res.data);
    });

    getTask().then((ris) => {
      console.log(ris);
      setTasks(ris.data);
    });
  }, []);
  console.log(user);

  const filteredRequests = request?.filter((req) => {
    const taskes = tasks?.find((task) => task.id === req.taskId);
    return taskes && taskes.user.id === user.id;
  });

  const handleDelete = async (filteredRequest_id) => {
    console.log("111111");
    await deleteRequest(filteredRequest_id).then(() => {
      console.log("2222222");
      alert("Solicitud rechazada correctamente");
      sendEmail({to: email, subject: "TAIM Request Update", text: "Hello " +  username + " we inform that your request to " + user.username + " about " + taskName + " has been declined"})
      .then(() =>{
      })
    });
  };

  const handleAccept = async (userId, taskId, id, email, username, taskName) => {
    console.log("33333");
    await updateRequestStatus(id, {
      status,
      userId,
      taskId,
    }).then(() => {
      console.log("44444");
      alert("Solicitud aceptada correctamente");
      sendEmail({to: email, subject: "TAIM Request Update", text: "Hello " +  username + " we are happy to inform that your request to " + user.username + " about " + taskName + " has been accepted!"})
      .then(() =>{
      })
    });
  };

  console.log(filteredRequests);

  return (
    <>
      <GlobalStyle />
      <Container key={user.id}>
        <LeftColumn>
          <CardContainer>
            <Enlace to="/edit">
              <RiEdit2Fill className="edit" size={25} />
            </Enlace>
            <img src={user.profilePic} className="profile-image" />
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
                {user?.task?.map((task, index) => (
                  <Task key={index}>
                    <TaskText>
                      <h2>{task.title}</h2>
                      <div>{task.user?.name}</div>
                      <div>{task.description}</div>
                      <div>{task.hours}</div>
                    </TaskText>
                  </Task>
                ))}
              </TabPanel>
              <TabPanel>
                {user?.subscriptions?.map((subscription, index) => (
                  <Task key={index}>
                    <TaskText>
                      <h2>{subscription.title}</h2>
                      <div>{subscription.user?.name}</div>
                      <div>{subscription.description}</div>
                      <div>{subscription.hours}</div>
                    </TaskText>
                  </Task>
                ))}
              </TabPanel>
              <TabPanel>
                {filteredRequests?.map((filteredRequest, index) => (
                  <Task key={index}>
                    <TaskText>
                      <h2>{filteredRequest.title}</h2>
                      <div>{filteredRequest.description}</div>
                      <div>{filteredRequest.hours}</div>
                      <div>{filteredRequest.username}</div>
                      <div>{filteredRequest.email}</div>
                      <Button
                        onClick={() =>
                          handleAccept(
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
                      <Button onClick={() => handleDelete(filteredRequest.id)}>
                        RECHAZAR
                      </Button>
                    </TaskText>
                  </Task>
                ))}
              </TabPanel>
            </Tabs>
          </TaskContainer>
        </RightColumn>
      </Container>
    </>
  );
};

export default UserProfile;
