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
import { useState, useEffect, useRef } from "react";
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
  const [skills, setSkills] = useState(user?.skills);
  const [interests, setInterests] = useState(user?.interests);
  const [profilePic, setProfilePic] = useState(user?.profilePic);
  const [skillsList, setSkillsList] = useState(user?.skills?.split(','));
  const skillsListRef = useRef(skillsList);

  // Actualiza la referencia cada vez que skillsList cambie
  skillsListRef.current = skillsList;

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const newSkill = e.target.value.trim();
      if (newSkill) {
        setSkillsList(prevSkillsList => {
          const updatedSkillsList = [...prevSkillsList, newSkill];
          setSkills(updatedSkillsList.join(','));
          return updatedSkillsList;
        });
        e.target.value = "";
      }
    }
  };

  const handleDelete = (index) => {
    setSkillsList(prevSkillsList => {
      const updatedSkillsList = prevSkillsList.filter((_, i) => i !== index);
      setSkills(updatedSkillsList.join(',')); // Asumiendo que `setSkills` es una función que usas para algo más.
      return updatedSkillsList;
    });
  };


  useEffect(() => {
    // Actualiza los estados cuando el usuario cambia
    setName(user?.name);
    setSurname(user?.surname);
    setUserName(user?.username);
    setUserMail(user?.email);
    setLocation(user?.location);
    setDescription(user?.description);
    setSkills(user?.skills);
    setInterests(user?.interests);
    setProfilePic(user?.profilePic);
  }, [user]);

  const handleUpdate = async () => {
    const userAux = {
      name,
      surname,
      username,
      email,
      location,
      description,
      skills,
      interests,
      profilePic,
      password: user.password, // Asegúrate de mantener la contraseña actual
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
                <IoIosSave className="edit" size={25} onClick={handleUpdate} />
            </Enlace>
          </div>
        </CardContainer>
        <SkillsContainer>
        <h1>Habilidades</h1>
        <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>
            {skill}
            <button onClick={() => handleDelete(index)}>Eliminar</button>
          </li>
        ))}
        <li>
          <input
            name="description-box"
            rows={4}
            cols={40}
            className="input"
            onKeyDown={handleKeyDown}
          />
        </li>
      </ul>
        </SkillsContainer>
        <InterestContainer>
          <h1>Intereses</h1>
          <br />
          <ul>
            <li>{user?.interests}<input
              name="description-box"
              rows={4}
              cols={40}
              className="input"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            ></input></li>
          </ul>
        </InterestContainer>
      </Container>
    </>
  );
};

export default UserProfile;
