import { Container, CardContainer, Button, InterestContainer, SkillsContainer, TaskContainer, H1, LeftColumn, RightColumn, CustomTab, Task, TaskText } from "../styledComponents/StyledUserPage";
import { RiEdit2Fill } from "react-icons/ri";
import { useUserContext } from "../providers/UserProvider";
import { GlobalStyle, Enlace } from "../styledComponents/StyledHomePages.js";
import { useEffect, useState } from "react";
import { getRequest } from "../services/request.js";
import { TabList, TabPanel, Tabs } from "react-tabs";

const UserProfile = () => {
  const [user, , logout] = useUserContext();
  const skillsList = user?.skills?.split(",");
  const interestsList = user?.interests?.split(",");
  const [request, setRequest] = useState();

  useEffect(() => {
    getRequest().then((res) => {
      setRequest(res.data);
    });
  }, []);


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
              {skillsList.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </SkillsContainer>
          <InterestContainer>
            <h1>Intereses</h1>
            <br />
            <ul>
              {interestsList.map((interest) => (
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
            </Tabs>
          </TaskContainer>
        </RightColumn>
      </Container>
    </>
  );
};

export default UserProfile;
