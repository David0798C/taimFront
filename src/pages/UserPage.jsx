import {
    Container,
    CardContainer,
    Button,
    InterestContainer,
    Background,
    SkillsContainer,
} from "../styledComponents/StyledUserPage";
import { RiEdit2Fill } from "react-icons/ri";
import { useUserContext } from "../providers/UserProvider";

const UserProfile = () => {
    const [user] = useUserContext();

    return (
        <>
            <Background />
            <Container key={user.id}>
                <CardContainer>
                    <a href="#"><RiEdit2Fill className="edit" size={25} /></a>
                    <img
                        src="https://placehold.co/300?text=User"
                        alt="User Profile"
                        className="profile-image"
                    />
                    <div>
                        <h2 className="name" > {user?.name} {user?.surname}</h2>
                        <h4 className="username">@{user?.username}</h4>
                        <p className="email">{user?.email}</p>
                        <p>{user?.location}Localidad</p>
                        <p>{user?.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti iure pariatur obcaecati vero, voluptas facilis incidunt maiores dolorum rerum.</p>
                        <Button>Seguir</Button>
                    </div>

                </CardContainer>
                <SkillsContainer>
                    <h1>Habilidades</h1>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                    </ul>
                </SkillsContainer>
                <InterestContainer>
                    <h1>Lo que ofrezco</h1>
                    <br />
                    <ul>
                        <li>Matemáticas</li>
                        <li>Química</li>
                    </ul>
                </InterestContainer>
                <InterestContainer>
                    <h1>Lo que busco</h1>
                    <br />
                    <ul>
                        <li>Latín</li>
                        <li>Historia del Arte</li>
                    </ul>
                </InterestContainer>
            </Container >
        </>
    );
};

export default UserProfile;
