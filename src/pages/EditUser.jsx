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
import { useState, useEffect } from "react";
import { updateUser } from "../services/user.js";

const UserProfile = () => {
  const [user, setUser, logout] = useUserContext();

  const id = user.id;
  console.log(user.id);

  // Inicializa los estados con los valores actuales del usuario
  const [name, setName] = useState(user?.name);
  const [surname, setSurname] = useState(user?.surname);
  const [username, setUserName] = useState(user?.username);
  const [email, setUserMail] = useState(user?.email);
  const [location, setLocation] = useState(user?.location);
  const [description, setDescription] = useState(user?.description);

  useEffect(() => {
    // Actualiza los estados cuando el usuario cambia
    setName(user?.name);
    setSurname(user?.surname);
    setUserName(user?.username);
    setUserMail(user?.email);
    setLocation(user?.location);
    setDescription(user?.description);
  }, [user]);

  const handleUpdate = async () => {
    const userAux = {
      name,
      surname,
      username,
      email,
      location,
      description,
      password: user.password // Asegúrate de mantener la contraseña actual
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <p className="name-edit">Surname </p>
            <input
              type="text"
              className="input"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <p className="username">Nombre de usuario</p>
            <input
              type="text"
              className="input"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <p className="email-edit">Email</p>
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setUserMail(e.target.value)}
            />
            <p className="location-edit">Zona</p>
            <input
              type="text"
              className="input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <p className="description-edit">Acerca de Mi</p>
            <textarea
              name="description-box"
              rows={4}
              cols={40}
              className="input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
