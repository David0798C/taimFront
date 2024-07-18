import {
  Container,
  CardContainer,
  Button,
  InterestContainer,
  SkillsContainer,
  LogoutButtonContainer,
} from "../styledComponents/StyledUserPage";
import { IoIosSave } from "react-icons/io";
import { useUserContext } from "../providers/UserProvider";
import { GlobalStyle, Enlace } from "../styledComponents/StyledHomePages.js";
import { useState } from "react";
import { updateUser } from "../services/user.js";

const UserProfile = () => {
  const [user, setUser, logout] = useUserContext();

  const id = user.id;
  console.log(user.id);

  const [name, setName] = useState();

  const [surname, setSurName] = useState();

  const [username, setUserName] = useState();

  const [email, setUserMail] = useState();

  const [location, setUserLocation] = useState();

  const [description, setUserDesc] = useState();

  const handleUpdate = async () => {
    const userAux = {
      name,
      surname,
      username,
      email,
      location,
      description,
    };
    console.log("22222");
    await updateUser(id, userAux);
    setUser({ ...user, ...userAux });

    alert("Datos actualizados correctamente");
  };

  return (
    <>
      <GlobalStyle />
      <LogoutButtonContainer>
        <Button onClick={logout}>Cerrar Sesión</Button>
      </LogoutButtonContainer>
      <Container key={user?.id}>
        <CardContainer>
          <img src={user?.profilePic} className="profile-image" />
          <div>
            <p className="name-edit">Name </p>
            <input
              type="text"
              className="input"
              placeholder={user?.name}
              onChange={(e) => setName(e.target.value)}
            />

            <p className="name-edit">Surname </p>
            <input
              type="text"
              className="input"
              placeholder={user?.surname}
              onChange={(e) => setSurName(e.target.value)}
            />
            <p className="username">Nombre de usuario</p>
            <input
              type="text"
              className="input"
              placeholder={user?.username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <p className="email-edit">Email</p>
            <input
              type="email"
              className="input"
              placeholder={user?.email}
              onChange={(e) => setUserMail(e.target.value)}
            />
            <p className="location-edit">Zona</p>
            <input
              type="text"
              className="input"
              placeholder={user?.location}
              onChange={(e) => setUserLocation(e.target.value)}
            />
            <p className="description-edit">Acerca de Mi</p>
            <textarea
              name="description-box"
              rows={4}
              cols={40}
              className="input"
              onChange={(e) => setUserDesc(e.target.value)}
            ></textarea>
            <Enlace to={"/user"}>
              <button>
                <IoIosSave className="edit" size={25} onClick={handleUpdate} />
              </button>
            </Enlace>
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
      </Container>
    </>
  );
};

export default UserProfile;
