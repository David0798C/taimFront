import {
    Container,
    CardContainer,
    Button,
    InterestContainer,
    SkillsContainer,
    LogoutButtonContainer
} from "../styledComponents/StyledUserPage";
import { IoIosSave } from "react-icons/io";
import { useUserContext } from "../providers/UserProvider";
import { GlobalStyle, Enlace } from '../styledComponents/StyledHomePages.js';

const UserProfile = () => {
    const [user, logout] = useUserContext();

    return (
        <>
            <GlobalStyle />
            <LogoutButtonContainer>
                <Button onClick={logout}>Cerrar Sesión</Button>
            </LogoutButtonContainer>
            <Container key={user?.id}>
                <CardContainer>
                    <img
                        src={user?.profilePic}
                        className="profile-image"
                    />
                    <div>
                        <p className="name-edit">Nombre </p>
                        <input type="text" className="input" placeholder={user?.name} />
                        <p className="username">Nombre de usuario</p>
                        <input type="text" className="input" placeholder={user?.username} />
                        <p className="email-edit">Email</p>
                        <input type="email" className="input" placeholder={user?.email} />
                        <p className="location-edit">Zona</p>
                        <input type="text" className="input" placeholder={user?.location} />
                        <p className="description-edit">Acerca de Mi</p>
                        <textarea name="description-box" rows={4} cols={40} className="input" placeholder={user?.description}></textarea>
                        <Enlace to="/user"><IoIosSave className="edit" size={25} /></Enlace>
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
            </Container >
        </>
    );
};

export default UserProfile;
