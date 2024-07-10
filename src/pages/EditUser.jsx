import {
    Container,
    CardContainer,
    Button,
    InterestContainer,
    SkillsContainer,
    LogoutButtonContainer
} from "../styledComponents/StyledUserPage";
import { } from "react-icons/ri";
import { useUserContext } from "../providers/UserProvider";
import { GlobalStyle } from '../styledComponents/StyledHomePages.js';

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
                        <h2 className="name" > {user?.name} {user?.surname}</h2>
                        <h4 className="username">@{user?.username}</h4>
                        <p className="email">{user?.email}</p>
                        <p>{user?.location}</p>
                        <p>{user?.description}</p>
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
